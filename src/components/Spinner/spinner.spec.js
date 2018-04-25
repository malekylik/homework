/* eslint-disable */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import React from 'react';
import { shallow } from 'enzyme';

import  Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
    it('should render a container `.infinite__spinner`', () => {
      const wrapper = shallow(<Spinner />);
      expect(wrapper.children.length).to.equal(1);
      expect(wrapper.first().is('.infinite__spinner')).to.is.true;
    });
  
    it('container should contain render a spinner component `.spinner`', () => {
      const wrapper = shallow(<Spinner />);
      expect(wrapper.find('.infinite__spinner').children).to.have.length(1);
      expect(wrapper.contains(<div className="spinner" />)).to.is.true;
    });
  });
