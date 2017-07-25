var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground")
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Campground.create(
//     {
//         name:"Crazy Frogs", 
//         image:"https://static.pexels.com/photos/27865/pexels-photo-27865.jpg",
//         description: "There are many crazy, adorable frogs nearby!"
//     }, 
    
//         function(err, campground){
//             if(err){
//                 console.log(err)
//         }   else {
//                 console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });
    
app.get("/campgrounds", function(req, res){
       res.render("landing");
});    
 
//INDEX - show all campgrounds 
    
app.get("/", function(req, res){
    //GET all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
            res.render("index", {campgrounds:allCampgrounds});
       }
    });
 
});

//CREATE - add new campgrounds

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/"); 
        }
    });
});

//NEW - show form to create new campgrounds

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});


//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err)
       } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});  
       }
    });
  
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started"); 
});