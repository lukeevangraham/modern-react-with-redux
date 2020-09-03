import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // todo:  make sure we call callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
