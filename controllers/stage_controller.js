//DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band } = db
const { Op } = require('sequelize')

// FIND ALL BANDS
stages.get('/', async (req, res) => {
    try{
        const foundStages = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundStages)
    } catch (error){
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND
stages.get('/:id', async (req, res) => {
    try {
        const foundStages = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        if(!foundStage){
            res.status(404).json("Stage Not Found.")
        } else{
        res.status(200).json(foundStage)}
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BAND
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//EXPORT
module.exports = stages