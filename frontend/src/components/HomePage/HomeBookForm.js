import { useState } from "react";

const HomeBookForm = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [numGuest, setNumGuest] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    //handle request to book campspot
  };
  return (
    <div className="home-book-form-container">
      <form onSubmit={handleSubmit} className="home-book-form">
        <div className="home-form-input-container">
          <label htmlFor="location">WHERE TO?</label>
          <input
            type="text"
            name="location"
            placeholder="Please put name of location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="home-form-input-container">
          <label htmlFor="date">DATE</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="home-form-input-container">
          <label htmlFor="numGuest">HOW MANY GUESTS?</label>
          <input
            type="number"
            name="numGuest"
            value={numGuest}
            onChange={(e) => setNumGuest(e.target.value)}
          />
        </div>
        <button type="submit" className="search-spot-btn">
          <i className="fas fa-search" id="search-spot-btn-icon"></i>
        </button>
      </form>
      <div className="img-container">
        <img
          src={
            "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="camping picture"
        />
      </div>
    </div>
  );
};

export default HomeBookForm;
