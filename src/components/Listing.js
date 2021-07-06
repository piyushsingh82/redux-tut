import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userdetails: "",
      isError: "",
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:5001/api/allusers")
      .then((res) => {
        this.setState({ userdetails: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        this.setState({isError : "of Error in reading api "+err})
      });
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({username: e.target.value})
    
  }
  render() {
    const { username, userdetails, isError } = this.state;
    return (
      <div className="container-fluid">
        <h1>Listing Page</h1>
        <div className="row">
          <div className="col-3">
            
              <div className="form-group">
                <label htmlFor="Name"> Name </label>
                <input
                  type="text"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
              <div className="form-group">
                <Button className="btn btn-secondary" >Search Now</Button>
              </div>
               
          </div>
          <div className="col-9">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Username</th>
                    <th>Useremailid</th>
                    <th>UserPassword</th>
                  </tr>
                </thead>
                <tbody>
                  {userdetails
                    ? userdetails
                        .filter((val) => {
                          if (username === "") {
                           
                            return val;
                          } else if (
                            val.username
                              .toLowerCase()
                              .includes(username.toLowerCase())
                          ) {
                            console.log(val.length);
                            return val;
                          }
                          return val;
                        })
                        .map((userdetail, index) => (
                          <tr key={index}>
                            <td>{userdetail.username}</td>
                            <td>{userdetail.useremail}</td>
                            <td>{userdetail.userpasswd}</td>
                          </tr>
                        ))
                    : null}
                </tbody>
              </table>
            </div>

            {isError ? (
              <p>There is some issue {isError} </p>
            ) : (
             null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
