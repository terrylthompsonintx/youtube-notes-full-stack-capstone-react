import React from 'react';
import {shallow, mount, render} from 'enzyme';

import NewProj from './new-pro.js';

describe('<NewProj />', () => {
it('Renders without crashing', () => {
shallow(<NewProj />);
});
});
