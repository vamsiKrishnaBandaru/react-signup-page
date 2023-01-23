import React, { Component } from 'react';
import validator from 'validator';
import '../App.css'

class Form extends Component {
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
         AllFieldsDone: false,
      };
   }

   handleInput = (event) => {
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

   handleCheckbox = (event) => {
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
         errors.firstName = 'Please enter name using letters only'
      }

      if (!validator.isAlpha(lastName)) {
         errors.lastName = 'Please enter name using letters only'
      }

      if (!validator.isInt(age) || age < 0) {
         errors.age = 'Age must be a positive integer'
      }

      if (!gender) {
         errors.gender = 'Gender is required';
      }

      if (!role) {
         errors.role = 'Role is required';
      }

      if (!validator.isEmail(email)) {
         errors.email = 'Invalid email address'
      }

      if (!validator.isStrongPassword(password)) {
         errors.password = 'Password must have a minimum of 8 characters long, one uppercase with one lowercase, one numeric and one special character.'
      }

      if (password !== repeatPassword || repeatPassword === '') {
         errors.repeatPassword = 'Password must be same'
      }

      if (!tos) {
         errors.tos = 'Please agree to our terms and conditions'
      }

      if (Object.keys(errors).length === 0) {
         this.setState(
            {
               AllFieldsDone: true,
            }
         );
         return;
      } else {
         this.setState(
            {
               errors
            }
         );
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
         <>
            {!this.state.AllFieldsDone &&
               <section className="vh-100">
                  <div className="container h-100">
                     <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-10 col-lg-6 col-xl-6">
                           <div className="card">
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
                                          onChange={this.handleInput}
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
                                          onChange={this.handleInput}
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
                                          onChange={this.handleInput}
                                       />
                                       <p className='text-danger mb-0'><small>{errors.age}</small></p>
                                    </div>
                                    <div className='scroll-down-container col-md-4 mt-2'>
                                       <div className="form-group">
                                          <span><i className="fa fa-venus-mars"></i>
                                             <label className='form-label mb-0'>Gender: </label></span>
                                          <select className='form-control' name="gender" value={gender} onChange={this.handleInput}>
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
                                          <select className='form-control' name="role" value={role} onChange={this.handleInput}>
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
                                          onChange={this.handleInput}
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
                                          onChange={this.handleInput}
                                       />
                                       <p className='text-danger mb-0'><small>{errors.password}</small></p>
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
                                          onChange={this.handleInput}
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
                                          onChange={this.handleCheckbox}
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

            }

            {
               this.state.AllFieldsDone &&
               <div className="d-flex row .justify-content-center align-items-center vh-100">
                  <img src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png" className="mx-auto d-block col-md-5"></img>
               </div>
            }
         </>
      );
   }
}


export default Form;