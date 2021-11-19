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

import ReactGA from 'react-ga';
const trackingId = "UA-158293359-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);



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

	var itemlist =  
		[	
		[
			"https://facultycareers.fiu.edu/?posting=525005"
			, "FIU"
			, "Florida International University"
			, "Open-rank tenure-track faculty position"
			, "Nov 1, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		],
		[
			"https://academicjobsonline.org/ajo/jobs/20472"
			, "LANL"
			, "Los Alamos National Laboratory, Theoretical Division, T-2"
			, "Staff scientist position"
			, "Jan 10, 2022"
			, <>
				... 
			</>
			, <> ... 
</>
		],
		[
			"https://academicjobsonline.org/ajo/jobs/19869"
			, "MIT"
			, "Massachusetts Institute of Technology"
			, "Tenure-track junior faculty appointment"
			, "Nov 15, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		],
		[
			"https://jobs.physicstoday.org/jobs/15557120/assistant-professor-in-theoretical-nuclear-hadronic-physics-tenure-track"
			, "ODU"
			, "Old Dominion University"
			, "Assistant Professor in Theoretical Nuclear/Hadronic Physics"
			, "Dec 6, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		],
			[
			"https://aprecruit.berkeley.edu/JPF03125"
			, "UC Berkeley/LBNL"
			, "University of California, Berkeley and Lawrence Berkeley National Laboratory"
			, "Tenure-track faculty assistant professor in Nuclear Astrophysics/Fundamental Symmetries Theory and staff scientist position at LBNL"
			, "Nov 19, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		], 
		[
			"https://webapps.lsa.umich.edu/Apply/Physics"
			, "UM"
			, "University of Michigan"
			, "Assistant Professor of Physics"
			, "Nov 1, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		], 
		[
			"https://scse.d.umn.edu/about/faculty-searches"
			, "UMN"
			, "University of Minnesota, Duluth"
			, "Assistant Professor of Physics"
			, "Nov 10, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		], 
			[
			"http://apply.interfolio.com/93004"
			, "UW"
			, "University of Washington"
			, "Assistant Professor of Physics"
			, "Oct 1, 2021"
			, <>
				... 
			</>
			, <> ... 
</>
		]
		]


	if(year_str==="2021")
	{
	itemlist =[ 	
			[
			"  https://fribtheoryalliance.org/content/jobs.php"
			, "FSU"
			, "Florida State University"
			, "Theoretical Nuclear Physics (partially funded by the FRIB Theory Alliance)"
			, "Feb 1, 2021"
			, <>
				... 
			</>
			, <> Caroline Robin (declined)
</>
		],
		[
			"https://apply.interfolio.com/81105"
			, "SBU"
			, "Stony Brook University"
			, "Tenure-track Assistant Professor faculty position in theoretical physics"
			, "Feb 5, 2021"
			, <>
				Felix Ringer
				<br />
				... 
			</>
			, <> ...</>
		],
		[
			"https://apply.interfolio.com/78980"
			, "INT"
			, "Institute for Nuclear Theory, UW"
			, "INT Fellow, Research Assistant Professor (limitted term up to 5 years)"
			, "Nov 15, 2020"
			, <>
				Neill Warrington
				<br />
			    ...
			</>
			, <> ...</>
		],
		[
			"https://inspirehep.net/jobs/1824014"
			, "TRIUMF"
			, "TRIUMF, Canada"
			, "Research Scientist in theoretical nuclear physics"
			, "Jan 17, 2021"
			, <>  
			...
			</>
			, <> ...</>
		],
		[
			"https://apply.interfolio.com/78521"
			, "UND"
			, "University of Notre Dame"
			, "Tenure-Track Assistant Proffesor in Nuclear Theory"
			, "Nov 15, 2020"
			, <> 
			...
			</>
			, <> 
Caroline Robin (declined) 
			</>
		],
		[
			"https://www.indeed.com/viewjob?jk=1669f0889089619c&q=Physics+Faculty&tk=1eqeb4eljubje802&from=ja&alid=5f3339ed29bbda6bc2e3a499&utm_campaign=job_alerts&utm_medium=email&utm_source=jobseeker_emails&rgtk=1eqeb4eljubje802"
			, "UW"
			, "University of Washington"
			, "Research Assistant Professor – Nuclear Theory Group (limitted term up to 5 years)"
			, "Jan 18, 2021"
			, <>
				Raza Sabbir Sufian
				<br />
			    ...
			</>
			, <> ...</>
		],
		[
			"https://apply.interfolio.com/83721"
			, "WUSTL"
			, "Washington University in St. Louis"
			, "Tenure-Track/Tenured Assistant/Associate Professor in Physics"
			, "Macrh 15, 2021"
			, <> 
			...
			</>
			, <> 
			...
			</>
		]
	];
	}

	if(year_str==="2020")
	{
	itemlist =[ 	
			[
			"https://labs.inspirehep.net/jobs/1773965"
			, "ANL"
			, "Argonne National Laboratory"
			, "Tenure-Track Assistant Proffesor in Physics"
			, "March 6, 2020"
			, <>
				Felix Ringer
				<br />
				Raza Sufian
				<br />
				... 
			</>
			, <> ...</>
		],
		[
			"https://www.jlab.org/sites/default/files/theory/files/nucleartheoryposition_gsu_final.pdf"
			, "GSU"
			, "Georgia State University"
			, "Tenure-Track Assistant Proffesor in Nuclear Theory"
			, "December 1, 2019"
			, <> 
			Yang-Ting Chien
			<br />
			Felix Ringer 
			<br />
			Matt Sievert
			<br />
			Raza Sufian
			<br />
			...
			</>
			, <> 
			Yang-Ting Chien (accepted)
			</>
		],
		[
			"http://apply.interfolio.com/72230"
			, "INT"
			, "Institute for Nuclear Theory, UW"
			, "INT Fellow, Research Assistant Professor (limitted term up to 5 years)"
			, "January 19, 2020"
			, <> Andrey Sadofyev 
			<br /> 
			...
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
			"https://jobs.nmsu.edu/postings/38955"
			, "NMSU"
			, "New Mexico State University"
			, "Tenure-Track or Tenured Professor in Physics"
			, "July 19, 2020"
			, <> 
			Matt Sievert
			<br />
			... 
			</>
			, <> 
			Matt Sievert (accepted) 
			</>
		], 
		[
			"https://academicjobsonline.org/ajo/jobs/14364"
			, "Temple"
			, "Temple University"
			, "Tenure-Track or Tenured Professor in Physics"
			, "December 1, 2019"
			, <> 
			Felix Ringer <br />
			... 
			</>
			, <> ...</>
		], 
		[
			"https://aprecruit.ucr.edu/JPF01224"
			, "UCR"
			, "University of California, Riverside"
			, "Tenure-Track Assistant/Mid-level Professor  in Theoretical Physics"
			, "January 30, 2020"
			, <> 
			Matt Sievert  
			<br  />
			... 
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
			, "Washington State University"
			, "Tenure-Track Assistant Professor in Theoretical Physics (Astrophysics)"
			, "October 16, 2019"
			, <> ... 
			</>
			, <> ...</>
		],
		[
			"https://www.wsujobs.com/postings/46929"
			, "WSU"
			, "Washington State University"
			, "Tenure-Track Assistant Professor in Theoretical Physics"
			, "November 15, 2019"
			, <> ... 
			</>
			, <> ...</>
		]
		];

	}

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
  	var year_str="2022";
	
	if(match.params.id==="2021")
	{
		year_str="2021";
	}
	if(match.params.id==="2020")
	{
		year_str="2020";
	}
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
				<h1> Theoretical Nuclear Physics Jobs {year_str}</h1>
				<h2> Last update: LANL
				<br />
				Date: Nov 18, 2021 </h2>
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
