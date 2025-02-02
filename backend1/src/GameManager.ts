import { WebSocket } from "ws";
import { INIT_GAME, MOVE } from "./messages";
import { Game } from "./Game";


export class GameManager {
    private games: Game[];
    private users : WebSocket[];
    private pendingUser: WebSocket | null;

    constructor(){
        this.pendingUser = null;
        this.users = [];
        this.games = []
    }

    addUser(user: WebSocket){
        this.users?.push(user);
        this.addHandler(user);
    }

    removeUser(socket: WebSocket){
        // remove user 
        this.users = this.users?.filter(user => user != socket)
    }

    private addHandler(socket: WebSocket){
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if(message.type == INIT_GAME){
                if(this.pendingUser){
                    const game = new Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                } else {
                    this.pendingUser = socket;
                } 
            }

            if(message.type == MOVE){
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if(game){
                    game.makeMove(socket, message.move);
                }
            }
        })
    }
}