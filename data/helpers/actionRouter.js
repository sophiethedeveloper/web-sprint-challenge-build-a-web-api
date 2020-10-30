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

router.post('/:id', (req, res) => {
    const newAction = {...req.body, project_id: req.params.id}

    Action.insert(newAction)
    .then((action) => {
        res.status(200).json(action)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

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

router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: 'An action has been deleted'})
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;