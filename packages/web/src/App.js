import * as React from 'react';

import A from './A';
import B from './B';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div> ASDFASDFASD bug</div>
        <A />
        <B />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
