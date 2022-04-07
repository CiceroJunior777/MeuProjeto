import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Button from "../../componentes/C_Button";
import Input from "../../componentes/C_entrada";
import Textos from "../../componentes/C_Textos";
import Img from "./img/ImgLogin.jpg";
import "../../css/Style.css";

export default function Login() {

    //código responsavel por realizar login atraves do google
    const clientId = "160024082790-nje2kh5c063nf06gt1tc5t7pstkleb5c.apps.googleusercontent.com";


        const [loading, setLoading] = useState('Loading...');
        const [user, setUser] = useState(null);

        const handleLoginSuccess = (response) => {
            console.log("Login Success ", response);
            setUser(response.profileObj);
            setLoading();
        }

        const handleLoginFailure = error => {
            console.log("Login Failure ", error);
            setLoading();
        }

        const handleLogoutSuccess = (response) => {
            console.log("Logout Success ", response);
            setUser(null);
        }

        const handleLogoutFailure = error => {
            console.log("Logout Failure ", error);
        }

        const handleRequest = () => {
            setLoading("Loading...");
        }

        const handleAutoLoadFinished = () => {
            setLoading();
        }

        //inicio da execução da tela de login
        return (

            <div>
                <img src={Img} alt="esta é a logo" />
                <div>
                    {/*Titulo*/}
                    <Textos texto1>Insira seus dados para acessar a plataforma!</Textos>
                    {/*Titulo*/}

                    {/*Input de email*/}
                    <Textos T_email>Email</Textos>
                    <Input type="email" I_email placeholder="Digite seu email"></Input>
                    {/*Input de email*/}

                    {/*Input de senha*/}
                    <Textos T_senha>Senha</Textos>
                    <Input type="password" id="Email_User" I_senha placeholder="Digite sua senha"></Input>
                    {/*Input de senha*/}

                    {/*Botões*/}
                    <Button B_login>Login</Button>
                    <div>
                        {user ? <div>
                            <div className="name" >Bem-Vindo, {user.name}!</div>
                            <GoogleLogout
                                clientId={clientId}
                                onLogoutSuccess={handleLogoutSuccess}
                                onFailure={handleLogoutFailure}
                            />
                        </div> :
                            <GoogleLogin
                                clientId={clientId}
                                buttonText={loading}
                                onSuccess={handleLoginSuccess}
                                onFailure={handleLoginFailure}
                                onRequest={handleRequest}
                                onAutoLoadFinished={handleAutoLoadFinished}
                                isSignedIn={true}
                            />}
                    </div>
                    {/*Botões*/}

                    {/*Link para recovery de senha*/}
                    <Textos R_senha>Esqueci minha senha</Textos>
                    {/*Link para recovery de senha*/}

                    {/*Criar novo registro*/}
                    <Textos texto2>Não tem uma conta?</Textos>
                    <Textos T_registro>Registre-se</Textos>
                    {/*Criar novo registro*/}
                </div>
            </div>
        );
    }