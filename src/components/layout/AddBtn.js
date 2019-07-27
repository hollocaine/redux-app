import React from 'react';
import Icon from '@material-ui/core/Icon';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <Icon>add</Icon>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <Icon>person</Icon>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <Icon>person_add</Icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
