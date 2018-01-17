import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header class='col-12'>
        <button id='homeButton'><img src="assets/images/youtube-logo-transparent.png" alt="Image of YouTube Notes Logo" /></button>

        <div className='messageBox'><span>Loading....</span></div>
        </header>

    )
}
