const controller = require('../controllers/profile.controller');

var express = require("express");   
var router = express.Router();

router.get("/get/all", controller.getAll);
router.post("/post/create_profile", controller.createProfile);