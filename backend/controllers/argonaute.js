const dotenv = require("dotenv").config();
const { Sequelize } = require("sequelize");
const model = require("../models/Argonaute");

exports.argonaute = (req, res, next) => {

      const argonaute = new model.Argonaute({
        name: req.body.name,
      });
      argonaute
        .save()
        .then(() => {
          res.status(200).send({ message: "Argonaute créé !" });
        })
        .catch((error) => {
          res.status(400).send({ error });
        });
    };

exports.argonautes = (req, res, next) => {
  model.Argonaute.findAll({
    attributes: [
      "id",
      "name",
    ],
  })
    .then((argonaute) => res.status(200).json(argonaute))
    .catch((error) => res.status(400).json({ error }));
};