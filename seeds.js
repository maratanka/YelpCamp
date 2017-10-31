var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud' Rest", 
        image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg",
        description: "blah blah blah"
    },    
    {
        name: "Canyon Floor", 
        image: "https://farm5.staticflickr.com/4014/4675753683_fd631f254f.jpg",
        description: "blah blah blah"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
   console.log("removed campgrounds!");
       //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added a campground");
                   //create a comment
                   Comment.create(
                       {
                           author: "Homer",
                           text: "This place is great"

                           
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Created new comment");
                           }
                       });
               }
            });  
        });
    }); 
    //add a few comments
}
module.exports = seedDB;