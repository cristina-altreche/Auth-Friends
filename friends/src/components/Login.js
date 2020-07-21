import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.value]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // "protected is the <Link to="/protected">Protected Page</Link> @ App.js
        this.props.history.push("/protected");
      });
  };

  render() {
    return (
      <div>
        <form>
          <h1>Login</h1>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
