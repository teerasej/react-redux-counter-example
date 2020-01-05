import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
