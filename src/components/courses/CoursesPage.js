import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import propTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); // Object shorthand syntax
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  render() {
    return (
      // Submit with enter Key
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

// Thanks to connect() 'line 57' automatically passes dispatch in
CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
};

// This function determines what state is passed to our components via props
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// This function lets us declare what actions to pass to our component on props
function mapDispatchToProps() {}

// connect() function connects to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
