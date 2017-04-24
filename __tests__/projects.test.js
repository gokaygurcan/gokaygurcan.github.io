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
import DummyProject from '../pages/projects/dummy';

describe('Enzyme', () => {
  it('Print "Projects page"', () => {
    const projects = shallow(
      <Projects />
    );

    expect(projects.find('span').text().trim()).toEqual('Projects page');
  });

  it('Print "Dummy Project"', () => {
    const dummyProjects = shallow(
      <DummyProject />
    );

    expect(dummyProjects.find('span').text().trim()).toEqual('Dummy Project');
  });
});

describe('Snapshot Testing', () => {
  it('Print "Projects page"', () => {
    const component = renderer.create(<Projects />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Print "Dummy Project"', () => {
    const component = renderer.create(<DummyProject />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
