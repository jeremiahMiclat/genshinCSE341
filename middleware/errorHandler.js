// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    console.log(error.name);

    if (error.name === "CastError") {
        return res.status(500).send("Check input data type or count");
    }

    return res.status(500).send(error.message);
};

module.exports = errorHandler;