// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// node modules
import {PropTypes} from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({children, title}) => (
  <div className="wrapper">
    <Head>
      <title>{ title }</title>

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp; -- &nbsp;
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        &nbsp; -- &nbsp;
        <Link href="/projects?id=sample" as="/projects/sample">
          <a>Project details</a>
        </Link>
      </nav>
    </header>

    { children }

    <footer>
      MIT &copy; Gökay Gürcan
    </footer>

    <style jsx>{`
      .wrapper {
        position: absolute;
        text-align: center;
        top: 50%;
        width: 100%;
      }
    `}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: 'Gökay Gürcan'
};

export default Layout;
