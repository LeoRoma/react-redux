import React from "react";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { authors, courses, loadAuthors, loadCourses } = this.props;

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }

    if (courses.length === 0) {
      loadCourses().catch((error) => {
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
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

// This function determines what state is passed to our components via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

// This function lets us declare what actions to pass to our component on props
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

// connect() function connects to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
