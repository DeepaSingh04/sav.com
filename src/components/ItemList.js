import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import DraggableItem from "./DraggableItem";

const ITEMS_PER_PAGE = 10;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchData();
      setItems(data);
      setFilteredItems(data);
    };
    loadItems();
  }, []);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...filteredItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setFilteredItems(updatedItems);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div>
        {currentItems.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
      <Pagination
        totalItems={filteredItems.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ItemList;
