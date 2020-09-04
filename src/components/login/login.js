import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLoginStatus, setUserId } from "./login.actions";
import { changeRoute } from "../../routing/history";
import { PATHS } from "../../routing/paths_constants";
import LearnerList from "../learner_list/learner_list";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayLearnerList: false,
    };
  }
  btns = {
    position: "absolute",
    top: "47%",
    backgroundColor: "#11cbd7",
    color: "#fff",
    border: "1px solid #c6f1e7",
    padding: "5px",
    borderRadius: "12%",
  };

  onLoginUtil() {
    if (
      this.state.email === "admin@admin.com" &&
      this.state.password === "admin"
    ) {
      console.log("success");
      this.props.onLogin(1);
    }
  }

  updateEmail(e) {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  }

  updatePassword(e) {
    this.setState({
      ...this.state,
      password: e.target.value,
    });
  }

  updateDisplaylist() {
    this.setState({
      ...this.state,
      displayLearnerList: true,
    });
  }

  navigateToLearnersList() {
    changeRoute(PATHS.Students);
  }

  render() {
    console.log("**this.state", this.state, this.props);
    return (
      <div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f0fff3", height: "80px" }}
        >
          <div className="col-sm-6 col-sm-offset-6" style={{ marginTop: "1%" }}>
            <div className="form-inline">
              <div className="form-group">
                <label>Email address:</label> <br />
                <input
                  type="email"
                  value={this.state.email}
                  className="form-control"
                  id="email"
                  onChange={(val) => this.updateEmail(val)}
                />
                &nbsp; &nbsp; &nbsp;
              </div>

              <div className="form-group">
                <label>Password: </label> <br />
                <input
                  type="password"
                  value={this.state.password}
                  className="form-control"
                  id="pwd"
                  onChange={(val) => this.updatePassword(val)}
                />
                &nbsp; &nbsp; &nbsp;
              </div>
              <button style={this.btns} onClick={() => this.onLoginUtil()}>
                Submit
              </button>
            </div>
          </div>
        </div>
        {!this.state.displayLearnerList && (
          <div
            onClick={() => this.updateDisplaylist()}
            style={{
              cursor: "pointer",
              fontSize: "18px",
              color: "yellow",
              backgroundColor: "#66c3d2",
              width: "200px",
            }}
          >
            {" "}
            Show Learners List{" "}
          </div>
        )}
        {this.state.displayLearnerList &&
          (this.props.location.pathname === "/" ||
            this.props.location.pathname === "/login") &&
          this.navigateToLearnersList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (id) => {
    dispatch(updateLoginStatus(true));
    dispatch(setUserId(id));
    changeRoute(PATHS.Students);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
