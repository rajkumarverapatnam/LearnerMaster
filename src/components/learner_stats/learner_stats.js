import React, { Component } from "react";
import { connect } from "react-redux";
import { selectActiveLearnerData } from "./learner_stats.selectors";

import { selectIsLoggedIn } from "../login/login.selectors";
import AreaChart from "../area_chart/area_chart";
import Login from "../login/login";

class LearnerStats extends Component {
  learnerDetails = {
    padding: "50px",
    backgroundColor: "#57b7bd",
    height: "500px",
  };

  learnerInfo = {
    fontSize: "18px",
    color: "#fff",
  };

  getGithubContributions() {
    const commits = this.props.activeLearner.advanced_details.commits_history;
    const linesData = this.props.activeLearner.advanced_details
      .lines_count_history;
    return {
      x_data: Object.keys(commits),
      series: [
        {
          name: "commits",
          data: Object.values(commits),
        },
        {
          name: "lines",
          data: Object.values(linesData),
        },
      ],
    };
  }

  getAttendance() {
    const attendanceData = this.props.activeLearner.advanced_details.attendance;
    return {
      x_data: Object.keys(attendanceData),
      series: [
        {
          name: "attendance",
          data: Object.values(attendanceData),
        },
      ],
    };
  }

  render() {
    console.log("((here", this.props.isLoggedIn, this.props.match.params.id);
    const githubConts = this.getGithubContributions();
    const attendanceData = this.getAttendance();
    return this.props.isLoggedIn ? (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12" style={this.learnerDetails}>
            <div className="col-sm-5 col-md-5">
              <div className="learnerDetails">
                <h2>
                  Name:{"  "}
                  {/* <span style={this.learnerInfo}> */}
                  {this.props.activeLearner.name}
                  {/* </span> */}
                </h2>
                <h4>
                  Phone:
                  <span style={this.learnerInfo}>
                    {" "}
                    &nbsp; &nbsp;
                    {this.props.activeLearner.advanced_details.phone}
                  </span>
                </h4>
                <h4>
                  Email Id: &nbsp; &nbsp;
                  <span style={this.learnerInfo}>
                    {this.props.activeLearner.advanced_details.email}
                  </span>
                </h4>
                <h4>
                  Github: &nbsp; &nbsp;
                  <span style={this.learnerInfo}>
                    {this.props.activeLearner.advanced_details.github}
                  </span>
                </h4>
                <h4>
                  linkedin: &nbsp; &nbsp;
                  <span style={this.learnerInfo}>
                    {this.props.activeLearner.advanced_details.linkedin}
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-md-offset-1 col-sm-offset-1">
              <div className="">
                Github Contributions:
                <AreaChart
                  x_data={githubConts.x_data}
                  series={githubConts.series}
                />
              </div>
            </div>
            <hr style={{ color: "black", backgroundColor: "black" }} />
          </div>
          <div className="col-md-12 col-sm-12" style={this.learnerDetails}>
            <hr style={{ color: "black", backgroundColor: "black" }} />
            <div className="col-sm-5 col-md-5 ">
              <div className="">
                Attendance:
                <AreaChart
                  x_data={attendanceData.x_data}
                  series={attendanceData.series}
                />
              </div>
            </div>
            <div className="col-sm-4 col-md-4  col-md-offset-2 col-sm-offset-2 ">
              <div className="">
                <h1 style={{ color: "#000" }}>
                  {" "}
                  Pie Chart <br /> coming soon
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Login />
    );
  }
}

const mapStateToProps = (state, ownprops) => ({
  activeLearner: selectActiveLearnerData(state, ownprops.match.params.id),
  isLoggedIn: selectIsLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerStats);
