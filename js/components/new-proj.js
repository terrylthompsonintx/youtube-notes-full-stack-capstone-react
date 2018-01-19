import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function NewProj(props) {
return (
    <main className='new-proj'>
    <article className='col-12'>

    <h2 id='instruction'>Enter a subject for which to search:</h2>
    <input id='searchFor' type="text" />
    <button type="button" id='searchButton' className='button ctabutton'><i className="fa fa-search" aria-hidden="true"></i> Search</button>
    </article>
    <article className='col-12' id='searchvidResult'>
    </article>

    </main>

)
}
