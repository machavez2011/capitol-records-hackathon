const router = require("express").Router();
const userService = require("../services/user.service");
const responses = require("../models/responses");
const emailService = require("../services/email.service");
const dotenv = require("dotenv");
const crypto = require("crypto")

module.exports = router;

router.get("/", function(req, res) {
  userService
    .readAll()
    .then(users => {
      const responseModel = new responses.ItemsResponse();
      responseModel.items = users;
      res.json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
});

router.post("/", function(req, res) {
  userService
    .register(req.body)
    .then(id => {
      responseModel = new responses.ItemResponse();
      responseModel.item = id;
      console.log("data has been stored!");
      let tokenNumber = crypto.randomBytes(32).toString('hex');
      const msg = {
        to: "hyundo@mailinator.com",
        from: "no-reply@meetNride.com",
        subject: "Please verify your account",
        text: "Please click this link to verify your e-mail",
        html: "<strong>Click this to verify your e-mail</strong>"
      };
      emailService.sendEmail(msg);
    })
    .catch(err => console.log(err));
});

router.get("/:id([0-9a-fA-F]{24})", function(req, res) {
  userService
    .readById(req.params.id)
    .then(user => {
      const responseModel = new responses.ItemResponse();
      responseModel.item = user;
      res.json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
});

router.put("/:id([0-9a-fA-F]{24})", function(req, res) {
  req.body.updateDate = new Date();
  userService
    .update(req.params.id, req.body)
    .then(user => {
      const responseModel = new responses.SuccessResponse();
      res.status(200).json(responseModel);
      console.log("data updated");
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
});

router.delete("/:id([0-9a-fA-F]{24})", function(req, res) {
  userService
    .delete(req.params.id)
    .then(() => {
      const responseModel = new responses.SuccessResponse();
      res.status(200).json(responseModel);
      console.log("date deleted");
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(new responses.ErrorResponse(err));
    });
});
