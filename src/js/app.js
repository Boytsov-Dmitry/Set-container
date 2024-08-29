export default class Team {
    constructor() {
        this.members = new Set();
    };
    
    add(character) {
        if(this.members.has(character)) {
            throw new Error("Такой персонаж уже существует")
        };
        this.members.add(character)
    };
    
    addAll(...players) {
        for(let player of players) {
            if(!this.members.has(player)) {
                this.members.add(player)
            };
        };
    };
    
    toArray() {
        return Array.from(this.members)
    };
};




