import { useState } from "react";
import './App.css';

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const choices = ['pedra', 'papel', 'tesoura'];

  const playGame = (userChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if (userChoice === computerChoice) {setResult ('Empate!')}
    else if (

      ( userChoice === 'pedra' && computerChoice === 'tesoura') ||
      ( userChoice === 'papel' && computerChoice === 'pedra' )|| 
      ( userChoice === 'tesoura' && computerChoice === 'papel' )

  ){
    setResult ('Voce ganhou! 👍');
    setWins(wins + 1);
  } else {
    setResult ('Voce perdeu! 👎');
    setLosses (losses + 1);
  }


};

return (
  <div className="game-container">
    <h2> Escolha uma opçao :</h2>

    <div className="choice-buttons">
      <button onClick={() => playGame('pedra')}>
        <img src={require('./pedra.png')} alt="pedra" className="choice-image" />
      </button>

      <button onClick={() => playGame('papel')}>
        <img src={require('./papel.png')} alt="papel" className="choice-image" />
      </button>

      <button onClick={() => playGame('tesoura')}>
        <img src={require('./tesoura.png')} alt="tesoura" className="choice-image" />
      </button>
    </div>
  
  {
    userChoice && computerChoice && (
      <div className="result">
      <h3> Sua escolha:</h3>
      <img src={require(`./${userChoice}.png`)} alt={userChoice} 
      className="choice-image"/>

      <h3>Escolha do computador:</h3>
      <img src={require(`./${computerChoice}.png`)} alt={computerChoice} 
      className="choice-image"/>

      <h3>{result}</h3>
      <p>Vitórias: {wins}</p>
      <p>Derrotas: {losses}</p>  
      </div>
    )}

  </div>
);
};

export default Game;