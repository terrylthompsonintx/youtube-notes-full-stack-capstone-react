import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PreviousProj from './previous-proj';

describe('<PreviousProj />', () => {
it('Renders without crashing', () => {
shallow(<PreviousProj />);
});
});