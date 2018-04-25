/* eslint-disable */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', function() {
  it('allows to set props', function() {
      const action = () => 1;

      const wrapper = shallow(<Button state={{
        disabled: true, 
        icon: '>', 
        action: { onClick: action }
        }} />);

      expect(wrapper.props().onClick).to.equal(action);
      expect(wrapper.props().disabled).to.is.true;
      expect(wrapper.props().children).to.equal('>');
    });

    it('set class to `disabled-button` when props disabled set to true', function() {
      const action = () => 1;

      const wrapper = shallow(<Button state={{
        disabled: true, 
        icon: '>', 
        action: { onClick: action }
        }} />);

      expect(wrapper.find('.disabled-button')).to.have.length(1);
    });
  
  });
  