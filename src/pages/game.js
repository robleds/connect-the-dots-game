import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import btConferir from "../assets/bt-conferir.png";
import logoA from "../assets/logo-kibon1.jpg";
import logoB from "../assets/logo-kibon2.jpg";
import GameInterface from "../modules/ligue-os-pontos/interface";
import RestartTimer from "../modules/restart-timmer/restart";

const Game = () => {
    const [winner, setWinner] = useState(false);
    const [isCheckin, setIsCheckin] = useState(false);
    const handleUpdate = (novoValor) => {
        setWinner(novoValor);
    };
    const registerCheckinTotem = async () => {
        const data = { id: 13 };
        const response = await fetch("https://api4.convencaoraizen2023.com.br/checkintotem/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        try {
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(error);
        }
    };
    registerCheckinTotem();
    return (
        <>
            <header className="header">
                <div
                    className="logos"
                    style={{
                        flexDirection: "row",
                        columnGap: "20px",
                        paddingBottom: "9%",
                    }}
                >
                    <img src={logoA} alt="kibon" />
                    <img src={logoB} alt="kibon" />
                </div>
            </header>

            <RestartTimer delay={240} page="/" />
            <GameInterface update={handleUpdate} />

            <footer className="footer">
                <Link className="bt-continue" to={`/result/${winner}`}>
                    <img src={btConferir} alt="Começar" />
                </Link>
            </footer>
        </>
    );
};

export default Game;
