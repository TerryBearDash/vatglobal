import React from "react";
import DatePicker from "react-datepicker";
import {get } from '../../services/api';
import "react-datepicker/dist/react-datepicker.css";

export class Dater extends React.Component {

    componentDidMount() {
        this.handleChange(new Date());
    }

    state = {
        startDate: new Date()
    };

    handleChange = (date) => {
        if (date) {
            this.setState({ startDate: date });
            this.props.parentCallback(date.toString(), 'you');
            this.getDateQuote(new Date(date).getMonth(), new Date(date).getDate());
        }
    };

    getDateQuote(month, day) {
        get(`http://numbersapi.com/${month + 1}/${day}/date`, null).then(d => this.props.parentCallback(d, 'message')).catch(e => e);
    }

    render() {
        return ( <
            DatePicker placeholderText = "Click to select a date"
            dateFormat = "MMMM d, yyyy"
            className = "form-control"
            selected = { this.state.startDate }
            onChange = { this.handleChange }
            />
        );
    }
}