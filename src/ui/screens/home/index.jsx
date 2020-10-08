import React, { Component } from "react";
import FormComponent from '../../components/form'
import Table from './../../components/table'
import './index.css';

export default class HomeScreen extends Component {
    render() {
        return (<div className="classHome">
            <FormComponent />
            <Table />
        </div>);
    }
}