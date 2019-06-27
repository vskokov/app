import React from 'react';
import './App.css';
import Item from './Item';

function App() {
  var itemlist =[ [
      "https://facultycareers.fiu.edu/?posting=515879"
    , "FIU"
    , "Florida International University"
    , "Tenure-track - Theoretical Nuclear Physics"
    , "November 1, 2018"
  ]];

  return (
    <div id="App">
      {itemlist.map ((item, i) =>
        <Item
          key={i}
          reference={item[0]}
          alt={item[1]}
          uni={item[2]}
          description={item[3]}
          deadline={item[4]} />
      )}
    </div>
  );
}

export default App;
