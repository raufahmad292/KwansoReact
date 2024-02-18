
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`


Developer notes on how you have structured your components and the thought
process behind them.

Certainly! Here's a breakdown of the component structure and the thought process behind it:

App Component: This is the main component that serves as the entry point of the application. It contains the overall layout and structure of the application, including the header, user listing, pagination, and potentially other sections like filters.

UserListing Component: This component is responsible for displaying the list of users. It handles fetching user data from an API, applying filters, and displaying the paginated list of users. It's structured to be reusable and maintainable, with separate concerns for data fetching, filtering, and rendering.

UserCard Component: This is a reusable component that represents a single user card. It encapsulates the UI for displaying user details, such as name, email, and profile picture. By abstracting this into a separate component, we promote reusability and maintainability.

Pagination Component: This component handles pagination logic and UI. It provides buttons for navigating between pages and displays information about the current page and total number of pages. Like the other components, it's designed to be reusable across different parts of the application.

Profile Component: This component represents the user profile page. It displays detailed information about a single user, such as their name, email, gender, and location. It's structured to receive user data as props, making it easy to display the profile of any user.

Thought process behind the component structure:

Separation of Concerns: Each component is designed to have a single responsibility, whether it's fetching data, rendering UI, handling pagination, or displaying user profiles. This promotes modularity, making it easier to understand, test, and maintain each part of the application.

Reusability: Components like UserCard and Pagination are designed to be reusable across different parts of the application. This reduces duplication and promotes consistency in the UI.

Component Composition: The application is structured using a composition of smaller, reusable components. This allows for building complex UIs from simpler building blocks, following the principles of component-based architecture.

Props-based Data Flow: Data is passed between components using props, following a unidirectional data flow. This makes it easier to reason about data dependencies and facilitates predictable rendering behavior.

Responsive Design: The components are designed to be responsive, ensuring a consistent user experience across different screen sizes and devices.

Search Algorithm

Empty Query Handling:
If the search query is empty, we reset the filtered users to display all users (setFilteredUsers(users)).

Filtering Users: 
We use the filter method on the users array to create a new array (filteredUsers) containing only the users that match the search query. We check if the query matches any part of the user's name, email, location, phone number, or title.
