const express = require("express");
const router = express.Router();
const { Question } = require('./src/db/models')

router.get('*', async (req,res)=> {
    try {
        const questions = await Question.findAll();
        res.json(questions);
    }catch (error){
        res.status(500).json({message: 'Ошибка получения вопросов'})
    }
})

module.exports = router;