import { useState } from "react";

interface Player {
    name: string;
}

interface Game {
    id: number;
    player: Player;
}

const Exercise1: React.FC = () => {
    const [game, setGame] = useState<Game>({
        id: 1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
        setGame({
            ...game,
            player: {
                ...game.player,
                name: 'Aaron',
            },
        });
    };

    return (
        <div>
            <p>Player Name: {game.player.name}</p>
            <button onClick={handleClick}>Update Name</button>
        </div>
    );
}

export default Exercise1;

