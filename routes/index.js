var express = require('express');
const { addContactsToDb } = require('../handler/dbHandler');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express');
});
router.post('/saveContacts', addContactsToDb)
module.exports = router;
