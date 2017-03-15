import React, { PropTypes } from 'react';

const PublicPage = (props) => (
  <div>
    {props.children}
  </div>
);

PublicPage.propTypes = {
  children: PropTypes.object,
};

export default PublicPage;
