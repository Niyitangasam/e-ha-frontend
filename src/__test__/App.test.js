import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
describe('app component', () => {
  it('should render without error', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.length).toEqual(1);
  });
});
