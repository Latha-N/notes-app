const Note=require('../models/note')

module.exports.list=(req,res)=>{
    Note.find().populate('category',['_id','name'])
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Note.findById(id).populate('category',['_id','name'])
    .then((notes)=>{
        if(notes){
            res.json(notes)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    body.noteimage=req.file.path
        const note=new Note(body)
        note.save()
            .then((notes)=>{
                res.json(notes)
            })
            .catch((err)=>{
                res.json(err)
            })
        }

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    body.noteimage=req.file.path
    Note.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((note)=>{
        console.log('note',note)
        if(note){
            res.json(note)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
        Note.findByIdAndDelete(id)
        .then((notes)=>{
            console.log('notes',notes)
            if(notes){
                res.json(notes)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
// app.get('/notes',(req,res)=>{
//     Note.find().populate('category',['_id','name'])
//     .then((notes)=>{
//         res.json(notes)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.post('/notes',(req,res)=>{
//     const body=req.body
//     const note=new Note(body)
//     note.save()
//         .then((notes)=>{
//             res.json(notes)
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// })

// app.get('/notes/:id',(req,res)=>{
//     const id=req.params.id
//     Note.findById(id).populate('category',['_id','name'])
//     .then((note)=>{
//         if(notes){
//             res.json(notes)
//         }else{
//             res.json({})
//         }
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.delete('/notes/:id',(req,res)=>{
//     const id=req.params.id
//     Note.findByIdAndDelete(id)
//     .then((notes)=>{
//         console.log('note',notes)
//         if(note){
//             res.json(notes)
//         }else{
//             res.json({})
//         }
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.put('/notes/:id',(req,res)=>{
//     const id=req.params.id
//     const body=req.body
//     Note.findByIdAndUpdate(id,body,{new:true,runValidators:true})
//     .then((notes)=>{
//         console.log('note',note)
//         if(note){
//             res.json(notes)
//         }else{
//             res.json({})
//         }
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })
