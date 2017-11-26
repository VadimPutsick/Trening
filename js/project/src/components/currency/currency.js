import React, { Component } from 'react';

import { addTodo, removeTodo } from '../../store/actions';
import { connect } from 'react-redux';
class Currency extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pr-course-item" onClick={
                () => 
                {                  
                    this.props.addTodo(this.props.value)
                }
                }>
                <div className="pr-course__abbreviation">{this.props.abbreviation}</div>
                <div className="pr-course__rate">{this.props.rate}</div>
                <div className="pr-course__changes pr-course__changes_green"
                onClick ={
                    ()=>{
                       console.log(this.props) 
                    }
                }
                >+0.00019</div>            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const values = state.todo.values;
    const todoState = state.todo.state;

    return { values, state: todoState };
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))   
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currency);
export  {output as Currency}



