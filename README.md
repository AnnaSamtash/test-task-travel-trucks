TravelTrucks

TravelTrucks is a web application designed to help users easily find and rent
campers. The application allows users to browse through a catalog of available
camper vehicles, view detailed information for each camper, filter by various
criteria, read reviews, and even make reservations.

Features:

- Homepage with a call to action leading to the camper catalog.

- Catalog Page with a listing of available campers and filter options by
  location, body type, air conditioning, kitchen, and more.

- Detailed Camper Page with specifications, user reviews, a photo gallery, and a
  booking form.

- Favorites Functionality: Users can add campers to their favorites list, which
  persists across page reloads.

- Search Functionality with filtering capabilities.

- Pagination on the catalog page with a "Load More" button to view more campers.

- User Reviews: Display of camper reviews on a five-star rating system.

- BookingForm: Allows users to make reservations for a selected camper.

- Responsive design (optional based on your preferences).

Installation

1.Clone the repository: git clone
https://github.com/AnnaSamtash/test-task-travel-trucks

2.Navigate to the project directory: cd traveltrucks

3.Install the dependencies: npm install

4.Start the development server: npm run dev

5.Open the app in your browser: http://localhost:5173

API

This project uses a backend API for camper data, available at:

- GET /campers: Retrieves all camper listings (supports filtering).

- GET /campers/: Retrieves details for a specific camper.

API base URL: https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

Technologies

- React (with Vite)

- Redux for global state management

- React Router for navigation

- Axios for API requests

- CSS Modules or your preferred CSS library

- React Persist to handle state persistence

Usage

1.Navigate to the homepage (/), where you'll see a banner with an option to view
the catalog.

2.Go to the catalog page (/catalog) to see available campers. Use the filters to
narrow your search.

3.Click "Show more" on a camper listing to see its detailed page with reviews
and booking options.

4.Add campers to your favorites list. The favorites list will remain even after
reloading the page.

5.Use the booking form to reserve a camper.

Deployment

The project is deployed using Vercel.

Author

This project was developed by Anna Samtash.

For any questions or feedback, feel free to reach out via annasamtash@gmail.com.

For more information about my projects, you can go to my linkedin profile
<www.linkedin.com/in/anna-samtash>
