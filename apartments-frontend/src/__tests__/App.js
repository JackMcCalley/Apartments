import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders create an apartment form", ()=>{
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual('Add an Apartment')
})

it("links to apartment index", ()=>{
  const app = mount(<App />)
  app.find('a#apartments-link').simulate('click', {button: 0})
  expect(app.find('.subtitle').text()).toEqual('All the Apartments')
})
