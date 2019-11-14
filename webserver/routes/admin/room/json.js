var express = require('express');
var router = express.Router();

var room = require('../../../model/room');

/* GET home page. */
router.post('/getRoomList', function (_req, _res) {
    room.getRoomList(_req.body, function (_result) {
        _res.send(_result);
    })
});

module.exports = router;