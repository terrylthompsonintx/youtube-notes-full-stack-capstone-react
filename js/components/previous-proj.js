import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function PreviousProj(props) {
return (
    <main className='previous-proj'>
    <div className='col-12' id='oldProjDisplay'>

    </div>


    </main>


)
}
