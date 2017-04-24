// gokaygurcan.github.io
//
// https://www.gokaygurcan.com/
// MIT © Gökay Gürcan

// node modules
import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

// local modules
import Index from '../pages/index';

describe('Enzyme', () => {
  it('Print "gokaygurcan.github.io"', () => {
    const index = shallow(
      <Index />
    );

    expect(index.find('span').text().trim()).toEqual('gokaygurcan.github.io');
  });
});

describe('Snapshot Testing', () => {
  it('Print "gokaygurcan.github.io"', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
