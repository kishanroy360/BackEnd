const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var movieSchema = new mongoose.Schema({
    name: String,
    release: Number,
    rating: Number
});

var Movie = mongoose.model("Movie", movieSchema);

var avengers = new Movie({
    name : "AvengersEndGame",
    release: 2019,
    rating: 10
});

avengers.save(function(err,movie){
    if(err){
        console.log("SOMETHING WENT WRONG!");
    }
    else{
        console.log("WE JUST SAVED TO DATABASE!");
        console.log(movie);
    }
});
