const { Router } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const Movie = require('../models/Movie');
const router = express.Router();

//Renvoie le titre tout les elements de la collection 
router.get('/showAllByTitle', async (req,res) => {
    try{
        const posts = await Movie.find({}, {"title":1}).sort('title');
        res.json(posts);

    }catch(err){
            res.json({message:err});
        }
});
router.get('/showAllByTitle/:num', async (req,res) => {
    try{
        const posts = await Movie.find({},{"title":1}).sort('title').limit(req.params.num);
        res.json(posts);

    }catch(err){
            res.json({message:err});
        }
});
router.get('/showAll', async (req,res) => {
    try{
        const posts = await Movie.find();
        res.json(posts);

    }catch(err){
            res.json({message:err});
        }
});

//Renvoie tous les elements de la collection limités par le parametre 'num'
router.get('/showAll/:num', async (req,res) => {
    try{
        const posts = await Movie.find().limit(req.params.num);
        res.json(posts);

    }catch(err){
            res.json({message:err});
        }
});

//Renvoie de l'element par ID
router.get('/findByID/:ID', async(req,res) => {
    try{
        const fileToFind = await Movie.findById(req.params.ID);
        res.json(fileToFind);
    }catch(err){
        res.json({ message : err});
    }
})
//Recherche d'un film par titre
router.get('/findByTitle/:titre', async(req,res) => {
    try{
        const fileToFind = await Movie.find({'title': req.params.titre});
        res.json(fileToFind);
    }catch(err){
        res.json({ message : err});
    }
})
//Renvoie des elements limites par ordre croissant ou decroissant
router.get('/showAll/:num/:sortedBy', async (req,res) => {
    try{
        const posts = await Movie.find().limit(req.params.num).sort({title:req.params.sortedBy});
        res.json(posts);
    }catch(err){
            res.json({message:err});
        }
});
//Ajout film
router.post('/ajoutFilm', async(req,res, next) =>{ 
    const movie = new Movie({
        plot: req.body.plot,
        genres: req.body.genres,
        runtime: req.body.runtime,
        cast : req.body.cast,
        num_mflix_comments : req.body.num_mflix_comments,
        title : req.body.title,
        fullplot : req.body.fullplot,
        rated : req.body.rated,
        awards: req.body.awards,
        lastupdated : req.body.lastupdated,
    });try{
        const savedPost = await movie.save();
        res.json(savedPost);
        }catch(err){
            res.json({ message: err});
        }

})
//delete
router.delete('/supprime/:postID', async (req,res) => {
    try{
        const removedPost = await Movie.deleteOne({_id : req.params.postID});
        res.json(removedPost);
    }catch(err){
        res.json({ message : err});
    }
})
//count Documents
router.get('/countDocuments', async (req,res) => {
    try{
        const removedPost = await Movie.countDocuments();
        res.json(removedPost);
    }catch(err){
        res.json({ message : err});
    }
})

module.exports = router;