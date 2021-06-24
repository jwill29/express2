const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;    res.end('PUT operation not supported on /promotion');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

// localhost:3000/promotions/Id
promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Getting promotion ID: ${req.params.promotionId}`);
})
.post((req, res) => {
    res.end(`Will add the promotion ID: ${req.params.promotionId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions/:promotionsId');
})
.delete((req, res) => {
    res.end(`Deleting promotion ID: ${req.params.promotionId}`);
});

module.exports = promotionRouter;