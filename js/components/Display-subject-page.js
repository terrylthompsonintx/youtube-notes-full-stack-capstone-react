import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function DisplaySubjectPage(props) {
return (
    <main className='display-subject-page'>
    <article id='subjectHead' className='col-12'>
    </article>
    <article className='col-6' id='viewSearchReturn'>
    </article>
    <article className='col-6' id='youNoteaArea'>
    </article>

    </main>

)
}
