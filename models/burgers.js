const mysql = require('../config/connection');
const { response } = require('express');

exports.insertBurger = async (user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO burgers SET ?`, user_obj);
    return data;
}

exports.getBurgersAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM burgers`);
    return data; 
}

exports.updateburger = async (user_obj) => {
    console.log(user_obj);
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE burgers SET ? WHERE id = ?`, [user_obj, user_obj.id]);
    return data;
}