/**
 * Created by rohit on 12/9/16.
 */
var express = require('express');
var Handler = require('../handler');
var model = require('../models/hero');
var router = express.Router();

var handler = new Handler(model);
router.get("/", handler.getList);
router.get("/:id", handler.get);
router.post("/", handler.post);
router.put("/:id", handler.put);
router.delete("/:id", handler.handleDelete);

module.exports = router;