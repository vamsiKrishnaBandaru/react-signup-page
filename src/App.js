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

    if (!validator.isAlpha(firstName)) {
      errors.firstName = 'Please enter name using letters only';
    }

    if (!validator.isAlpha(lastName)) {
      errors.lastName = 'Please enter name using letters only';
    }

    if (!validator.isInt(age)) {
      errors.age = 'Age must be a integer';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!role) {
      errors.role = 'Role is required';
    }

    if (!validator.isEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!validator.isStrongPassword(password, { min: 8, max: 16 })) {
      errors.password = <li>Password must be at least 8 to 16 characters</li>
    }

    if (password.toLowerCase() == password) {
      errors.password1 = <li>Password must contain one UpperCase letter</li>
    }

    if (password !== repeatPassword || repeatPassword === '') {
      errors.repeatPassword = 'Password must be same';
    }

    if (!tos) {
      errors.tos = 'Please agree to our terms and conditions';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
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
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-6 col-xl-6">
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body p-3">
                  <h3 className="text-center mb-3">CREATE AN ACCOUNT</h3>
                  <form onSubmit={this.handleSubmit} className="row mx-5 p-3">
                    <div className="row g-0">
                      <span><i className="fa fa-user me-2"></i>
                        <label className='form-label' htmlFor='firstNameID'> First name:</label></span>
                      <input
                        type="text"
                        className='form-control'
                        id='firstNameID'
                        name="firstName"
                        value={firstName}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.firstName}</small></p>
                    </div>
                    <div className="row g-0 ">
                      <span><i className="fa fa-user me-2"></i>
                        <label className='form-label' htmlFor='lastNameID'> Last name:</label></span>
                      <input
                        type="text"
                        id='lastNameID'
                        className='form-control'
                        name="lastName"
                        value={lastName}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.lastName}</small></p>
                    </div>
                    <div className="col p-0 mt-2">
                      <label className='form-label mb-0' htmlFor='ageID'>Age:</label>
                      <input
                        type="text"
                        id='ageID'
                        className='form-control'
                        name="age"
                        value={age}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.age}</small></p>
                    </div>
                    <div className='scroll-down-container col-md-4 mt-2'>
                      <div className="form-group">
                        <span><i className="fa fa-venus-mars"></i>
                          <label className='form-label mb-0'>Gender: </label></span>
                        <select className='form-control' name="gender" value={gender} onChange={this.handleInputChange}>
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <p className='text-danger mb-0'><small>{errors.gender}</small></p>
                      </div>
                    </div>

                    <div className='scroll-down-container col p-0 mt-2'>
                      <div className="form-group"><label className='form-label mb-0' htmlFor=''>Role:</label>
                        <select className='form-control' name="role" value={role} onChange={this.handleInputChange}>
                          <option value="">Select</option>
                          <option value="developer">Developer</option>
                          <option value="seniorDeveloper">Senior Developer</option>
                          <option value="leadEngineer">Lead Engineer</option>
                          <option value="CTO">CTO</option>
                        </select>
                        <p className='text-danger mb-0'><small>{errors.role}</small></p>
                      </div>
                    </div>
                    <div className="row g-0 mt-2">
                      <span><i className="fa fa-envelope me-2"></i>
                        <label className='form-label' htmlFor='emailID'>
                          Email:</label></span>
                      <input
                        type="text"
                        className='form-control'
                        id='emailID'
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.email}</small></p>
                    </div>
                    <div className="row g-0 ">
                      <span><i className="fa fa-lock me-2"></i>
                        <label className='form-label' htmlFor='passwordID'>
                          Password: </label></span>
                      <input
                        type="password"
                        className='form-control'
                        id='passwordID'
                        name="password"
                        value={password}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.password}</small></p>
                      <p className='text-danger mb-0'><small>{errors.password1}</small></p>
                    </div>
                    <div className="row g-0 ">
                      <span><i className="fa fa-key me-2"></i>
                        <label className='form-label' htmlFor='repeatPasswordID'>Repeat Password:</label></span>
                      <input
                        type="password"
                        id='repeatPasswordID'
                        className='form-control'
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={this.handleInputChange}
                      />
                      <p className='text-danger mb-0'><small>{errors.repeatPassword}</small></p>
                    </div>
                    <div className="form-check d-flex justify-content-center g-2">
                      <input
                        type="checkbox"
                        className='form-check-input me-2'
                        id='tosID'
                        name="tos"
                        checked={tos}
                        onChange={this.handleCheckboxChange}
                      />
                      <label className='form-check-label' htmlFor="tosID"> I agree with all <a href="#">Terms and Conditions</a></label>
                    </div>
                    <p className='text-danger text-center mb-0'><small>{errors.tos}</small></p>
                    <button type="submit" className='btn btn-warning mt-2'>Sign Up</button>
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
