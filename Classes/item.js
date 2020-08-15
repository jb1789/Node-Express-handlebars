const burgers = require('../models/burgers');

class Item {

    constructor(user_obj){
        this._user= user_obj;
    }

    toLiteral(){
        return this._user;
    }

    async insertToBurgerDB(){
        const result = await burgers.insertBurger(this._user);
        this._user = result;
        console.log("insertToBurgerDB", result);
    }

    async populateAllBurgers(){
        const result = await burgers.getBurgersAll();
        this._user = result;
        console.log("populateAllBurgers", result);
    }

    async updateBurger(){
        const result = await burgers.updateburger(this._user);
        this._user = result;
        console.log("updateBurger", result);
    }
}

module.exports = Item;
