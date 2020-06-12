var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use("/public/",express.static("./public/"))
app.engine("html",require("express-art-template"))
var comments=[
{name:"李四",
message:"GOOD DAY!",
dateTime:"2015-10-16"
},
{name:"李四",
message:"GOOD DAY!",
dateTime:"2015-10-16"
},
{name:"李四",
message:"GOOD DAY!",
dateTime:"2015-10-16"
},
{name:"李四",
message:"GOOD DAY!",
dateTime:"2015-10-16"
},
{name:"李四",
message:"GOOD DAY!",
dateTime:"2015-10-16"
}]
app.get("/",function(req,res){res.render("index.html",{
  comments:comments
})
})
app.get("/post",function(req,res){res.render("post.html")
})
app.post("/post",function(req,res){console.log(req.body);})



app.listen(3030,function(){console.log("running!")})
