import React from 'react';
import './ControlGroup.scss';

const ControlGroup = ({ children, groupName }) => (
  <>
    <div className="main-heading-in-card">
      <h2>{groupName}</h2>
    </div>
    <div className="wrapper-in-card">{children}</div>
  </>
);

export default ControlGroup;