import React from 'react';
import Icon from '@material-ui/core/Icon';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i>
                <Icon>search</Icon>
              </i>
            </label>
            <i className="material-icons">
              <Icon>close</Icon>
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
