import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: props,
      redirect: false
    }
  }
  
  editDataHandler = event => {
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/edit"} />;
    } else
      return this.props.userData ? <div className="row">
        <div className="column1">
          <h3>
                        <img id="blah" src={ this.props.userData.selectedFile} alt="Image" />

           
          </h3>
                                <button className="buttonEdit"   onClick={this.editDataHandler}>Edit Photo</button>

<div>
          <button className="buttonEdit"  onClick={this.editDataHandler}>Edit Profile</button>

</div>
        </div>
        <article className="column2">
          <h4>I am Mr {this.props.userData.firstName} and I am above {this.props.userData.age} and you can send your email to {this.props.userData.email} I lives in the state of {this.props.userData.state} . I likes to play {this.props.userData.interest} .{this.props.userData.subscribe ? "And please send me the newsletters" : '' }  Please reachout to me on my telephone {this.props.userData.telephone}</h4>
             <div >
  <button className="buttonSubmit">
          Agree
        </button>
        </div>
        </article>
  
      
      </div>
        : <aside>'No Data to Display'</aside> 
  }
}


function mapStateToProps(props) {
  console.log("REG VAL", props.UserReducer.sibinData);
  return {

    userData: props.UserReducer.sibinData
  };
}

export default connect(mapStateToProps)(Profile);
