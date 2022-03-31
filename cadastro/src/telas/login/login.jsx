import React from "react";
import Button from "../../componentes/C_Button";
import Recebe from "../../componentes/C_entrada";

export default function Login() {
    return (
        <div>
            <div>
            <Recebe C_email placeholder="E-mail"></Recebe>
            <Button B_login>Login</Button>
            <Button B_novocad>Login Usando o Google</Button>
            </div>
        </div>
    );
}