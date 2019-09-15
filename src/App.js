import React from 'react';
import './App.css';
import Page from './Page';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;
