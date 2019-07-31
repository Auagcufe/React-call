import React from 'react';
import Hello from './components/Hello';
import Gender from './components/test';
import MyGallery from './components/Gallery';
import MyComponent from './components/article';
import Age from './components/ageTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello language="cn" name="Steven" color='blue'/>
        <Gender ggender="male"/>
        <Age age={17} />
        <Hello language="en" name="Rachel" color='orange'/>
        <Gender ggender="female"/>
        <Age age={24} />
        {/* <MyGallery />
        <MyComponent /> */}
      </header>
    </div>
  );
}

export default App;
