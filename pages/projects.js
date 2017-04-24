// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// node modules
import {PropTypes} from 'prop-types';
import React from 'react';

// local modules
import Layout from '../components/layout';

const Projects = ({query}) => (
  <Layout>
    <div>
      <span>Projects page</span>

      <pre>{ query.id }</pre>
    </div>
  </Layout>
);

Projects.getInitialProps = ({query}) => {
  return {
    query
  };
};

Projects.propTypes = {
  query: PropTypes.object
};

Projects.defaultProps = {
  query: {}
};

export default Projects;
