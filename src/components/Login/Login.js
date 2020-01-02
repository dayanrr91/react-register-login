import React, { Component } from 'react';
import './Login.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Facebook from '../../components/Facebook/Facebook';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#000' },
        secondary: { main: '#FFF' },
    },
    typography: { useNextVariants: true }
});

const initialState = {
    username: '',
    password: '',
    loginComponent: [],
    usernameIsValid: false,
    passwordIsValid: false
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

    }

    reset() {
        this.setState(initialState);
    }

    routeChange(path) {
        this.props.history.push(path);
    }


    handleChangeUsername = event => {

        var re = /\S+@\S+\.\S+/;

        let usernameIsValid = re.test(event.target.value) || event.target.value.length === 0;

        this.setState({ username: event.target.value, usernameIsValid });
    }

    handleChangePassword = event => {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        let passwordIsValid = re.test(event.target.value) || event.target.value.length === 0;

        this.setState({ password: event.target.value, passwordIsValid });
    }

    login(event) {
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        // axiosInstance.post('login', payload).then(function (response) {
        //     if (response.status === 200) {
        //         localStorage.setItem('accessToken', response.data.token);
        //         localStorage.setItem('username', response.data.username);
        //         window.location.href = "/home";
        //     }
        //     else if (response.status === 204) {
        //         this.reset();
        //     }
        //     else {
        //         this.reset();
        //     }
        // }).catch(function (error) {
        //     window.location.href = "/login"
        // });
    }

    render() {
        return (
            <div className="login-full-container">
                <div>

                    <MuiThemeProvider theme={theme}>
                        <div className="login-user-password">
                            <div className="inicie-sesion-container">
                                <p>Inicia Sesión</p>
                            </div>
                            <Facebook title="login" />
                            <div className="login-user-password-fields">

                                <div className="login-with-your-credentials">
                                    <span>O inicia sesión con un correo electrónico</span>
                                </div>
                                <div className="login-input-field">
                                    <i className="material-icons">email</i>
                                    <TextField required
                                        id="standard-required"
                                        label="Correo"
                                        className="input-email"
                                        margin="normal"
                                        onChange={(event) => this.handleChangeUsername(event)}
                                    />
                                </div>
                                <div className="login-input-field">
                                    <i className="material-icons">lock</i>
                                    <TextField required
                                        type="password"
                                        id="standard-required"
                                        label="Contraseña"
                                        className="input-password"
                                        margin="normal"
                                        onChange={(event) => this.handleChangePassword(event)}
                                    />
                                </div>

                                <br />
                            </div>
                            <div className="login-user-password-submit">
                                <Button className="login-button" color="secondary" onClick={(event) => this.login(event)}>Inicia Sesión</Button>
                            </div>


                            <div className="login-redirect">
                                <span> ¿No tienes cuenta? </span>
                                <span className="iniciar-sesion-in-register">
                                    <button className="register-button-like-anchor" onClick={(event) => this.routeChange("register")}>Regístrate</button>
                                </span>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </div>

            </div>
        );
    }
}

export default Login;
