/* eslint-disable */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import React from 'react';

import Message from './Message';
import { LOAD_ERROR } from '../../messages';

configure({ adapter: new Adapter() });

describe('<Message />', function() {
    it('should render a container `Message`', function() {
        const action = () => 1;
  
        const wrapper = shallow(<Message onClick={action} text={LOAD_ERROR} />);
  
        expect(wrapper.first().is('.Message')).to.is.true;
        expect(wrapper).to.have.length(1);
    });  

    it('should render button `Message__Content` in the container `Message`', function() {
        const action = () => 1;
  
        const wrapper = shallow(<Message onClick={action} text={LOAD_ERROR} />);
  
        expect(wrapper.find('.Message__Content').parent().is('.Message')).to.is.true;
        expect(wrapper.find('.Message')).to.have.length(1);
    });  

    it('allows to set props', function() {
      const action = () => 1;

      const wrapper = shallow(<Message onClick={action} text={LOAD_ERROR} />);

      expect(wrapper.find('.Message__Content').props().onClick).to.equal(action);
      expect(wrapper.find('.Message__Content').props().children).to.equal(LOAD_ERROR);
    });  
  });
