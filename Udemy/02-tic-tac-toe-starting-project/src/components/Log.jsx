export default function Log({ player }) {
  return (
    // I need player name and Board position
    // I probably need to to get { initialName, symbol, isActive} out of Player.jsx and handle it on App.jsx
    <ol id="log">
      {player ? (
        <li>
          <p>{player}</p>
        </li>
      ) : (
        <></>
      )}
    </ol>
  );
}
