import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import './Archive.css';



class Archive extends Component {
	render() {
		return (	
			<div className="content">
				<div id="Archive">
			    	<h2>Historical  Archive</h2>
					 &#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0102.html">2002</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0203.html">2003</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0304.html">2004</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0405.html">2005</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0506.html">2006</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0607.html">2007</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0708.html">2008</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0809.html">2009</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_0910.html">2010</a>&#32;&#32;<a href="http://www.int.washington.edu/users/mjs5/NucRum/NTrumors_1011.html">2011</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2012.html">2012</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2013.html">2013</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2014.html">2014</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2015.html">2015</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2016.html">2016</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2017.html">2017</a>&#32;&#32;<a href="http://www.physics.ncsu.edu/ntg/jobs/index_2018.html">2018</a>&#32;&#32;<Link to="/ntg/jobs/2019">2019</Link>&#32;&#32;<Link to="/ntg/jobs/">Current</Link>

				</div>

			</div>
		);
	}
}

export default Archive;
