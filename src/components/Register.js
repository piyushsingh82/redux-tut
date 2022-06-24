import React, { useState } from "react";

//https://www.youtube.com/watch?v=tEU5k2O5qSU&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=3

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const registerUser = () => {
    console.log("username" + username + " email: " + email + " ");
  };

  return (
    <div>
      <div className="container">
        <h1> Register page using formik</h1>
        <div className="row  justify-content-md-center ">
          <form
            onSubmit={registerUser}
            className=" col-md-4 border border-light"
          >
            <div className="form-group">
              <label htmlFor="name" className="text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={setUsername}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={setEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="channel">channel</label>

              <input
                type="text"
                id="channel"
                name="channel"
                className="form-control"
              />
            </div>
            <div className="clear">&nbsp;</div>
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-large">
                Submit
              </button>{" "}
              <button type="reset" className="btn btn-secondary btn-large">
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
