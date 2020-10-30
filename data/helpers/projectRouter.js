const express = require('express');
const { all } = require('./actionRouter.js');
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

router.post('/', (req, res) => {
    Project.insert(req.body)
    .then((newProject) => {
        res.status(200).json(newProject)
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

router.delete('/:id', (req, res) => {
    Project.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: 'A project has been deleted!'})
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

router.get('/:id/actions', (req, res) => {
    Project.getProjectActions(req.params.id)
    .then((allActions) => {
        res.status(200).json(allActions)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})


module.exports = router;