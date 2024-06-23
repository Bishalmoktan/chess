"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const messages_1 = require("./messages");
const Game_1 = require("./Game");
class GameManager {
    constructor() {
        this.pendingUser = null;
        this.users = [];
        this.games = [];
    }
    addUser(user) {
        var _a;
        (_a = this.users) === null || _a === void 0 ? void 0 : _a.push(user);
        this.addHandler(user);
    }
    removeUser(socket) {
        var _a;
        // remove user 
        this.users = (_a = this.users) === null || _a === void 0 ? void 0 : _a.filter(user => user != socket);
    }
    addHandler(socket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if (message.type == messages_1.INIT_GAME) {
                if (this.pendingUser) {
                    const game = new Game_1.Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    this.pendingUser = socket;
                }
            }
            if (message.type == messages_1.MOVE) {
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if (game) {
                    game.makeMove(socket, message.move);
                }
            }
        });
    }
}
exports.GameManager = GameManager;
