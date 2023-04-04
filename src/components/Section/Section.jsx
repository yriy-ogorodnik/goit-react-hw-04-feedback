import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
