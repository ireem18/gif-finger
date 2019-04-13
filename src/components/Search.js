import React from 'react';


const Search = ({searchTerm,onSearch,onTerm}) => (
  <section className="section">
    <div className="container">
      <div className="field">
        <div className="control">
          <form onSubmit={e => onSearch(e)}>
            <input 
              value={searchTerm}
              onChange={e => onTerm(e)}
              className="input is-danger is-medium"
              type="text"
              placeholder="Search here..."
              autoFocus />
          </form>
        </div>
      </div>
    </div>
  </section>
);



export default Search;