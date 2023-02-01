const phrases = require("./data")

class NgaPaw{
    constructor(){
        this.phrases = phrases;
    }

    sayRandom(){
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random]
    }
    ///Tells the user what is the best programming language.
    bestLanguage(){
        return "Java";
    }
}

module.exports = NgaPaw;
