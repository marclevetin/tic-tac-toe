
// function Board(props) {
//     const [squares, setSquares] = useState([]);
//     const [xIsNext, setxIsNext] = useState(true);

//     useEffect(() => {
//         setSquares(Array(9).fill(null));
//     }, []);

//     const handleClick = index => {
//         const workingSquares = squares.slice();

//         workingSquares[index] = xIsNext ? 'X' : 'O';

//         setSquares(workingSquares);
//         setxIsNext(!xIsNext);
//     }

//     const calculateWinner = squares => {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//           ];
//           for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
//             if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//               return squares[a];
//             }
//           }
//           return null;
//     }

//     const winner = calculateWinner(squares);
//     const status = winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;
//     const allTheSquares = squares.map((square, index) =>
//         <Square
//             key={`square${index}`}
//             value={squares[index]}
//             onClick={() => handleClick(index)}
//         />
//     );

//     return (
//         <div>
//             <div className="status">{status}</div>
//             <div className="board-marc">
//                 {allTheSquares}
//             </div>
//         </div>
//     );
// }
