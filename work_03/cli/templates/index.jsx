// comnponet.js

import React from 'react'

import './<%= name %>.css'

export default () => <div className="<%= name %>"></div>


// componnets.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import <%= name %> from './<%= name %>';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<<%= name %> />, div);
  ReactDOM.unmountComponentAtNode(div);
});