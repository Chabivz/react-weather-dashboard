import React from 'react';
// import 'style.css';
import { useLocation, useHistory } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Weather Dashboard</h4>
      </div>
    </footer>
  );
};

export default SearchBar;
