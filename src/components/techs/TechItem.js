import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: {id, fname, sname},deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Technician deleted' });
  }
  return (
    <li className="collection-item">
      <div>
        {fname} {sname}
        <a href="#!" onClick={onDelete} className="secondary-content">
          <Icon>delete</Icon>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, {deleteTech})(TechItem);
