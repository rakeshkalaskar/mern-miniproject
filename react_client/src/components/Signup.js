import React, { useState } from "react";
import "./style/Signup.css";
import { NavLink, useHistory } from "react-router-dom";


const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
    const res = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 406) {
      window.alert("Email alrady registered");
    } else if(res.status===400){
      window.alert("Invalid Email");
    }else if(res.status===422){
      window.alert("FIll all input details");
    }else if(res.status===402){
      window.alert("Password must be strong");
    }else if(res.status===401){
      window.alert("Password and Confirm password should be same");
    }else if (!data) {
      window.alert("Fill inputs");
    }else if (res.status===405) {
      window.alert("Type valid mobile number");
    } else {
      window.alert("Registration Successful");
      history.push("/login");
    }
  };

  return (
    <>
      <div id="modal">
      <span className="close" title="Close Modal" onClick={history.goBack}>
          &times;
        </span>
        <form method="POST" className="modal-content">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              name="name"
              required
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter Name"
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              name="email"
              pattern=".+@globex\.com" size="30"
              required
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter Email"
            />
            

            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <input
              type="number"
              minLength={10}
              maxLength={10}
              name="phone"
              required
              value={user.phone}
              onChange={handleInputs}
              placeholder="Enter Phone"
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              required
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter Password"
            />

            <label htmlFor="cpassword">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              name="cpassword"
              required
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
            />

            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>

            <div className="clearfix">
            <button type="button" className="cancelbtn signupbtn" onClick={history.goBack}>
                Cancel
              </button>
              <button type="submit" className="signupbtn" onClick={PostData}>
                Sign Up
              </button>
            </div>
            <div>
              <NavLink to="/login" className="signup">
                I am already registered.
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;


// onClick={changeStyle}onClick={changeStyle}