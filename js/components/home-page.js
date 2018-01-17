import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Home-page(props) {
return (
    <main className='home-page'>
    <article className='col-12'>
    <h2 id='info'>This app allows you to search, view, and pause a YouTube Video while taking and saving notes.</h2>
    </article>
    <div className='col-6'><button className='button ctabutton ' id='new-project'><i className="fa fa-plus" aria-hidden="true"></i> New Project</button></div>
    <div className='col-6'><button className='button ctabutton ' id='old-project'><i className="fa fa-file-video-o" aria-hidden="true"></i> Old Projects</button></div>
    </main>

)
}