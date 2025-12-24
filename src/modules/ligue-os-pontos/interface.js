import React, { useEffect, useState } from "react";
import './style.css'

const initialStateParticipation = {
    option1: 0,
    option2: 0,
    option3: 0
}

const gabarito = {
    option1: 3,
    option2: 1,
    option3: 2
}

const GameInterface = (props) => {
    //////////////////////////////////////////////////////////
    // controle de cliques nos itens e colunas ///////////////
    //////////////////////////////////////////////////////////
    const [firstA, setFirstA] = useState(false);
    const [firstB, setFirstB] = useState(false);
    const [firstC, setFirstC] = useState(false);
    function resetButtons() {
        setFirstA(false);
        setFirstB(false);
        setFirstC(false);
        setSecondA(false);
        setSecondB(false);
        setSecondC(false);
    }
    const changeFirstA = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setFirstA(nextState);
        setFirstB(false);
        setFirstC(false);
    }
    const changeFirstB = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setFirstA(false);
        setFirstB(nextState);
        setFirstC(false);
    }
    const changeFirstC = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setFirstA(false);
        setFirstB(false);
        setFirstC(nextState);
    }
    const [secondA, setSecondA] = useState(false);
    const [secondB, setSecondB] = useState(false);
    const [secondC, setSecondC] = useState(false);
    const changeSecondA = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setSecondA(nextState);
        setSecondB(false);
        setSecondC(false);
    }
    const changeSecondB = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setSecondA(false);
        setSecondB(nextState);
        setSecondC(false);
    }
    const changeSecondC = (event) => {
        const status = event.target.value;
        const nextState = status === 'false' ? true : false;
        setSecondA(false);
        setSecondB(false);
        setSecondC(nextState);
    }
    useEffect(() => {
        if ((firstA || firstB || firstC) && (secondA || secondB || secondC)) {
            handleGameChange();
        }
    }, [firstA, firstB, firstC, secondA, secondB, secondC]);
    //////////////////////////////////////////////////////////
    // controle das lógicas //////////////////////////////////
    //////////////////////////////////////////////////////////
    const [participation, setParticipation] = useState(initialStateParticipation);
    const [lastOption, setLastOption] = useState(0);
    function handleGameChange() {
        const participationOption = getParticipationOption();
        const participationChoice = getParticipationChoice();
        if (participationOption > 0 && participationChoice > 0) {
            const option = `option${participationOption}`;
            setLastOption(participationOption);
            setParticipation({
                ...participation,
                [option]: participationChoice,
            });
        }
        else if (lastOption > 0) {
            setParticipation({
                ...participation,
                [`option${lastOption}`]: 0,
            });
            setLastOption(0);
        }
    }
    function getParticipationOption() {
        let option = 0;
        Object.keys(participation).forEach((item) => {
            switch (item) {
                case 'option1':
                    if (firstA) option = 1
                    break;

                case 'option2':
                    if (firstB) option = 2
                    break;

                case 'option3':
                    if (firstC) option = 3
                    break;

                default:
                    option = 0;
                    break;
            }
        });
        return option;
    }
    function getParticipationChoice() {
        let choice = 0;
        Object.keys(participation).forEach((item) => {
            switch (item) {
                case 'option1':
                    if (secondA) choice = 1
                    break;

                case 'option2':
                    if (secondB) choice = 2
                    break;

                case 'option3':
                    if (secondC) choice = 3
                    break;

                default:
                    choice = 0;
                    break;
            }
        });
        return choice;
    }
    //////////////////////////////////////////////////////////
    // controle de saída do game /////////////////////////////
    //////////////////////////////////////////////////////////
    function compareObjects(obj1, obj2) {
        // Compara as chaves dos objetos
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Se o número de chaves for diferente, os objetos são diferentes
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Compara os valores das propriedades
        for (const key of keys1) {
            const val1 = obj1[key];
            const val2 = obj2[key];
            if (val1 !== val2) {
                return false;
            }
        }

        // Os objetos são iguais
        return true;
    }
    useEffect(() => {
        props.update(compareObjects(participation, gabarito));
        resetButtons();
    }, [participation]);
    return (
        <div className="content">
            <div className="game">
                <div className="col col1">
                    <input id="option1" value={firstA} type="checkbox" onChange={changeFirstA} />
                    <label htmlFor="option1" className={`${firstA ? 'active' : null}`}>
                        Pack
                        <br />
                        Térmico
                        {participation.option1 === 1 && <span className="line-game line1-1"></span>}
                        {participation.option1 === 2 && <span className="line-game line1-2"></span>}
                        {participation.option1 === 3 && <span className="line-game line1-3"></span>}
                    </label>

                    <input id="option2" value={firstB} type="checkbox" onChange={changeFirstB} />
                    <label htmlFor="option2" className={`${firstB ? 'active' : null}`}>
                        Loja
                        <br />
                        Virtual
                        {participation.option2 === 1 && <span className="line-game line2-1"></span>}
                        {participation.option2 === 2 && <span className="line-game line2-2"></span>}
                        {participation.option2 === 3 && <span className="line-game line2-3"></span>}
                    </label>

                    <input id="option3" value={firstC} type="checkbox" onChange={changeFirstC} />
                    <label htmlFor="option3" className={`${firstC ? 'active' : null}`}>
                        Delivery
                        <br />
                        Organizado
                        {participation.option3 === 1 && <span className="line-game line3-1"></span>}
                        {participation.option3 === 2 && <span className="line-game line3-2"></span>}
                        {participation.option3 === 3 && <span className="line-game line3-3"></span>}
                    </label>
                </div>
                <div className="col col2">
                    <input id="option1.1" value={secondA} type="checkbox" onChange={changeSecondA} />
                    <label htmlFor="option1.1" className={`${secondA ? 'active' : null}`}>
                        Mais vendas e até
                        <br />
                        5x mais lucro
                    </label>

                    <input id="option2.2" value={secondB} type="checkbox" onChange={changeSecondB} />
                    <label htmlFor="option2.2" className={`${secondB ? 'active' : null}`}>
                        Corredor de
                        <br />
                        sorvetes espelhando
                        <br />o estoque da loja
                        <br />
                        física
                    </label>

                    <input id="option3.3" value={secondC} type="checkbox" onChange={changeSecondC} />
                    <label htmlFor="option3.3" className={`${secondC ? 'active' : null}`}>
                        Mantém a<br />
                        cremosidade do
                        <br />
                        sorvete por até
                        <br />
                        40 minutos
                    </label>
                </div>
            </div>
        </div>
    );
};

export default GameInterface;
