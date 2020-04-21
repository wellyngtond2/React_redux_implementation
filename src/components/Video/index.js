import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Module {activeModule.title}</strong>
    <br />
    <strong>Lesson {activeLesson.title}</strong>
  </div>
);

const mapStateToProps = (state) => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
});

export default connect(mapStateToProps)(Video);
