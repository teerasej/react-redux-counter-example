import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../redux/action'

export class SubtractNumber extends Component {

    subtractNumber = () => {
        this.props.subtract();
    }

    render() {
        return (
            <div>
                <button onClick={this.subtractNumber}>ลด</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        subtract: () => dispatch({ type: action.Actions.SUBTRACT_NUMBER, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtractNumber)
