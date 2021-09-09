import React from "react";
import * as authorActions from "../../redux/actions/authorActions";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { authors, courses, actions } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

// Thanks to connect() 'line 57' automatically passes dispatch in
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// This function determines what state is passed to our components via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

// This function lets us declare what actions to pass to our component on props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

// connect() function connects to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
