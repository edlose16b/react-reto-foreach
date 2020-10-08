import React, { Component } from 'react';
import { Emision, transportTypes } from './../../../core/constans';
import './index.css';
import { connect } from "react-redux";
import { fetchTransportations, registerEmition } from './../../../redux/actions/index';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


class FormComponent extends Component {



    constructor(props) {
        super(props);

        this.state = {
            startingPoint: 'Av. 1',
            arrivalPoint: 'Av. 2',
            transportId: 2,
            kilometersTraveled: 32.5,
            passengers: 'Juan,Miguel',
            roundTrip: true,
        };


    }

    getSnapshotBeforeUpdate() {

    }
    componentDidUpdate() {
        console.log('q es x2');
    }

    componentDidMount() {

        this.props.fetchTransportations();


        // let { transportations } = this.props;
        // let options = [];

        // transportations.forEach(
        //     transportation =>
        //         options.push(<option value={transportation.id}>{transportation.name}</option>)
        // )

        // this.setState({
        //     options
        // })

    }


    getComboTransportations() {
        console.log('Building Combo : ');
        let { transportations } = this.props;
        let options = [];

        transportations.forEach(
            transportation =>
                options.push(<option value={transportation.id}>{transportation.name}</option>)
        )

        return options;



    }


    submit = (e) => {
        e.preventDefault();
        console.log(this.state);

        let data = Object.values(this.state);
        this.props.registerEmition(this.state);


    }

    render() {



        return (
            <div className="tableClass">



                <form action="POST" onSubmit={this.submit}>
                    <label htmlFor="startingPoint">Punto de partida : </label>
                    <input type="text" id="startingPoint"
                        required
                        value={this.state.startingPoint}
                        onChange={(e) => this.setState({ startingPoint: e.target.value })} />

                    <br />
                    <label htmlFor="arrivalPoint">Punto de llegada : </label>
                    <input type="text" id="arrivalPoint"
                        required
                        value={this.state.arrivalPoint}
                        onChange={(e) => this.setState({ arrivalPoint: e.target.value })} />


                    <br />
                    <label htmlFor="txtLastname">Medio de transporte : </label>

                    <select
                        required
                        value={this.state.transportId}
                        onChange={(e) => this.setState({ transportId: e.target.value })} >
                        {this.getComboTransportations()}
                    </select>


                    <br />
                    <label htmlFor="kilometersTraveled">Cantidad de Kilometros : </label>
                    <input type="text" id="kilometersTraveled"
                        required
                        value={this.state.kilometersTraveled}
                        onChange={(e) => this.setState({ kilometersTraveled: e.target.value })} />



                    <br />
                    <label htmlFor="txtLastname">Nombre trabajadores de viaje  ( separados por coma (,)): </label>
                    <input type="text" id="passengers" required
                        value={this.state.passengers}
                        onChange={(e) => this.setState({ passengers: e.target.value })} />



                    <br />
                    <FormControl component="fieldset" required >
                        <FormLabel component="legend">Tipo de viaje</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.roundTrip}
                            onChange={(e) => {
                                console.log(e.target.value, e.target.value == 'true');
                                this.setState({ roundTrip: e.target.value == 'true' })
                            }}>
                            <FormControlLabel value={false} control={<Radio />} label="Solo Ida" />
                            <FormControlLabel value={true} control={<Radio />} label="Ida y Vuelta" />
                        </RadioGroup>
                    </FormControl>



                    <br />

                    <input type="submit" value="Enviar datos" />






                </form>
            </div>
        );
    }

}


const mapStateToProps = (state) => ({
    transportations: state.transportations
})

const mapDispatchToProps = (dispatch) => ({
    fetchTransportations: () => dispatch(fetchTransportations()),
    registerEmition: (payload) => dispatch(registerEmition(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
