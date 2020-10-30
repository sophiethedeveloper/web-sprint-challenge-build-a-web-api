const express = require('express');
const router = express.Router();
const Action = require('./actionModel');

router.get('/:id', (req, res) => {
    Action.get(req.params.id)
    .then((actions) => {
        res.status(200).json(actions)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

// router.post()

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    Action.update(id, changes)
    .then((updateAction) => {
        res.status(200).json(updateAction)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})


module.exports = router;