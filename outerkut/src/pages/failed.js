import React from "react";
import { useRouter } from "next/router";
// Hook do NextJS

export default function Login() {
    const router = useRouter();

    function handleRoute(){
        router.push("/login")
    }

    return (
        <main style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
        <div className="loginScreen" style={{width: "100%", gridTemplateAreas: '"logoArea logoArea" "logoArea logoArea" "footerArea footerArea"'}}>
            <section className="logoArea" style={{width: "100%"}}>
            <img src="icons/outerkut-logo.svg" />

            <h2>Login Inválido</h2>

            <button onClick={() => {handleRoute()}}>Tentar Novamente </button>
            </section>

            <footer className="footerArea">
            <p>
                © 2021 outerkut - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
            </p>
            </footer>
        </div>
        </main>
    );
} 