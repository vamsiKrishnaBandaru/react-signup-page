import React, { Component } from 'react';
import validator from 'validator';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      role: '',
      email: '',
      password: '',
      repeatPassword: '',
      tos: false,
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const {
      name,
      value
    } = event.target;

    this.setState(
      {
        [name]: value
      }
    );
  };

  handleCheckboxChange = (event) => {
    this.setState(
      {
        tos: event.target.checked
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      age,
      gender,
      role,
      email,
      password,
      repeatPassword,
      tos,
    } = this.state;
    let errors = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!validator.isNumeric(age) || !validator.isLength(age, { min: 1, max: 3 })) {
      errors.age = 'Age must be a number between 1 and 3 digits';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!role) {
      errors.role = 'Role is required';
    }

    if (!validator.isEmail(email)) {
      errors.email = 'Email is not valid';
    }

    if (!validator.isLength(password, { min: 8 })) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }

    if (!tos) {
      errors.tos = 'You must agree to the terms and conditions';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    // submit the form
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      role,
      email,
      password,
      repeatPassword,
      tos,
      errors
    } = this.state;

    return (
      <section className="vh-100" style={{
        backgroundImage: "url(images/bg-img.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-6 col-xl-5">
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body p-5">
                  <h2 className="text-center mb-5">CREATE AN ACCOUNT</h2>
                  <form onSubmit={this.handleSubmit} className="row g-3 border border-warning ">
                    <div className="row g-1 ">
                      <label className='form-label' htmlFor='firstNameID'>firstName:</label>
                      <input
                        type="text"
                        id='firstNameID'
                        name="firstName"
                        value={firstName}
                        onChange={this.handleInputChange}
                      />
                      {errors.firstName && <span>{errors.firstName}</span>}
                    </div>
                    <div className="row g-1 ">
                      <label className='form-label' htmlFor='lastNameID'>
                        Last Name:                        </label>
                      <input
                        type="text"
                        id='lastNameID'
                        name="lastName"
                        value={lastName}
                        onChange={this.handleInputChange}
                      />
                      {errors.lastName && <span>{errors.lastName}</span>}
                    </div>
                    <div className="col-md-2 ">
                      <label className='form-label' htmlFor='ageID'>Age:</label>
                      <input
                        type="text"
                        id='ageID'
                        name="age"
                        value={age}
                        onChange={this.handleInputChange}
                      />
                      {errors.age && <span>{errors.age}</span>}
                    </div>
                    <div className="col-md-3 ">
                      <label className='form-label' htmlFor=''>Gender: </label>
                      <select name="gender" value={gender} onChange={this.handleInputChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.gender && <span>{errors.gender}</span>}
                    </div>
                    <div className="col-md-3">
                      <label className='form-label' htmlFor=''></label>
                      Role:
                      <select name="role" value={role} onChange={this.handleInputChange}>
                        <option value="">Select</option>
                        <option value="developer">Developer</option>
                        <option value="seniorDeveloper">Senior Developer</option>
                        <option value="leadEngineer">Lead Engineer</option>
                        <option value="CTO">CTO</option>
                      </select>
                      {errors.role && <span>{errors.role}</span>}
                    </div>
                    <div className="row g-1 ">
                      <label className='form-label' htmlFor='emailID'>
                        Email:</label>
                      <input
                        type="email"
                        id='emailID'
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                      />
                      {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="row g-1 ">
                      <label className='form-label' htmlFor='passwordID'>
                        Password: </label>
                      <input
                        type="password"
                        id='passwordID'
                        name="password"
                        value={password}
                        onChange={this.handleInputChange}
                      />
                      {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div className="row g-1 ">
                      <label className='form-label' htmlFor=''>Repeat Password:</label>
                      <input
                        type="password"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={this.handleInputChange}
                      />
                      {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
                    </div>
                    <div className="">
                      <label className='form-label' htmlFor='tosID'></label>
                      <input
                        type="checkbox"
                        id='tosID'
                        name="tos"
                        checked={tos}
                        onChange={this.handleCheckboxChange}
                      />
                      I Agree to terms and conditions
                      {errors.tos && <span>{errors.tos}</span>}
                    </div>
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    );
  }
}



export default App;
