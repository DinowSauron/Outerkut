import React from "react";
// Hook do NextJS
import { useRouter } from "next/router";
import nookies from "nookies";

export default function Login() {
    const router = useRouter();
    const [githubUser, setGithubUser] = React.useState("DinowSauron");



    function Acessar (event) {
        event.preventDefault();
        // alert("Alguém clicou no botão!")
        console.log("Usuário: ", githubUser)
        fetch("https://alurakut.vercel.app/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify({ githubUser: githubUser })
        })
        .then(async (respostaDoServer) => {
            const dadosDaResposta = await respostaDoServer.json()
            const token = dadosDaResposta.token;
            nookies.set(null, "USER_TOKEN", token, {
                path: "/",
                maxAge: 86400 * 7 
            });
            router.push("/");
        })
        .catch(() => {
            // não é a melhor forma, porém o servidor que gera o token não foi disponibilizado pelo evento.
            // Para evitar dele ficar fora do ar e todo meu projeto ser destruído, tive que fazer essa triste alternativa.
            console.log("Servidor indisponivel, modo manual tivado");
            nookies.set(null, "ERROR_TOKEN", githubUser, {
                path: "/",
                maxAge: 86400 * 1
            });
            router.push("/");
        });
    }


    return (
        <main style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div className="loginScreen">
            <section className="logoArea">
            <img src="icons/outerkut-logo.svg" />

            <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
            <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
            <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
            </section>

            <section className="formArea">
            <form className="box" onSubmit={Acessar}>
                <p>
                Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
                </p>
                <input
                    placeholder="Usuário"
                    value={githubUser}
                    onChange={(event) => {
                        setGithubUser(event.target.value)
                    }}
                />
                <p>
                    {githubUser.length === 0
                    ? "Preencha o campo"
                    : ""
                    }   
                </p>
                <button type="submit">
                Login
                </button>
            </form>

            <footer className="box">
                <p>
                Ainda não é membro? <br />
                <a href="/login">
                    <strong>
                    ENTRAR JÁ
                </strong>
                </a>
                </p>
            </footer>
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