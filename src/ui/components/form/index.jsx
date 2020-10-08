import React, { Component } from 'react';
import { Emision, transportTypes } from './../../../core/constans';
import './index.css';
import { connect } from "react-redux";
import { fetchTransportations, registerEmition } from './../../../redux/actions/index';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: 30,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

class FormComponent extends Component {



    constructor(props) {
        super(props);

        this.state = {
            startingPoint: 'La niña 3175, Las Condes',
            arrivalPoint: 'Av. Andres Bello 2425, Providencia',
            transportId: 1,
            kilometersTraveled: 10,
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


    submit = (e) => {
        e.preventDefault();
        console.log(this.state);

        let data = Object.values(this.state);
        this.props.registerEmition(this.state);


    }

    render() {



        return (

            <>

                <h2>Formulario de registro</h2>
                <form action="POST" onSubmit={this.submit}>

                    <FormControl className={useStyles.formControl}>
                        <TextField id="standard-basic" label="Punto de partida"
                            required
                            value={this.state.startingPoint}
                            onChange={(e) => this.setState({ startingPoint: e.target.value })} />

                    </FormControl>

                    <br /><br />
                    <FormControl >

                        <TextField id="standard-basic" label="Punto de llegada"
                            required
                            value={this.state.arrivalPoint}
                            onChange={(e) => this.setState({ arrivalPoint: e.target.value })} />
                    </FormControl>
                    <br /><br />

                    <FormControl className={useStyles.formControl}>
                        <Select
                            value={this.state.transportId}
                            onChange={(e) => this.setState({ transportId: e.target.value })}
                            displayEmpty
                            className={useStyles.selectEmpty}
                        >
                            <MenuItem value="0">
                                <em>Seleccionar</em>
                            </MenuItem>
                            {this.props.transportations.map(t => (<MenuItem value={t.id}>{t.name}</MenuItem>))}

                        </Select>
                        {/* <FormHelperText>Without label</FormHelperText> */}
                    </FormControl>
                    <br /><br />

                    <FormControl>

                        <TextField id="standard-basic" label="Cantidad de kilimetros"
                            required
                            type='numeric'
                            value={this.state.kilometersTraveled}
                            onChange={(e) => this.setState({ kilometersTraveled: e.target.value })} />
                    </FormControl>
                    <br /><br />

                    <FormControl fullWidth>
                        <TextField id="standard-basic" label="Trabajadores en el viaje"

                            required
                            type='numeric'
                            value={this.state.passengers}
                            onChange={(e) => this.setState({ passengers: e.target.value })} />
                        <FormHelperText>separados por coma (,)</FormHelperText>
                    </FormControl>
                    <br /><br />

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
                    <br /><br />


                    <Button variant="contained" color="primary" type='submit'>
                        Enviar datos
                    </Button>






                </form>
            </>
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
