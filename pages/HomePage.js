function HomePage() {
    // Pseudo code for fetching feedbacks
    // const feedbackData = fetchFeedbackDataFromAPI(); // GET /feedbacks
    
    return (
      <div className="container">
        <h2>All Feedback</h2>
        {/* Loop through feedbackData: */}
        {/* 
        feedbackData.map(feedback => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))
        */}
        <button onClick={redirectToAddFeedback}>Add Feedback</button>
      </div>
    );
  }
  export default HomePage;