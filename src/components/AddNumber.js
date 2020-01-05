import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../redux/action'

export class AddNumber extends Component {

    addMoreNumber = () => {
        this.props.add();
    }


    render() {
        return (
            <div>
                <button onClick={this.addMoreNumber}>เพิ่ม</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({ type: action.Actions.ADD_NUMBER, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber)
