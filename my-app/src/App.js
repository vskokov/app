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



	//Toggle(document);

	return (
		<>

		<div id="layout">



	

			<div id="main">
				<div id="Home"> </div>
				<div className="header">
				<h1>Theoretical Nuclear Physics Jobs 2018</h1>
				<h2> Last update: Iowa State University 
				<br />
				Date: June 21, 2019 </h2>
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


		</>
	);

}

export default App;
