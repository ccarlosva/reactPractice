export default function Log({ turnLogs }) {
  const logArr = [];
  for (let log of turnLogs) {
    const { square, player } = log;
    logArr.push(log);
  }

  return (
    // I probably need to to get { initialName, symbol, isActive} out of Player.jsx and handle it on App.jsx
    <ol id="log">
      {/* logArr.map((log, index) => (...)): This is using the map function to iterate over each item in the logArr array. 
        For each item, it calls the provided function (.map) with two arguments: the current item (log) and its index (index). */}
      {logArr.map((log, index) => (
        <li key={index}>
          <p>
            Player {log.player} placed a symbol at row {log.square.row}, column
            {log.square.col}
          </p>
        </li>
      ))}
    </ol>
  );
}
