import React from 'react';
import ReactDOM from 'react-dom';
import Team from './TeamsResult';

it('creates a team', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Team />, div);
    ReactDOM.unmountComponentAtNode(div);
});
