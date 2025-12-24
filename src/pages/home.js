import React from "react";
import { Link } from "react-router-dom";
import bulletHand from "../assets/yellow-bullet-with-hand.jpg";
import bullet from "../assets/red-bullet.jpg";
import logoA from "../assets/logo-kibon1.jpg";
import logoB from "../assets/logo-kibon2.jpg";
import btComecar from "../assets/bt-comecar.png";
import "./home.css";

const Home = () => {
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

            <div className="content">
                <hr className="line" />
                <h2 className="page-title">Como Jogar:</h2>
                <p>
                    Ligue os pontos entre os termos e suas correspondências para
                    dar bom com Kibon no Delivery.
                </p>
                <div className="example-game">
                    <img
                        src={bulletHand}
                        alt="Ligue os pontos"
                        className="img1"
                    />
                    <img src={bullet} alt="Ligue os pontos" className="img2" />
                </div>

                <p>
                    Após selecionar todos, toque em conferir para ver se sua
                    loja vai dar bom, e você vai sair daqui com um Kibon!
                </p>

                <span className="text-footer">Bom Jogo</span>
            </div>

            <footer className="footer">
                <Link className="bt-continue" to="/game">
                    <img src={btComecar} alt="Começar" />
                </Link>
            </footer>
        </>
    );
};

export default Home;
