const Item = require('../Classes/item');

exports.createBurger = async (request, response) => {
    console.log("Controller CR was called", request.body);
    const item = new Item({
        burger_name:request.body.burger_name,
        devoured:request.body.devoured,
    });
    await item.insertToBurgerDB();
    response.json(item.toLiteral());
}

exports.getAllBurgers = async (request, response) => {
    const item = new Item ();
    await item.populateAllBurgers();
    response.json(item.toLiteral());
}


exports.updateBurger = async (request, response) => {
    console.log(request.body);
    const item = new Item({
        id:request.body.id,
        devoured:request.body.devoured,
    });
    console.log(item);
    await item.updateBurger();
    response.json(item.toLiteral());
}