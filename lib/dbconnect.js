const mongoose = require("mongoose");
var logger = require("./logger");
const { MONGOURL, USER, PASS } = process.env;

const InitiateMongoServer = async () => {
    try {

        await mongoose.connect(MONGOURL, {
            useNewUrlParser: true,
            user: USER,
            pass: PASS
        })
            .then(() => {
                logger.info("Connected to DB !!");
            });

    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}

module.exports = InitiateMongoServer;