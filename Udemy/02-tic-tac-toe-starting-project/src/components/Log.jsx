export default function Log({ turns }) {
  const logArr = [];
  for (let turn of turns) {
    const { square, player } = turn;
    logArr.push(turn);
  }

  return (
    // I probably need to to get { initialName, symbol, isActive} out of Player.jsx and handle it on App.jsx
    <ol id="log">
      {/* logArr.map((log, index) => (...)): This is using the map function to iterate over each item in the logArr array. 
        For each item, it calls the provided function (.map) with two arguments: the current item (log) and its index (index). */}
      {logArr.map((turn, index) => (
        <li key={index}>
          <p>
            Player {turn.player} placed a symbol at coordinates{" "}
            {turn.square.row}, {turn.square.col}
          </p>
        </li>
      ))}
    </ol>
  );
}
