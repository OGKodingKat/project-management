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