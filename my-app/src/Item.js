import React, { Component} from 'react';
import './Item.css';


class Item extends Component {
     render() { return (
        <div class="content">
            <h2 class="content-subhead">    <a href={this.props.ref} alt={this.props.alt}> {this.props.uni} </a>   </h2>
            <p>
		  {this.props.description}
              Deadline: {this.props.deadline} 
            </p>
            <div class="pure-g">
                <div class="pure-u-1-2">
                  <h3 class="content-subhead-2"> Short List: </h3>
                </div>
                <div class="pure-u-1-2">
                  <h3 class="content-subhead-2"> Offer List: </h3>
                </div>
            </div>
        </div>
	  );
}
}


export default Item;
