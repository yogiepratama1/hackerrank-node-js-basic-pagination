const express = require("express");
const router = express.Router();
const recipes = require("../recipes.json");

function pagination(model) {
  return function (req, res, next) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    let index, offSet;

    if (page == 1 || page <= 0) {
      index = 0;
      offSet = limit;
    } else if (page > model.length) {
      index = page - 1;
      offSet = model.length;
    } else {
      index = page * limit - limit;
      offSet = index + limit;
    }
    const results = model.slice(index, offSet);
    res.result = results;

    next();
  };
}

router.get("/", pagination(recipes), (req, res) => {
  res.json(res.result);
});

module.exports = router;
