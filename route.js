const express = require("express");
const route = new express.Router();
const db = require("./db");

//for database creation
route.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE node_mysql";
  db.query(sql, (err, result) => {
    if (err) throw new Error(err);
    res.send("created");
  });
});

route.get("/financialtransaction", (req, res) => {
  try {
    let sql = `select * from financial_transaction where pran_id ='${req.body.pran}' `;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result: sql });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

//search result
route.get("/searchresult", (req, res) => {
  try {
    let sql = `select pran_id from subscriber_details where pran_id like '${req.body.pran}%' limit 3`;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result: sql });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

route.get("/subscriberdetails", (req, res) => {
  try {
    let sql = `select * from subscribers_details where pran_id ='${req.body.pran}'`;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result: sql });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

route.get("/grievancesdetails", (req, res) => {
  try {
    let sql = `select * from grievances where pran_id ='${req.body.pran}'`;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result: sql });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

route.get("/subscribermodification", (req, res) => {
  try {
    let sql = `select * from subscriber_modification where pran_id ='${req.body.pran}'`;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result: sql });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

route.get("/commercialtransactions", (req, res) => {
  try {
    let sql = `select * from commercial_transaction where pran_id ='${req.body.pran}'`;
    db.query(sql, (err, result) => {
      if (err) throw new Error(err);
      res.send({ result });
    });
  } catch (e) {
    res.send({ result: "Not Found" });
  }
});

module.exports = route;
