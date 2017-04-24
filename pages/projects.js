// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// node modules
import Link from 'next/link';
import React from 'react';

// local modules
import Layout from '../components/layout';

const Projects = () => (
  <Layout>
    <div>
      <span>Projects page</span>

      <ul>
        <li>
          <Link href="/projects/dummy">
            <a>dummy</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
    </div>
  </Layout>
);

export default Projects;
