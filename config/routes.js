const express=require('express')
const router=express.Router()
const notesController=require('../app/controller/notesController')
const categoriesController=require('../app/controller/categoriesController')
const mongoose=require('mongoose')
const path=require('path')
const bodyParser=require('body-parser')

//const Note=require('../app/models/note')

//importing the multer
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',upload.single('noteimage'),notesController.create)
router.put('/notes/:id',upload.single('noteimage'),notesController.update)
router.delete('/notes/:id',notesController.destroy)

router.get('/categories',categoriesController.list)
router.get('/categories/:id',categoriesController.show)
router.post('/categories',categoriesController.create)
router.put('/categories/:id',categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)


module.exports=router