import React, { Component} from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="content-subhead">
          <a href={this.props.referefce} alt={this.props.alt}> {this.props.uni} </a>
        </h2>
        <p>
        {this.props.description}
        Deadline: {this.props.deadline}
        </p>
        <div className="pure-g">
          <div className="pure-u-1-2">
            <h3 className="content-subhead-2"> Short List: </h3>
          </div>
          <div className="pure-u-1-2">
            <h3 className="content-subhead-2"> Offer List: </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
