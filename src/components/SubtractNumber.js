import React from 'react';
import { connect } from 'react-redux';
import action from '../redux/action';

function SubtractNumber({ subtract }) {
  return (
    <div>
      <button onClick={subtract}>ลด</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    subtract: () => dispatch({ type: action.Actions.SUBTRACT_NUMBER, payload: 1 })
  };
};

export default connect(null, mapDispatchToProps)(SubtractNumber);
