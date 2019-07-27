import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.fname} {tech.sname}
        <a href="#!" className="secondary-content">
          <Icon>delete</Icon>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItem;
