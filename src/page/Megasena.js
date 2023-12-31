import React, { useState } from 'react'
import '../App.css'
import NumeroDisplay from '../components/NumeroDisplay'

function Mega(qtde = 6, numeros = []) {
    qtde = +qtde
    if (qtde < 6 || qtde > 60) {
        throw "Quantidade inválida!"
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60 + 1)

    if (!numeros.includes(numeroAleatorio)) {
        return Mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return Mega(qtde, numeros)
    }
}

function Megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(Mega(qtde))

    function renderNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }

    return (
        <div className='mega-sena'>
            <h1>Mega sena</h1>
            <div className='mega-numeros'>
                {renderNumeros()}
            </div>
            <div style={{marginTop:'10px',}}>
                <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
                <button className='btn' onClick={() => setNumeros(Mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}

export default Megasena;
