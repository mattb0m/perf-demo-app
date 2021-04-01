const express = require('express');
const router = express.Router();

class Message {
    latency;
    constructor(lat) {
        this.latency = lat;
    }
}

function sendResponse(res, msg) {
    res.json(new Message(msg));
}

router.get('/zero', function(req, res, next) {
    sendResponse(res, 'ZERO');
});

router.get('/low', function(req, res, next) {
    setTimeout(()=>{sendResponse(res, 'LOW')}, 1000+(Math.random()*1000)|0);
});

router.get('/medium', function(req, res, next) {
    setTimeout(()=>{sendResponse(res, 'MEDIUM')}, 2000+(Math.random()*2000)|0);
});

router.get('/high', function(req, res, next) {
    setTimeout(()=>{sendResponse(res, 'HIGH')}, 5000+(Math.random()*5000)|0);
});

module.exports = router;
