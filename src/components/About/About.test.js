import React from 'react'
import ReactDOM from 'react-dom'
import About from './About'
import { BrowserRouter } from 'react-router-dom'

it('About Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <About />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});