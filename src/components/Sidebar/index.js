import React from "react";

import { connect } from "react-redux";

import * as SideActions from "../../store/actions/sidebar";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((mod) => (
      <div key={mod.id}>
        <strong>{mod.title}</strong>
        <ul>
          {mod.lessons.map((less) => (
            <li key={less.id}>
              {less.title}
              <button onClick={() => toggleLesson(mod, less)}> Select</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = (state) => ({
  modules: state.modules,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLesson: (module, lesson) =>
    dispatch(SideActions.toggleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
