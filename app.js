var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
   var campgrounds = [
       {name:"Green Meadow", image:"https://www.backpacker.com/.image/t_share/MTQ0OTEzOTMwMTIzNDg2OTQ5/nighttent_sblack_craterlake5323_750x400.jpg"},
       {name:"Yellow Sun", image:"https://www.camping.ch/gfx/campsites/1.053.bild1.jpg"},
       {name:"Crazy Frogs", image:"https://static.pexels.com/photos/27865/pexels-photo-27865.jpg"}
    ] 
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started"); 
});