import React from "react";
import Button from "../../componentes/C_Button";
import Input from "../../componentes/C_entrada";
import Textos from "../../componentes/C_Textos";
import Img from "./img/ImgLogin.jpg";
import "../../css/Style.css";

export default function Login() {
    return (

        <div>
            <img src={Img} alt="esta é a logo" />
            <div>
                <Textos texto1>Insira seus dados para acessar a plataforma</Textos>
                <Textos T_email>Email</Textos>
                <Input I_email placeholder="Digite seu email"></Input>
                <Textos T_senha>Senha</Textos>
                <Input I_senha placeholder="Digite sua senha"></Input>
                <Button B_login>Login</Button>
                <Button B_novocad>Login Usando o Google</Button>
                <Textos R_senha>Esqueci minha senha</Textos>
                <Textos texto2>Não tem uma conta?</Textos>
                <Textos T_registro>Registre-se</Textos>
            </div>
        </div>
    );
}