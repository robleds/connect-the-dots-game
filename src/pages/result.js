import React from "react";
import { Link } from "react-router-dom";
import logoA from "../assets/logo-kibon1.jpg";
import logoB from "../assets/logo-kibon2.jpg";
import btNovo from "../assets/bt-novo-jogo.png";
import "./result.css";
import RestartTimer from "../modules/restart-timmer/restart";

const Result = ({ match }) => {
    const isWinner = match.params.winner === 'true' ? true : false;
    return (
        <>
            <header className="header">
                <div className="logos">
                    <img src={logoA} alt="kibon" />
                    <img src={logoB} alt="kibon" />
                </div>
            </header>

            <RestartTimer delay={40} page="/" />

            <div
                className="content"
                style={{ textAlign: "center", overflow: "hidden" }}
            >
                <h2 className="thanks-title">
                    Obrigado por
                    <br />
                    participar
                </h2>
                <h3 className="page-subtitle">Resultado</h3>
                <hr className="line" style={{ margin: "3% auto 10%" }} />
                {isWinner && <span className="result-text success">Você Ganhou</span>}
                {!isWinner && <span className="result-text fail">Você Perdeu</span>}
            </div>

            <footer className="footer">
                <Link className="bt-continue" to="/">
                    <img src={btNovo} alt="Começar" />
                </Link>
            </footer>
        </>
    );
};

export default Result;
