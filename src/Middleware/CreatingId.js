const mc=require("mongodb")
//db url
dburl = "mongodb://vasanth:vasanthdb@cluster0-shard-00-00-ihpqy.mongodb.net:27017,cluster0-shard-00-01-ihpqy.mongodb.net:27017,cluster0-shard-00-02-ihpqy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"

var dbo;
mc.connect(dburl,{useUnifiedTopology: true,useNewUrlParser:true},(err,clientobj)=>{
 if(err)
 {
   console.log("err in connecting Tdmiddleware db",err)
 }
 else{
     dbo=clientobj.db("InstaSmart")
     console.log("connected to creating AdminID middleware db")
 }
})
var mid1=(req,res,next)=>{
    console.log("middleware is workining")
dbo.collection("ID").updateOne({name:'Admin'},{$inc:{number:1}},(err,result)=>{
      if(err)
      {
          console.log("error in reading data",err)
      }
      else{
        dbo.collection("ID").find().toArray((err,dataArray)=>{
            console.log("vasanth");
            if(err)
            {
              console.log("err in find id",err)
            }
            else{
                console.log("mid data",dataArray);
                req.body.adminid=dataArray[0].name+dataArray[0].number;
                next();
            }
        })
      }
})

}

module.exports=mid1