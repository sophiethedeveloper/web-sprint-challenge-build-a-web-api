const express = require('express');
const router = express.Router();
const Project = require('./projectModel.js')

router.get('/:id', (req, res) => {
    Project.get(req.params.id)
    .then((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({message:'project id is not available'})
        }
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    Project.update(id, changes)
    .then((update) => {
        res.status(200).json(update)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;