React App with Google reCAPTCHA, Pagination, and Drag-and-Drop

This is a simple React-based application that demonstrates key front-end features:

Google reCAPTCHA for user verification before accessing the app.

Pagination to handle large lists of items (10 items per page).

Search Filter to filter through items.

Drag-and-Drop functionality for rearranging items on the current page.


Features:

Captcha Page: Users must verify through Google reCAPTCHA before accessing the app.

Item List: Displays a list of items, with pagination and a search filter to search and filter through items

Drag-and-Drop: Users can rearrange items within the current page using drag-and-drop functionality.


Requirements:

Node.js 

npm or yarn package manager

Setup Instructions:

1. Clone the Repository

git clone https://github.com/your-username/react-app.git

2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using either npm or yarn:

cd react-app

npm install

or

cd react-app

yarn install

3. Add Your Google reCAPTCHA Site Key

To use Google reCAPTCHA, go to Google reCAPTCHA and create a reCAPTCHA key. Then, replace your-site-key in the following file:

<ReCAPTCHA sitekey="your-site-key" onChange={handleVerify} />

4. Start the Application
Run the app with the following command:

npm start

or

yarn start

This will launch the development server, and the app will be accessible at http://localhost:3000.


5. Application Flow:

Captcha Page: On visiting the site, users will first need to verify with Google reCAPTCHA.

Item List: After verifying, the user will be able to view the list of items, which includes pagination (10 items per page) and a search filter.

Drag-and-Drop: The items displayed on the page can be rearranged via drag-and-drop functionality.


Key Libraries Used:


React: For building the user interface.

react-router-dom: For routing and navigation between different components.

react-dnd: For implementing drag-and-drop functionality.

react-google-recaptcha: For integrating Google reCAPTCHA.

axios (optional): For making API calls (if needed for mock data).


Optimizations:

Lazy Loading: Components like ItemList and other pages are loaded dynamically to improve performance.

Debouncing: The search bar is debounced to optimize performance and reduce unnecessary re-renders during input.

deploy link:
https://sav-com-jade.vercel.app/

