import React from 'react';
import './style.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpeg';


function Card (){
    return(
       
        <div class="card-container">
            <div className="card">
            <img src={img1} />
            <p className="titulo">
                COMPETÊNCIA TRANSVERSAL
            <p>LÓGICA DE PROGRAMAÇÃO </p>
                </p>

            <p>Conhecer os princípios básicos da lógica de programação para poder criar sites, desenvolver games e programar robôs.</p>

            <ul>
            <li> Duração: 14 horas</li>
            <li> Preço: Gratuito</li>
            </ul>
            </div>

            <div className="card">
            <img src={img2} />
            <p class="titulo">
            DESVENDANDO A BLOCKCHAIN</p>

            <p> O curso tem por objetivo apresentar a tecnologia da Blockchain, propiciando ao aluno a obtenção da base conceitual desta tecnologia.</p>

            <ul>
            <li> Duração: 20 horas</li>
            <li> Preço: Gratuito</li>
            </ul>
            </div>

            <div className="card">
            <img src={img3} />
            <p class="titulo">
            TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO </p>

            <p>O curso tem como objetivo apresentar os principais temas relacionados à infraestrutura de TI, serviços de redes, software, hardware, normas e padrões técnicos.</p>

            <ul>
            <li> Duração: 14 horas</li>
            <li> Preço: Gratuito</li>
            </ul>
            </div>

        </div>
        
    );
}

export default Card;