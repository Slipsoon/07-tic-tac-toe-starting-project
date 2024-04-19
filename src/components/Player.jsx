import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function changeIsEditingState() {
    setIsEditing((editing) => !editing);
  }

  function getPlayerNameValue(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onChange={getPlayerNameValue} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeIsEditingState}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
