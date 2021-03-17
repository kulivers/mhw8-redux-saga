import React from 'react';
import App from './App';
import rerender from 'react-test-renderer';

describe('Snaping app', () => {
  it('making tree', () => {
    const tree = rerender.create(<div>sometext</div>);
    console.log(tree);
  });
});
