import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/ 



import Item from './Item';

function App() {
  var itemlist = [
      ["https://facultycareers.fiu.edu/?posting=515879",  "FIU", "Florida International University", "Tenure-track - Theoretical Nuclear Physics", "November 1, 2018"]
  ]

return(
        <div id="App">
		{itemlist.map ((item, i) =>
          <Item
            key={i}
            ref={item[0]}
            alt={item[1]}
            uni={item[2]}
            description={item[3]}
            deadline={item[4]}/>
        )}
        </div>
);

}




export default App;
