const router = require('express').Router()
const {index} = require("../controller/indexController")

router.get('/', index);

module.exports = router;