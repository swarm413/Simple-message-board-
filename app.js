var http=require("http");
var fs=require("fs");
var template=require("art-template");
var url=require("url");
var comments=[
{
name:"李四",
message:"good today",
dateTime:"2015-10-16"
},
{
name:"李四",
message:"good today",
dateTime:"2015-10-16"
},{
name:"李四",
message:"good today",
dateTime:"2015-10-16"
},{
name:"李四",
message:"good today",
dateTime:"2015-10-16"
},{
name:"李四",
message:"good today",
dateTime:"2015-10-16"
}
]
http.createServer(function(req,res){
  var parseObj=url.parse(req.url,true)
  var pathname=parseObj.pathname
  if(pathname=="/"){
    fs.readFile("./views/index.html",function(err,data){
      if(err){
        return res.end("404 Not Found.")
      }
      var htmlStr = template.render(data.toString(),{
        comments:comments
      })
      res.end(htmlStr)
    })
  }else if(pathname=="/post"){
    fs.readFile("./views/post.html",function(err,data){
        if(err){
          return res.end("404 Not Found.")
        }
        res.end(data)
      })
  }
  else if(pathname=="/public/css/main.css"){
    fs.readFile("./public/css/main.css",function(err,data){
      console.log(url);
        if(err){
          return res.end("404 Not Found.")
        }
        res.end(data)
      })
  }
  else if(pathname=="/pl"){
    res.statusCode=302;res.setHeader("Location","/");
var comment=parseObj.query;
/*获取时间*/
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/*获取时间*/
var myDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
comment.dateTime=myDate;
comments.unshift(comment);//这点没看懂！ 还有一个public我是没看懂我是路径出现了什么问题吗？
console.log("得到信息了！",parseObj.query);
res.end();
  }
  else if(pathname=="/404"){
    fs.readFile("./views/post.html",function(err,data){
        if(err){
          return res.end("404 Not Found.")
        }
        res.end(data)
      })
  }
  else{
    fs.readFile("./views/404.html",function(err,data){
        if(err){
          return res.end("404 Not Found.")
        }
        res.end(data)
      })
  }
}).listen(3030,function(){
  console.log("running!")
})
