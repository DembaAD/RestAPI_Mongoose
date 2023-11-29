const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    plot : String,
    genres: [String],
    runtime: Number,
    cast : Array,
    num_mflix_comments : Number,
    title : String,
    fullplot : String,
    countries: Object,
    released : Object,
    directors : Object,
    rated : String,
    awards: Object,
    lastupdated : String,
    year : Number,
    imdb:{
        rating: Number,
        numReviews : Number,
    },
    type: String,
    tomatoes:{
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number,
        },
        lastUpdated : Date
    }

});


//mongoose.Schema

module.exports = mongoose.model('Movies', MovieSchema);