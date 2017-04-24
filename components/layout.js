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
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui, shrink-to-fit=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta httpEquiv="cleartype" content="on" />

      <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
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
