// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
    console.log(error.name);

    if (error.name === "CastError") {
        return res.status(500).send("Check input or id count");
    }

    return res.status(500).send("Something went wrong");
};

module.exports = errorHandler;