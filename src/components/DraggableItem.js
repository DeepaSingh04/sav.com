import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableItem = ({ item, index, moveItem }) => {
  const [, drag] = useDrag(() => ({
    type: "ITEM",
    item: { index },
  }));

  const [, drop] = useDrop(() => ({
    accept: "ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        padding: "10px",
        margin: "5px 0",
        backgroundColor: "#f8f9fa",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      {item.title}
    </div>
  );
};

export default DraggableItem;
