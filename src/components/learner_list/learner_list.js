import React, { Component } from "react";
import { connect } from "react-redux";
import { selectLearners } from "./learner_list.selectors";
import { selectIsLoggedIn } from "../login/login.selectors";
import { changeRoute } from "../../routing/history";
import { PATHS } from "../../routing/paths_constants";
import { setActiveLearnerId } from "../learner_stats/learner_stats.actions";
import Logout from "../logout/logout";
import Login from "../login/login";

class LearnerList extends Component {
  learnerBlock = {
    width: "350px",
    height: "100px",
    backgroundColor: "#2fcbd6",
    padding: "5px",
    margin: "5px",
    color: "#f0fff3",
    cursor: "pointer",
  };

  onCardClick(learnerId) {
    console.log("**on card click", this.props.isLoggedIn);
    if (this.props.isLoggedIn) {
      this.props.onNameClick(learnerId);
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? <Logout /> : <Login />}
        <div className="container">
          <div className="col-sm-12">
            <div
              className="col-sm-5"
              style={{ height: "600px", overflow: "scroll" }}
            >
              {this.props.learners &&
                this.props.learners.map((learner) => (
                  <div className="col-sm-12">
                    <div className="col-sm-6">
                      <div
                        className="learnerBlock"
                        style={this.learnerBlock}
                        onClick={() => this.onCardClick(learner.id)}
                      >
                        <div className="learner-listItem">
                          <h3> {learner.name} </h3>
                          <p>Location:{learner.location} </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <img
                        src={require("./../../images/thumbnail.png")}
                        alt="thumbnail"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  learners: selectLearners(state),
  isLoggedIn: selectIsLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onNameClick: (id) => {
    dispatch(setActiveLearnerId(id));
    changeRoute(PATHS.Student + "/" + id);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerList);
