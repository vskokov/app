import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import { HashRouter } from 'react-router-dom'

import './App.css';
import './bg.css';
import Menu from './Menu';
import Policies from './Policies';
import Contact from './Contact';
import Archive from './Archive';
import External from './External';
import Item from './Item';
import ScrollToTop from './Scr';

export default App;


function App() {
	return (
		<Router>
        <ScrollToTop>
		<Switch>
				<Route exact path="/ntg/jobs/" component={Display} />
				<Route path="/ntg/jobs/:id" component={Display} />
				<Route exact path="/" component={Display} />
				<Route path="/:id" component={Display} />
		 </Switch>
        </ScrollToTop>
    	</Router>
	);

}

function flist(year_str){
	var itemlist =[ 	
			[
			"https://labs.inspirehep.net/jobs/1773965"
			, "ANL"
			, "Argonne National Laboratory"
			, "Tenure-Track Assistant Proffesor in Physics"
			, "March 6, 2020"
			, <> ... 
			</>
			, <> ...</>
		],
		[
			"http://apply.interfolio.com/72230"
			, "INT"
			, "Institute for Nuclear Theory, UW"
			, "INT Fellow, Research Assistant Professor (limitted term up to 5 years)"
			, "January 19, 2020"
			, <> ... 
			</>
			, <> ...</>
		], 
		[
			"https://academicjobsonline.org/ajo/jobs/14309"
			, "MIT"
			, "Massachusetts Institute of Technology"
			, "Tenure-Track or Tenured Professor in Physics"
			, "November 1, 2019"
			, <> ... 
			</>
			, <> ...</>
		], 
		[
			"https://academicjobsonline.org/ajo/jobs/14364"
			, "Temple"
			, "Temple University"
			, "Tenure-Track or Tenured Professor in Physics"
			, "December 1, 2019"
			, <> ... 
			</>
			, <> ...</>
		], 
		[
			"https://phys.washington.edu/assistant-professor-theoretical-physics"
			, "UW"
			, "University of Washington"
			, "Tenure-Track Assistant Professor in Theoretical Physics"
			, "October 28, 2019"
			, <> ... 
			</>
			, <> ...</>
		], 
		[
			"https://phys.washington.edu/assistant-associate-or-full-professor-theoretical-physics"
			, "UW"
			, "University of Washington"
			, "Open-Rank Professor in Theoretical Physics"
			, "October 28, 2019"
			, <> ... 
			</>
			, <> ... </>
		],
		[
			"https://www.wsujobs.com/postings/46905"
			, "WSU"
			, "Washington State university"
			, "Tenure-Track Assistant Professor in Theoretical Physics (Astrophysics)"
			, "October 16, 2019"
			, <> ... 
			</>
			, <> ...</>
		],
		[
			"https://www.wsujobs.com/postings/46929"
			, "WSU"
			, "Washington State university"
			, "Tenure-Track Assistant Professor in Theoretical Physics"
			, "November 15, 2019"
			, <> ... 
			</>
			, <> ...</>
		]
		];

	if(year_str==="2019")
	{
		itemlist =[ 	
		[
			"https://facultycareers.fiu.edu/?posting=515879"
			, "FIU"
			, "Florida International University"
			, "Tenure-track - Theoretical Nuclear Physics"
			, "November 1, 2018"
			, <> 
			Elena Petreska <br /> 
			Alessandro Pilloni <br />  
			... <br /> 
			</>
			, <> Elena Petreska (declined)  <br />  </>
		], 
		[
			"http://www.physastro.iastate.edu/employment"
			, "ISU"
			, "Iowa State University"
			, <> Tenure-track - Theoretical Nuclear Physics <br /> Cluster hire  </>
			, "December 3, 2018"
			, <> 
			Henry Lamm <br /> 
			Andrey Sadofyev <br />  
			Srimoyee Sen <br /> 
			Matt Sievert <br /> 
			Yong Zhao <br /> 
			... <br /> 
			</>
			, <> Srimoyee Sen (accepted) <br /> 
			</>
		],  
		[
			"https://careers-llnl.ttcportals.com/jobs/3606386-nuclear-theory-staff-physicist"
			, "LLNL"
			, "Lawrence Livermore National Laboratory"
			, "Nuclear Theory - Staff Physicist"
			, "Deadline: Mid-April 2019"
			, <> 
			Caroline Robin <br /> 
			Ragnar Stroberg  <br /> 
			...  <br /> 
			</>
			, <> </>
		], 

		[
			"https://jobs.ncsu.edu/postings/107636"
			, "NCSU"
			, "North Carolina State University"
			, <> 
			Tenure-track - Theoretical Nuclear Physics <br />
			FRIB Theory Alliance bridge position 
			</>
			, "December 1, 2018"
			, <>
			Sebastian Koenig  <br />
			Caroline Robini <br />
			Srimoyee Sen <br />
			Ragnar Stroberg <br />
			Ingo Tews
			</>
			, <>
			Sebastian Koenig (accepted) <br />
			Ingo Tews
			</>
		], 
		[
			"https://academicjobsonline.org/ajo/jobs/12722"
			, "UW"
			, "University of Washington"
			, <> 
			"INT Fellow" - Theoretical Nuclear Physics  <br />
			Not tenure eligible  
			</>
			, "December 8, 2018"
			, <>
			Joel Lynn   <br />
			Srimoyee Sen <br />
			...
			</>
			, <>
			Joel Lynn   <br />
			Srimoyee Sen <br />
			</>
		], 
		[
			"https://inspirehep.net/record/1692033"
			, "WM"
			, "William & Mary"
			, <> 
			Tenure-track - Theoretical Nuclear Physics  <br />
			JLAB bridge position 
			</>
			, "December 1, 2018"
			, <>
			Chia Cheng (Jason) Chang <br /> 
			Igor Danilkin <br /> 
			Jacobo Ruiz de Elvira <br /> 
			Jeremy Green <br /> 
			Christopher Monahan <br /> 
			Alessandro Pilloni  
			</>
			, <>
			Christopher Monahan  (accepted) 
			</>
		], 
		[
			"http://apply.interfolio.com/55554"
			, "Yale"
			, "Yale University"
			, <> 
			Tenure-track - Theoretical Physics
			</>
			, "November 17, 2018"
			, <>
			Mauricio Martinez Guerrero <br /> 
			Ingo Tews  <br /> 
			... 
			</>
			, <>
			</>
		] 
	];
	}
	return itemlist; 
}


function Display({ match }) {
  	var year_str="2020";
	if(match.params.id==="2019")
	{
		year_str="2019";
	}
	var itemlist=flist(year_str); 

	console.log(itemlist); 

	return (
		<div id="layout">

			<div id="main">
				<div id="Home"> </div>
				<div className="header">
				<h1>Theoretical Nuclear Physics Jobs {year_str}</h1>
				<h2> Last update: ANL and INT 
				<br />
				Date: January 9, 2020 </h2>
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
					)
					}
				</div>
		
				<div className="wrapper">
					<div className="divider div-transparent div-arrow-down"></div>
				</div>

				<Policies />

				<div className="wrapper">
					<div className="divider div-transparent div-arrow-down"></div>
				</div>

				<Contact />

				<div className="wrapper">
					<div className="divider div-transparent div-arrow-down"></div>
				</div>

				<Archive />

				<div className="wrapper">
					<div className="divider div-transparent div-arrow-down"></div>
				</div>

				<External />
			</div>
		</div>
  );
}
