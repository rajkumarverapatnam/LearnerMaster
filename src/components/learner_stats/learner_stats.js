import React, { Component } from "react";
import { connect } from 'react-redux';
import {selectActiveLearnerData} from './learner_stats.selectors';

import {selectIsLoggedIn} from '../login/login.selectors';
import AreaChart from "../area_chart/area_chart";
import Login from "../login/login";

class LearnerStats extends Component {
  learnerDetails = {
    padding: "50px",
    backgroundColor: "#2fcbd6",
    height: "400px",
  };

  getGithubContributions() {
    const commits = this.props.activeLearner.advanced_details.commits_history;
    const linesData = this.props.activeLearner.advanced_details.lines_count_history;
    return {
      "x_data": Object.keys(commits),
      "series": [{
        "name": "commits",
        "data": Object.values(commits)
      }, {
        "name": "lines",
        "data": Object.values(linesData)
      }]
    }
  }

  getAttendance() {
    const attendanceData = this.props.activeLearner.advanced_details.attendance;
    return {
      "x_data": Object.keys(attendanceData),
      "series": [{
        "name": "attendance",
        "data": Object.values(attendanceData)
      }]
    }
  }

  render() {
    console.log("((here", this.props.isLoggedIn, this.props.match.params.id);
    const githubConts = this.getGithubContributions();
    const attendanceData = this.getAttendance();
    return (
      this.props.isLoggedIn ? <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12" style={this.learnerDetails}>
            <div className="col-sm-6 col-md-6">
              <div className="learnerDetails">
                <h2>Name: {this.props.activeLearner.name}</h2>
                <p>Phone: {this.props.activeLearner.advanced_details.phone}</p>
                <p>Email Id: {this.props.activeLearner.advanced_details.email}</p>
                <p>Github: {this.props.activeLearner.advanced_details.github}</p>
                <p>linkedin: {this.props.activeLearner.advanced_details.linkedin}</p>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-md-offset-1 col-sm-offset-1">
              <div className="">
                Github Contributions:
                <AreaChart x_data={githubConts.x_data} series={githubConts.series} />
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-md-offset-1 col-sm-offset-1">
              <div className="">
                Attendance:
                <AreaChart x_data={attendanceData.x_data} series={attendanceData.series} />
              </div>
            </div>
          </div>
        </div>
      </div> : <Login />
    );
  }
};

const mapStateToProps = (state, ownprops) => ({
  activeLearner: selectActiveLearnerData(state, ownprops.match.params.id),
  isLoggedIn: selectIsLoggedIn(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerStats);
