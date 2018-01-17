import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer (props) {
    return (

        <footer className='col-12' id='contact'>
        <h2>Contact </h2>

        <p>&copy;Terry Thompson</p>
        <ul>

        <li>
        <a href="https://github.com/terrylthompsonintx"><img src="assets/images/mark-github.png" alt="Git Hub Logo"></a>
        </li>
        <li>
        <a href='mailto:TerryLThompsonintx@gmail.com'><img src="assets/images/email.png" alt="Email Logo"></a>
        </li>
        <li>
        <a href='https://www.linkedin.com/in/terrylthompson/'><img src="assets/images/th.jpg" alt="linked in  Logo"></a>
        </li>
        </ul>


        </footer>

    )
}
