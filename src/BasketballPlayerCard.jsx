import React from "react";

const  BasketballPlayerCard = function({name, image, position, stats}) {
    return (
        <div className="player_card">
            <img src={image} alt={name} className="player_img" />
            <h2 className="player_name">{name}</h2>
            <p className="player_position">Position: {position}</p>
            <div className="player_stats">
                <p>Points per Game: {stats.pointsPerGame}</p>
                <p>Assists per Game: {stats.assistsPerGame}</p>
                <p>Rebounds per Game: {stats.reboundsPerGame}</p>
            </div>
        </div>
    )
}

export default BasketballPlayerCard;