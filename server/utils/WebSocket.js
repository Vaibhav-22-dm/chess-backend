
// models
import GameModel from '../models/Game.js';

function connection(socket) {

        socket.on('play-game', async ( { gameId, updated_game } ) => {
            try {
                console.log("Inside Server: ", gameId, updated_game)
                await GameModel.updateGameById(gameId, updated_game);
                console.log("Updated game in db")
                socket.to(gameId).emit("play-game", { gameId: gameId, updated_game: updated_game });
            } catch (error) {
                console.log(error)
             }
        });

        socket.on('join-game', async ( { gameId }) => {
            try{
                socket.join(gameId);
            }   
            catch(error){
                console.log(error);
            }
        })
    }

export default connection;
