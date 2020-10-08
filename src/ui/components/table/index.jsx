import React, { Component, useEffect } from 'react';
import './index.css';
import { connect } from "react-redux";
import { fetchTravels } from './../../../redux/actions/index';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class TableComponent extends Component {

    componentDidMount = () => {
        this.props.fetchTravels();
    }

    render = () => {
        return (<div className="classTable">
            <h2>Lista de viajes reportados</h2>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Día y hora</TableCell>
                            <TableCell align="right">Punto de inicio</TableCell>
                            <TableCell align="right">Punto de termino</TableCell>
                            <TableCell align="right">Medio de transporte</TableCell>
                            <TableCell align="right">Kilometros recorridos</TableCell>
                            <TableCell align="right">Personas en el viaje</TableCell>
                            <TableCell align="right">Ida y vuelta</TableCell>
                            <TableCell align="right">kgCO2 por persona</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.travels.map((travel) => (
                            <TableRow key={'travel-' + travel.id}>
                                <TableCell>{travel.id}</TableCell>
                                <TableCell align="right">{travel.createdAt}</TableCell>
                                <TableCell align="right">{travel.startingPoint}</TableCell>
                                <TableCell align="right">{travel.arrivalPoint}</TableCell>
                                <TableCell align="right">{travel.transport}</TableCell>
                                <TableCell align="right">{travel.kilometersTraveled}</TableCell>
                                <TableCell align="right">{travel.passengers}</TableCell>
                                <TableCell align="right">{travel.roundTrip ? 'Sí' : 'No'}</TableCell>
                                <TableCell align="right">{travel.KgCoPerPerson}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <button onClick={() => this.props.fetchTransportations('gaaadsada')}>Gaaa</button> */}

        </div>);

    }
}

const mapStateToProps = (state) => ({
    travels: state.travels
})

const mapDispatchToProps = (dispatch) => ({
    fetchTravels: () => dispatch(fetchTravels())
})

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);