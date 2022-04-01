import React from "react";
import Button from "../../componentes/C_Button";
import Input from "../../componentes/C_entrada";
import Title from "../../componentes/C_title";

export default function Login() {
    return (
        <div>
            <Title email>Email</Title>
            <Input I_email placeholder="E-mail"></Input>
            <Title senha>Senha</Title>
            <Input I_senha placeholder="senha"></Input>
            <Button B_login>Login</Button>
            <Button B_novocad>Login Usando o Google</Button>
        </div>
    );
}