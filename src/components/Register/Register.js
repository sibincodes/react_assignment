import React, { Component } from "react";
import "./Register.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { sample } from "../../Store/Actions";
import { isUsernameValid, isEmailVaild, isNotEmpty } from '../../components/Validation/Validation';

function mapStateToProps(props) {
  return {

    userData: props.UserReducer.sibinData
  };
}
const mapDispatchToProps = {
  sample
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: 20,
      email: "",
      telephone: "",
      state: "kerala",
      country: "india",
      address: "",
      selectedFile: "http://placehold.it/180",
      companyAddressFlag: true,
      homeAddressFlag: true,
      homeAddress: "nil",
      companyAddress: "nil",
      interest: "",
      interestBox: [],
      routName: false,
      userData: props,
      subscribe:false
    };
  }

  componentWillMount() {
    if(this.props.userData)
    {
      console.log("compo will mount firts name",this.props.userData.firstName);
       let  fname  = this.props.userData.firstName;
              let  Lname  = this.props.userData.lastName;
              let  age  = this.props.userData.age;
              let  email  = this.props.userData.email;
              let  tel  = this.props.userData.telephone;
              let  state  = this.props.userData.state;
              let  country  = this.props.userData.country;
              let address =this.props.userData.address;
                            let companyAddress =this.props.userData.companyAddress;
                            let homeAddress =this.props.userData.homeAddress;
                                                        let interest =this.props.userData.interest;
                                                        let selectedFile = this.props.userData.selectedFile;
                                                        let subscribe = this.props.userData.subscribe;
                                                       


              // let  country  = this.props.userData.country;


        this.setState({
      firstName:fname,
      lastName:Lname,
            age:age,
            email:email,
            telephone:tel,
            state:state,
            country:country,
            address :address,
            companyAddress:companyAddress,
            homeAddress:homeAddress,
            interest:interest,
            selectedFile:selectedFile,
            subscribe:subscribe








    });

    }

}
removeInterest = (e,index) =>
{
    e.preventDefault();

   var arr = [...this.state.interestBox]; // make a separate copy of the array
      arr.splice(index, 1);
      console.log("Result",arr);
      let result = arr.join();
         this.setState({
      interestBox: arr,
      interest : result
    });


}
handleSubscribeChange = e =>
{
   this.setState(prevState => ({
            subscribe: !prevState.subscribe
        }));
 
}
  handlefirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handlelastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  handleAgeChange = event => {
    this.setState({ age: event.target.value });

  }
  handleemailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handletelephoneChange = event => {
    this.setState({
      telephone: event.target.value
    });
  };

  handleStateChange = event => {
    this.setState({
      state: event.target.value
    });
  };
  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    });
  };
  handleAddressChange = event => {
    this.setState({
      address: event.target.value
    });

    if (event.target.value == "home") {
      this.setState({
        homeAddressFlag: false,
        companyAddressFlag: true
      });
    } else if (event.target.value == "company") {
      this.setState({
        companyAddressFlag: false,
        homeAddressFlag: true
      });
    }
  };

  handleCompanyAddressChange = event => {
    this.setState({
      companyAddress: event.target.value
    });
  };

  handleHomeAddressChange = event => {
    this.setState({
      homeAddress: event.target.value
    });
  };

  handleInterest = event => {
    event.preventDefault();

    this.setState({
      interest: event.target.value
    });
    var str = [];
    str = event.target.value;
    var res = str.split(" ");

    this.setState({
      interestBox: res
    });
  };

  handleSubmit = (e, props) => {
    e.preventDefault();
    console.log("State is", this.state);
    if (isUsernameValid(this.state.firstName) && isUsernameValid(this.state.lastName) && isEmailVaild(this.state.email)
      && isNotEmpty(this.state)) {
      props.sample(this.state);
      this.setState({
        routName: true
      });
    }

  };

  onFileChange = event => {
  var file = this.refs.file.files[0];
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);

   reader.onloadend = function (e) {
      this.setState({
          selectedFile: [reader.result]
      })
    }.bind(this);
  console.log("img url",url) 
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      email,
      telephone,
      state,
      country,
      address,
      selectedFile,
      homeAddressFlag,
      companyAddressFlag,
      homeAddress,
      companyAddress,
      interest,
      interestBox,
      routName
    } = this.state;
    if (routName) {
      return <Redirect to={"/profile"} />;
    } else
      return (
        <div className="row">
          <div className="column">
            <img id="blah" src={ selectedFile} alt="Image" />

            <div>
              <input ref="file" 
        type="file" 
        name="user[image]" 
        onChange={this.onFileChange} />
            </div>
          </div>
          <div className="column">
            <form onSubmit={(e) => this.handleSubmit(e, this.props)}>

              <div>
                <label>Name </label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={ firstName}
                  onChange={this.handlefirstNameChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={ lastName}
                  onChange={this.handlelastNameChange}
                />
              </div>
              <div>
                <label>Age </label>
                <input
                className="rangeWidth"
                  type="range"
                  id="age"
                  name="age"
                  value={ age}

                  step='15'
                  min="13"
                  max="60"
                  onChange={this.handleAgeChange}

                />
                              <div><label className="label1">13-19 </label>  
                                                            <label className="label2">20-29 </label>
                                                                                        <label className="label3">30-45 </label>
                                                                                         <label className="label4">Above 45 </label>
                                                                                        </div>
                                                                                          



              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                                   value={ email}

                  onChange={this.handleemailChange}
                />
              </div>
              <div>
                <label>Tel</label>
                <input
                  type="text"
                  placeholder="Telephone"
                  value={ telephone}

                  onChange={this.handletelephoneChange}
                />
              </div>
              <div>
                <label>State</label>
                <select value={ state}

                onChange={this.handleStateChange}>
                  <option value="kerala"> Kerala </option>
                  <option value="tamilnadu">Tamilnadu</option>
                  <option value="bihar">Bihar</option>
                </select>
              </div>
              <div>
                <label>Country</label>
                <select                   value={age}

                onChange={this.handleCountryChange}>
                  <option value="india">INDIA</option>
                  <option value="uae">UAE</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <div>
                <label>Address</label>
                <select                   value={address}

                 onChange={this.handleAddressChange}>
                  <option value="" disabled selected>
                    Please Select..
                  </option>
                  <option value="home">Home</option>
                  <option value="company">Company</option>
                </select>
                <select
              value={homeAddress}

                  onChange={this.handleHomeAddressChange}
                  hidden={homeAddressFlag}
                >
                  <option value="homeaddress1">Home Address 1</option>
                  <option value="homeaddress2">Home Address 2</option>
                </select>

                <select
                  value={companyAddress}

                  onChange={this.handleCompanyAddressChange}
                  hidden={companyAddressFlag}
                >
                  <option value="companyaddress1">Company Address 1</option>
                  <option value="companyaddress2">Company Address 2</option>
                </select>
              </div>

              <div>
                <label>Interest </label>
                <input
                  type="text"
                  placeholder="Interest"
                                    value={ interest}

                  onChange={this.handleInterest}
                />
                <div>
                  
                  {interestBox.map((name,index) => (

                    <button onClick={(e) =>this.removeInterest(e,index)} className="keywords">{name}</button>
                  ))}{" "}
                </div>
                
              </div>
              <div>
                 <input
            name="subscribe"
            type="checkbox"
            checked={this.state.subscribe}
            onChange={this.handleSubscribeChange} />
                    <label>
          Subscribe to the News Letters
         
        </label>
              </div>

              <button className='buttonSubmit' type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
