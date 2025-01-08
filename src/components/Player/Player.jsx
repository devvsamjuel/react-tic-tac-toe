import PropTypes from "prop-types";
import { useState } from "react";
import "./Player.css";

export default function Player({ initialPlayerName, symbol }) {
    const [playerName, setPlayerName] = useState(initialPlayerName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((isEditing) => isEditing ? false : true);
    };

    const handlePlayerNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    let editablePlayerName = (
        <span className="player-name">{playerName}</span>
    );

    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handlePlayerNameChange} />
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}

// Prop validation using PropTypes
Player.propTypes = {
    initialPlayerName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};
