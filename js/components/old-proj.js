import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function OldProj(props) {
return (
    <main className='old-proj'>
    <article id='subjectHeadOld' className='col-12'>
    </article>
    <article className='col-6' id='oldSearchReturn'>
    </article>
    <article className='col-6' id='youoldNoteaArea'>
    </article>

    </main>

)
}
