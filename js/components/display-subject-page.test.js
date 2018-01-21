import React from 'react';
import {shallow, mount, render} from 'enzyme';

import DisplaySubjectPage from './display-subject-page';

describe('<DisplaySubjectPage />', () => {
it('Renders without crashing', () => {
shallow(<DisplaySubjectPage />);
});
});
