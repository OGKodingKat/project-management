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