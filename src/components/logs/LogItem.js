import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`module-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id} last updated by </span>
          <span className="black-text">{log.tech}</span> on{' '}
          <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i>
            <Icon>delete</Icon>
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;