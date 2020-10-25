const ORM = require('../config/orm.js');
const orm = require('../config/orm.js');

class Burger {
    constructor() {
        this.orm = new ORM();
    }

    ListBurgers() {
        return this.orm.selectAll();
    }

    devourBurger(id,isDevoured) {
        return this.orm.updateOne(id,isDevoured);
    }

    submitBurger(name) {
        return this.orm.insertOne(name);

    }
}

module.exports = Burger;
