import React, { Component } from "react";
import { connect } from "react-redux";
import { PATHS } from "../../routing/paths_constants";
import { updateLoginStatus, setUserId } from "../login/login.actions";
import { changeRoute } from "../../routing/history";

class Logout extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: "18px",
          backgroundColor: "yellowgreen",
          border: "1px solid black",
          borderRadius: "10px",
          width: "80px",
          padding: "8px",
          margin: "10px",
          cursor: "pointer",
          position: "absolute",
          right: "45px",
        }}
        onClick={() => this.props.onLogout()}
      >
        Logout
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {
    dispatch(updateLoginStatus(false));
    dispatch(setUserId(null));
    changeRoute(PATHS.Login);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
