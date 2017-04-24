// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// node modules
import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

// local modules
import Projects from '../pages/projects';

describe('Enzyme', () => {
  it('Print "Projects page"', () => {
    const projects = shallow(
      <Projects />
    );

    expect(projects.find('span').text().trim()).toEqual('Projects page');
  });

  it('Print "sample" project', () => {
    const props = {
      query: {
        id: 'sample'
      }
    };

    const projects = shallow(
      <Projects {...props} />
    );

    expect(projects.find('pre').text().trim()).toEqual('sample');
  });
});

describe('Snapshot Testing', () => {
  it('Print "Projects page"', () => {
    const component = renderer.create(<Projects />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
