import React from "react";

class CustomList extends React.Component {  
constructor(props){
  super(props);
}
  render(){
    return (
      <div>
          <button className="square" onClick={() => this.props.onClick()}>
              {this.props.value}
          </button>
      </div>
    );
    }
}

export default CustomList
