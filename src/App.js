// Import necessary modules and components
import { useEffect } from "react"; // useEffect is a hook for side effects in functional components
import { Routes, Route, useLocation } from "react-router-dom"; // Routes and Route are components for routing, useLocation provides the current location
import ReactGA from "react-ga4"; // Import ReactGA for Google Analytics

// Importing components for different pages
import Homepage from "./pages/homepage";
import Notfound from "./pages/404";

// Import the Google Analytics tracking ID from a separate file
import { TRACKING_ID } from "./data/tracking";

// Import the main CSS file for the application
import "./app.css";

// Define the main App component
function App() {
    // Get the current location (URL) using the useLocation hook
    const location = useLocation();

    // useEffect hook to initialize Google Analytics and track page views
    useEffect(() => {
        // Check if a valid tracking ID is provided
        if (TRACKING_ID !== "") {
            // Initialize Google Analytics with the provided tracking ID
            ReactGA.initialize(TRACKING_ID);
            // Send a pageview hit to Google Analytics with the current location
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
    }, [location]); // Run this effect whenever the location changes

    // Return the JSX to render the application
    return (
        <div className="App"> {/* The main wrapper div for the application */}
            <Routes> {/* Define the routes for the application */}
                {/* Define a route for the homepage */}
                <Route path="/" element={<Homepage />} />
                {/* Define a catch-all route for undefined paths, displaying a 404 page */}
                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
    );
}

// Export the App component as the default export
export default App;
