// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [player1, setPlayer1] = useState('')
//   const [player2, setPlayer2] = useState('')
//   const [input1, setInput1] = useState('')
//   const [input2, setInput2] = useState('')
  
//   const choosePlayer1 = () => {
//     setPlayer1(input1)
//     setInput1('')
//   }
//   const choosePlayer2 = () => {
//     setPlayer2(input2)
//     setInput2('')
//   }

//   return (
//     <div className="App">
//       <h1>Tic Tac Toe</h1>
//       <div>
//         <p>Player 1:</p>
//         <p>{player1}</p>
//         <input value={input1} onChange={e => setInput1(e.target.value)}></input>
//         <button onClick={choosePlayer1}>Enter</button>

//       </div>
//       <div>
//         <p>Player 2:</p>
//         <p>{player2}</p>
//         <input value={input2} onChange={e => setInput2(e.target.value)}></input>
//         <button onClick={choosePlayer2}>Enter</button>
//       </div>
//       <button>Let's Play!</button>
//     </div>
//   );
// }

// export default App;
