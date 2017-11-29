import React, { Component } from 'react';
import './currency.css';
import { addTodo, removeTodo } from '../../store/actions';
import { connect } from 'react-redux';
class Currency extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pr-course-item" onClick={
                () => {
                    this.props.addTodo(this.props.value);
                }
            }>
                <div className="pr-course__abbreviation">{this.props.abbreviation}</div>
                <div className="pr-course__rate">{this.props.rate}</div>
                {
                    this.props.currencyChange > 0 ?
                        <div className="pr-course__changes pr-course__changes_green">
                            +{this.props.currencyChange}
                        </div> :
                        <div className="pr-course__changes pr-course__changes_red">
                            {this.props.currencyChange}
                        </div>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // const values = state.todo.values;
    // const todoState = state.todo.state;

    return { };
};

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currency);
export { output as Currency };



