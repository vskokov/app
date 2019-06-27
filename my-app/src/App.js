import React from 'react';
import './App.css';
import './bg.css';
import Menu from './Menu';
import Policies from './Policies';
import Contact from './Contact';
import Archive from './Archive';
import External from './External';
import Item from './Item';

function App() {
  var itemlist =[ 	
  [
      "https://facultycareers.fiu.edu/?posting=515879"
    , "FIU"
    , "Florida International University"
    , "Tenure-track - Theoretical Nuclear Physics"
    , "November 1, 2018"
 	, <> </>
	, <> </>
 ], 
   [
      "https://facultycareers.fiu.edu/?posting=515879"
    , "FIU"
    , "Florida International University"
    , "Tenure-track - Theoretical Nuclear Physics"
    , "November 1, 2018"
 	, <> </>
	, <> </>
 ],  
  [
      "https://facultycareers.fiu.edu/?posting=515879"
    , "FIU"
    , "Florida International University"
    , "Tenure-track - Theoretical Nuclear Physics"
    , "November 1, 2018"
	, <> </>
	, <> </>
  ], 

  [
      "https://facultycareers.fiu.edu/?posting=515879"
    , "FIU"
    , "Florida International University"
    , "Tenure-track - Theoretical Nuclear Physics"
    , "November 1, 2018"
	, <> A. Test <br /> test2 <br /> test3 <br /> test4 <br /> </>
	, <> test1 <br />  </>
  ] 
  ];



  return (
	
	<>
 
	<div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="main">
	<div className="bg">

	<div id="Home"> </div>
        <div className="header">
            <h1>Theoretical Nuclear Physics Jobs 2018</h1>
            <h2> Last update: North Carolina State University
            <br />
             Date: Oct 17, 2018 </h2>
        </div>


	<Menu />
	
    <div id="App">
      {itemlist.map ((item, i) =>
        <Item
          key={i}
          reference={item[0]}
          alt={item[1]}
          uni={item[2]}
          description={item[3]}
          deadline={item[4]}
          shortlist={item[5]}
          offerlist={item[6]}
		  />
      )}
    </div>

	<div id="Policies"> </div>
	<Policies />
	<div id="Contact"> </div>
	<Contact />
	<div id="Archive"> </div>
	<Archive />
	<div id="External"> </div>
	<External />
	</div>
	</div>
	</div>

	  </>
  );

}

export default App;
