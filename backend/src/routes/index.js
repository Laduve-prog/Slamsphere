module.exports = (app) => {
    require("./productRoutes")(app);
    require("./authRoutes")(app);
    require("./userRoutes")(app);
    require("./cardsRoutes")(app);
};