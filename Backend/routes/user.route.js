const controller = require("../controllers/user.controller");
// const auth = require("../middleware/authenticate.middleware");

var express = require("express");

var router = express.Router();

router.get("/get/all", controller.getAll);
router.post("/post/create_user", controller.createUser);

module.exports = router;