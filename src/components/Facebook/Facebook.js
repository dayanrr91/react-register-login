import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import './Facebook.css';

export default class Facebook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: '',
            title: this.props.title
        }
    }


    responseFacebook = response => {
        this.setState({
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        this.loginOrRegister();
    }

    loginOrRegister() {

        var facebookUser = {
            "userId": this.state.userID,
            "name": this.state.name,
            "email": this.state.email,
            "picture": this.state.picture
        }
    }



    componentClicked = () => console.log('');

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        }
        else {
            if (this.state.title === "register") {
                fbContent = (
                    <FacebookLogin appId="633818070393123"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        textButton="Crea una cuenta con Facebook"
                        cssClass="my-facebook-button-class"
                        disableMobileRedirect={true}
                        icon="fa-facebook" />

                );
            }
            else {
                fbContent = (
                    <FacebookLogin appId="633818070393123"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        textButton="Inicia sesión en Facebook"
                        cssClass="my-facebook-button-class"
                        disableMobileRedirect={true}
                        icon="fa-facebook" />

                );
            }

        }
        return (
            <div className="facebook-content-login">
                {fbContent}
            </div>
        )
    }
}