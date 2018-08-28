const AuthenticationControllers = require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const SongsController = require('../controllers/SongsController');
const BookmarksController = require('../controllers/BookmarksController');
const HistoryController = require('../controllers/HistoryController');

const isAuthenticated = require('../policies/isAuthenticated')

module.exports = (app) => {
    app.post("/register", AuthenticationControllerPolicy.register, AuthenticationControllers.register);

    app.post("/login", AuthenticationControllers.login);
    
    app.get("/songs", SongsController.index);

    app.post("/songs", SongsController.post);

    app.get("/songs/:id", SongsController.show);

    app.put("/songs/:id", SongsController.put);

    app.get("/bookmarks",isAuthenticated, BookmarksController.index);

    app.post("/bookmarks", isAuthenticated, BookmarksController.post);

    app.delete("/bookmarks/:id",isAuthenticated, BookmarksController.delete);

    app.get("/history",isAuthenticated, HistoryController.index);

    app.post("/history",isAuthenticated, HistoryController.post);



}