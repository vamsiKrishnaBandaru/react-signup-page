import React, { Component } from 'react';
import validator from 'validator';


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
      agreeToTerms: false,
      errors: {},
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ agreeToTerms: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, age, gender, role, email, password, repeatPassword, agreeToTerms } = this.state;
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

    if (!agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    // submit the form
  };

  render() {
    const { firstName, lastName, age, gender, role, email, password, repeatPassword, agreeToTerms, errors } = this.state;

    return (
      <section className="vh-100" style={{
        backgroundImage:
          "url(images/backGroundImgSignupPage.jpg)"
      }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <form onSubmit={this.handleSubmit} className="container border border-warning">
                    <div className=''>
                      <div>
                        <label>
                          First Name:
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleInputChange}
                          />
                          {errors.firstName && <span>{errors.firstName}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Last Name:
                          <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInputChange}
                          />
                          {errors.lastName && <span>{errors.lastName}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Age:
                          <input
                            type="text"
                            name="age"
                            value={age}
                            onChange={this.handleInputChange}
                          />
                          {errors.age && <span>{errors.age}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Gender:
                          <select name="gender" value={gender} onChange={this.handleInputChange}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          {errors.gender && <span>{errors.gender}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Role:
                          <select name="role" value={role} onChange={this.handleInputChange}>
                            <option value="">Select</option>
                            <option value="developer">Developer</option>
                            <option value="seniorDeveloper">Senior Developer</option>
                            <option value="leadEngineer">Lead Engineer</option>
                            <option value="CTO">CTO</option>
                          </select>
                          {errors.role && <span>{errors.role}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Email:
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                          />
                          {errors.email && <span>{errors.email}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Password:
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                          />
                          {errors.password && <span>{errors.password}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          Repeat Password:
                          <input
                            type="password"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={this.handleInputChange}
                          />
                          {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={agreeToTerms}
                            onChange={this.handleCheckboxChange}
                          />
                          Agree to terms and conditions
                          {errors.agreeToTerms && <span>{errors.agreeToTerms}</span>}
                        </label>
                      </div>
                      <button type="submit">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}



export default App;
