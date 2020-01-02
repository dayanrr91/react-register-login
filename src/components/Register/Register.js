import React, { Component } from 'react';
import '../../components/Login/Login.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Facebook from '../../components/Facebook/Facebook';

import './Register.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#FFF' },
  },
  typography: { useNextVariants: true }
});

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
        username:'',
        email:'',
        password:'',
        repassword:'',
        usernameIsValid: false,
        passwordIsValid: false,
        emailIsValid: false,
        repasswordIsValid: false,
    }
  }

   routeChange(path) {
    this.props.history.push(path);
   }

  handleChangeUsername = event => {
    var re = /^[A-Za-z0-9_-]{3,15}$/;

    let usernameIsValid = re.test(event.target.value)

    this.setState({username: event.target.value, usernameIsValid});
  }

  handleChangeEmail (event) {
    
    var re = /\S+@\S+\.\S+/;

    let emailIsValid = re.test(event.target.value) || event.target.value.length === 0 ;
    this.setState({email: event.target.value, emailIsValid});
  }

  handleChangePassword = event => {
    // var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let passwordIsValid = event.target.value.length > 6 || event.target.value.length === 0 ;
    this.setState({password: event.target.value, passwordIsValid});
  }

  handleChangeRePassword (event) {
    console.log(event.target.value);
    
    let repasswordIsValid = event.target.value !== this.state.password && (event.target.value !== '' || this.state.password !== '');
    this.setState({repassword: event.target.value, repasswordIsValid});
  }
  
  handleClick(event){
    
    var self = this;
    if(this.state.username.length > 0 && this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0){

      var payload={
        "username": this.state.username,
        "email": this.state.email,
        "password": this.state.password,
        "repassword": this.state.repassword
      }
    //   axiosInstance.post('/register', payload).then(function (response) {
    //     if(response.status === 200){
    //         localStorage.setItem('accessToken', response.data.token);
    //         localStorage.setItem('username', response.data.username);
    //         window.location.href = "/home";
    //     }
    //     else{
        
    //     }
    //   }).catch(function (error) {
       
    //   });
    }
    else{
    
    }
  }
  render() {
    return (
       <div className="login-full-container">
        <div>
          
          <form>
          <MuiThemeProvider theme={theme}>
            <div className="login-user-password">
            <div className="inicie-sesion-container">
              <p>Crea una cuenta</p>
            </div>
            <Facebook title="register"/>

                <div className="login-user-password-fields">
                  <div className="register-with-your-credentials">
                    <span>O regístrate con tu correo electrónico </span>
                  </div>
                  
                  <div className="login-input-field">
                      <i className="material-icons">perm_identity</i>
                      <TextField required
                                id="standard-required"
                                label="Alias"
                                className="input-email"
                                margin="normal"
                                onChange = {(event) => this.handleChangeUsername(event)}
                      />
                      { this.state.username !== '' ? 
                      <div className="validation-line competition-validation-line">
                                  { this.state.username.length >= 3 && this.state.username.length <= 15  ?  
                                      <span><i className="top-1px material-icons set-color-green register-username-check">check</i></span> : 
                                      <span><i className="top-1px material-icons warning-icon-0 warning-icon-color register-username-not-check">close</i></span>
                                  }
                                <div className={`register-validation-message-${ this.state.username.length >= 3 && this.state.username.length <= 15 } color-black-transparent`}>Debe contener entre 3 y 15 caracteres</div>
                      </div>
                    : null}
                    </div>
                    <div className="login-input-field">
                      <i className="material-icons">email</i>
                      <TextField required
                                id="standard-required"
                                label="Correo"
                                className="input-email"
                                margin="normal"
                                onChange = {(event) => this.handleChangeEmail(event)}
                      />
                    { this.state.email !== '' ? 
                      <div className="validation-line competition-validation-line">
                                  { this.state.emailIsValid && this.state.email !== ''  ?  
                                      <span className="top-4px"><i className="material-icons set-color-green register-email-check">check</i></span> : 
                                      <span><i className="material-icons warning-icon-0 warning-icon-color register-email-not-check">close</i></span>
                                  }
                                <div className={`register-validation-message-${ this.state.emailIsValid } color-black-transparent`}>Debe ser un correo válido</div>
                      </div>
                    : null}
                    </div>
                   <div className="login-input-field">
                    { !this.state.passwordIsValid || this.state.password === '' ? 
                      <i className="material-icons">lock</i> : 
                      <i className="material-icons">lock_open</i>}
                    <TextField required
                              type="password"
                              id="standard-required"
                              label="Contraseña"
                              className="input-password"
                              margin="normal"
                              onChange = {(event) => this.handleChangePassword(event)}
                    />
                    { this.state.password !== '' ? 
                      <div className="validation-line competition-validation-line">
                                  { this.state.password.length >= 6 ?  
                                      <span className="top-9px"><i className="material-icons set-color-green">check</i></span> : 
                                      <span className="top-9px"><i className="material-icons warning-icon-0 warning-icon-color">close</i></span>
                                  }
                                <div className={`register-validation-message-${ this.state.password.length >= 6 } color-black-transparent`}>Debe contener al menos 6 caracteres</div>
                      </div>
                    : null}
                  </div> 
                  <div className="login-input-field">
                    { (this.state.password !== this.state.repassword || this.state.repassword === '') ? 
                      <i className="material-icons">lock</i> : 
                      <i className="material-icons">lock_open</i>}
                    <TextField required
                              type="password"
                              id="standard-required"
                              label="Confirmar Contraseña"
                              className="input-password"
                              margin="normal"
                              onChange = {(event) => this.handleChangeRePassword(event)}
                    />
                    { this.state.repassword !== '' ? 
                      <div className="validation-line competition-validation-line">
                                  { this.state.password === this.state.repassword && ( this.state.password !== '' || this.state.repassword !== '') ?  
                                      <span className="top-3px"><i className="top-1px material-icons set-color-green">check</i></span> : 
                                      <span className="top-9px"><i className="material-icons warning-icon-0 warning-icon-color">close</i></span>
                                  }
                                <div className={`register-validation-message-${ this.state.password === this.state.repassword && ( this.state.password !== '' || this.state.repassword !== '') } color-black-transparent`}>Las contraseñas deben coincidir</div>
                      </div>
                    : null}
                  </div>                 
                  <br/>
                </div>
                <div className="policy-register"> 
                  <p>Al hacer clic en <span>"Crear Cuenta"</span>, aceptas nuestras <a href="/conditions" target="_blank">Condiciones</a>, la <a href="/data-policy" target="_blank">Política de Datos</a>, la <a href="/cookies-policy" target="_blank">Política de Cookies</a> y las <a href="/rules" target="_blank">Reglas del juego.</a></p>
                </div>
                <div className="login-user-password-submit">
                    <Button disabled={!this.state.emailIsValid || 
                                       this.state.email === '' || 
                                      !this.state.passwordIsValid || 
                                      this.state.password === '' ||
                                      !this.state.usernameIsValid || 
                                       this.state.username === '' || 
                                       this.state.repassword !== this.state.password || 
                                       this.state.repassword === ''} 
                            className="login-button" 
                            color="secondary" 
                            onClick={(event) => this.handleClick(event)}>
                              Crea cuenta
                    </Button>
                </div>

                 <div className="login-redirect">
                  <span> ¿Ya tienes cuenta? </span>
                  <span className="iniciar-sesion-in-register"><button className="register-button-like-anchor" onClick = {(event) => this.routeChange("login")}>Inicia Sesión</button></span>
                 </div>
            </div>
          </MuiThemeProvider>
          </form>
        </div>
        
      </div>
    );
  }
}

export default Register;
