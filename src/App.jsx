import React, { useState } from 'react';

const App = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        if (pesoNum > 0 && alturaNum > 0) {
            const imc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
            let interpretacao = '';

            if (imc < 18.5) {
                interpretacao = 'Abaixo do peso';
            } else if (imc < 24.9) {
                interpretacao = 'Peso normal';
            } else if (imc < 29.9) {
                interpretacao = 'Sobrepeso';
            } else {
                interpretacao = 'Obesidade';
            }

            setResultado(`Seu IMC é: ${imc} (${interpretacao})`);
        } else {
            setResultado('Por favor, insira valores válidos.');
        }
    };

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <input 
                type="number" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} 
                placeholder="Peso (kg)" 
                required 
            />
            <input 
                type="number" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)} 
                placeholder="Altura (m)" 
                required 
            />
            <button onClick={calcularIMC}>Calcular IMC</button>
            <div className="result">{resultado}</div>
        </div>
    );
};

export default App;
