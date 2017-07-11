var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name:"Green Meadow", image:"http://www.verticepatagonia.com/sites/default/files/styles/full-width-preface-header-wide/public/dickson-camping-01.jpg?itok=U3vPocaJ"},
    {name:"Yellow Sun", image:"https://www.camping.ch/gfx/campsites/1.053.bild1.jpg"},
    {name:"Crazy Frogs", image:"https://static.pexels.com/photos/27865/pexels-photo-27865.jpg"},
    {name:"Green Meadow", image:"http://www.verticepatagonia.com/sites/default/files/styles/full-width-preface-header-wide/public/dickson-camping-01.jpg?itok=U3vPocaJ"},
    {name:"Yellow Sun", image:"https://www.camping.ch/gfx/campsites/1.053.bild1.jpg"},
    {name:"Crazy Frogs", image:"https://static.pexels.com/photos/27865/pexels-photo-27865.jpg"}
];

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campground page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started"); 
});