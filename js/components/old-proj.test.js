import React from 'react';
import {shallow, mount, render} from 'enzyme';

import OldProj from './old-proj';

describe('<OldProj />', () => {
it('Renders without crashing', () => {
shallow(<OldProj />);
});
});
