import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');
  const onSubmit = () => {
    if (fname === '' || sname === '') {
      M.toast({ html: 'Please enter first and last name' });
    } else {
      console.log(fname, sname);
      setFname('');
      setSname('');
    }
  };
  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={e => setFname(e.target.value)}
            />
            <label htmlFor="fname" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="sname"
              value={sname}
              onChange={e => setSname(e.target.value)}
            />
            <label htmlFor="sname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: '75%',
  height: '75%'
};
export default AddTechModal;
