const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const { Router } = require("express");
const characterRouter = require("./characterRouter");

const router = Router();

router.use("/characters", characterRouter);

router.get("/login", (req, res) => {
  login(req, res);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;
