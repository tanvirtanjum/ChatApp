// Importing Created Modules
const service = require("../services/user.service");

exports.getAll = (req, res, next) => {
    console.log("Get All Users Request Received.");
    const data = {};

    service.getAll(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: false, data: "Bad Request. {{--> "+error+" <--}}" });
        } else {
            if (results.length > 0) {
                return res.status(200).send(results);
            } else {
                return res.status(204).send({ success: false, data: "No Data Found." });
            }
        }
    });
};

exports.createUser = (req, res, next) => {
    const data = req.body;

    service.createUser(data, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: false, data: "Bad Request. {{--> "+error+" <--}}" });
        } else {
            return res.status(201).send(results);
        }
    });
};