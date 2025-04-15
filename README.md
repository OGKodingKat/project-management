///////////////////////////////////////////////////
// MOBILE-FIRST PRODUCT FEEDBACK APP — PSEUDO CODE
///////////////////////////////////////////////////

// TECH STACK
// Frontend: React (HTML, CSS, JS) deployed to Netlify
// Backend: Node.js + Express deployed to Render
// Database: PostgreSQL deployed to Render
// API Testing: Postman; DB Management: pgAdmin

///////////////////////////////////////////////////
// FRONTEND: REACT (Mobile-First)
///////////////////////////////////////////////////

// -- File: App.js --
/*
  Setup your React app with routing.
  Mobile-first: design components for smaller viewports by default.
*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FeedbackDetails from './pages/FeedbackDetails';
import AddFeedback from './pages/AddFeedback';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback/:id" element={<FeedbackDetails />} />
        <Route path="/add" element={<AddFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

///////////////////////////////////////////////////
// -- File: components/Header.js --
// Mobile Header with a simple title & hamburger menu (if needed)
function Header() {
  return (
    <header className="header">
      <h1>Product Feedback</h1>
      {/* Add hamburger icon for menu if necessary */}
    </header>
  );
}
export default Header;

///////////////////////////////////////////////////
// -- File: pages/HomePage.js --
// Shows the list of feedback items in a mobile-friendly format
function HomePage() {
  // Pseudo code for fetching feedbacks
  // const feedbackData = fetchFeedbackDataFromAPI(); // GET /feedbacks
  
  return (
    <div className="container">
      <h2>All Feedback</h2>
      {/* Loop through feedbackData: */}
      /*
      feedbackData.map(feedback => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))
      */
      <button onClick={redirectToAddFeedback}>Add Feedback</button>
    </div>
  );
}
export default HomePage;

///////////////////////////////////////////////////
// -- File: components/FeedbackCard.js --
// Displays individual feedback in a touch-friendly card format
function FeedbackCard({ feedback }) {
  return (
    <div className="feedback-card">
      <h3>{feedback.title}</h3>
      <p>{feedback.description}</p>
      <div className="upvote-mobile">
        <span>{feedback.upvotes}</span>
        <button onClick={() => handleUpvote(feedback.id)}>Upvote</button>
      </div>
    </div>
  );
}
export default FeedbackCard;

///////////////////////////////////////////////////
// -- File: pages/FeedbackDetails.js --
// Shows a single feedback item with its details and comments
function FeedbackDetails() {
  // Fetch detailed feedback using parameter: GET /feedbacks/:id
  // Also fetch associated comments.
  return (
    <div className="container">
      {/* Display feedback details */}
      {/* Display collapsible comment sections for mobile clarity */}
    </div>
  );
}
export default FeedbackDetails;

///////////////////////////////////////////////////
// -- File: pages/AddFeedback.js --
// Form to add new feedback
function AddFeedback() {
  // Form fields: Title, Category (dropdown), Description
  // On submit, POST data to /feedbacks
  return (
    <div className="container">
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" placeholder="Feedback title" required />
        </label>
        <label>
          Category:
          <select name="category" required>
            <option value="">Select Category</option>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description" placeholder="Detail your feedback" required></textarea>
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
export default AddFeedback;

///////////////////////////////////////////////////
// MOBILE-FIRST CSS (styles.css)
///////////////////////////////////////////////////

// Default mobile styles
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
}

.container {
  padding: 16px;
  max-width: 100%;
}

.header {
  background: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 24px;
}

.feedback-card {
  background: #ffffff;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Example of a mobile-friendly upvote button */
.upvote-mobile button {
  background: #c0e0de;
  border: none;
  padding: 8px;
  border-radius: 4px;
}

/*
  Use a media query to adjust styles for larger screens.
  Mobile-first: design defaults for mobile, then enhance.
*/
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
  .feedback-card {
    padding: 16px;
  }
}

///////////////////////////////////////////////////
// NOTE ON BACKEND INTEGRATION (API ENDPOINTS)
// Mobile-first UI will integrate with these endpoints:
//   GET    /feedbacks        -> Fetch all feedbacks
//   GET    /feedbacks/:id    -> Fetch a single feedback with comments
//   POST   /feedbacks        -> Add a new feedback
//   POST   /comments         -> Add a comment (for a given feedback)
// Handlers like handleUpvote(feedback.id) in FeedbackCard will call the respective endpoint.
///////////////////////////////////////////////////

