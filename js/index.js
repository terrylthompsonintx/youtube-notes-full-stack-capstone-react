import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import DisplaySubjectPage from '../js/components/display-subject-page';
import HomePage from '../js/components/home-page';
import PreviousProj from '../js/components/previous-proj';
import NewProj from '../js/components/new-proj';
import OldProj from '../js/components/old-proj';



document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<DisplaySubjectPage />,
                                                  document.getElementById('reactDisplaysSubjectPage'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<HomePage />,
                                                  document.getElementById('reactHomePage'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<PreviousProj />,
                                                  document.getElementById('reactPreviousProj'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<NewProj />,
                                                  document.getElementById('reactNewProj'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<OldProj />,
                                                  document.getElementById('reactOldProj'));} );



