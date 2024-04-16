import { useState, useEffect } from "react"

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const IMC = (peso / (altura * altura)) * 10000;

        switch(true) {
            case IMC < 18.5:
                return "Abaixo do peso";
            case IMC >= 18.5 && IMC < 24.9:
                return "Peso normal";
            case IMC >= 25 && IMC < 29.9:
                return "Sobrepeso";
            case IMC >= 30 && IMC < 39.9:
                return "Obesidade"
            case IMC >= 40:
                return "Obesidade grave"
            default:
                return "";
        }
    }

    return (
        <form>
            <input type="number" placeholder="Seu peso (kg)" onChange={({ target }) => setPeso(parseInt(target.value))} />
            <input type="number" placeholder="Sua altura (cm)" onChange={evento => setAltura(parseInt(evento.target.value))} />
            <h2>
                {renderizaResultado()}
            </h2>
        </form>
    )
}

export default Formulario