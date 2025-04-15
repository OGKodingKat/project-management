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