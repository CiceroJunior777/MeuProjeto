import React from "react";
import Button from "../../componentes/C_Button";
import Input from "../../componentes/C_entrada";
import Textos from "../../componentes/C_Textos";
import Img from "./img/ImgLogin.jpg";
import "../../css/Style.css";

export default function Login() {

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
                <Button B_novocad>Login Usando o Google</Button>
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