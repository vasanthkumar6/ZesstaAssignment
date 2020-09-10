//importing Express Module
const exp=require("express")
//Express mini app
const ExpApp=exp.Router()
//db url
dburl = "mongodb://vasanth:vasanthdb@cluster0-shard-00-00-ihpqy.mongodb.net:27017,cluster0-shard-00-01-ihpqy.mongodb.net:27017,cluster0-shard-00-02-ihpqy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
//exporting miniExpress module
module.exports=ExpApp
//nodemailer
const nodemailer=require("nodemailer")
const moment=require("moment")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
var verify=require("../Middleware/verifytoken")
var jobId=require("../Middleware/jobId")
// var nodemailer = require('nodemailer');

//importing Mongodb
const mc=require("mongodb").MongoClient

//connecting to mongodb
var dbo;
mc.connect(dburl,{ useUnifiedTopology: true, useNewUrlParser:true},(err,adminobj)=>{
  if(err)
  {
      console.log("err in connectig db",err)
  }
  else{
       dbo=adminobj.db("InstaSmart")
     console.log("connected to db")
  }
})

//post Data
ExpApp.post("/insert",jobId,(req,res)=>{
    dbo.collection("Admin").insertOne(req.body,(err,result)=>{
        if(err)
        {
            console.log("err in posting",err)
        }
        else{
            res.send({message:'posted sucessfully'})
        }
    })
})

//Get data
ExpApp.get("/jobs",(req,res)=>{
    dbo.collection("Admin").find().toArray((err,jobsArray)=>{
        if(err)
        {
            console.log("err in posting",err)
        }
        else{
            res.send({message:jobsArray})
        }
    })
})

//put data
ExpApp.put("/update",(req,res)=>{
    dbo.collection("Admin").update({name:req.body.name},{$set:{job:req.body.job}},(err,userobj)=>{
        if(err)
        {
            console.log("err in posting",err)
        }
        else{
            res.send({message:"updated sucessfully"})
        }
    })
})

//delete data
ExpApp.delete("/deleteOne/:name",(req,res)=>{
    name=req.params.name
    dbo.collection("Admin").deleteOne({name:name},(err,result)=>{
        if(err)
        {
            console.log("err in posting",err)
        }
        else{
            res.send({message:"deleted sucessfully"})
        }
    })
})

ExpApp.post("/saveApplication",(req,res)=>{
        dbo.collection("applications").insertOne(req.body,(err,result)=>{
            console.log(req.body)
            if(err)
            {
              console.log("err in applications",err)
            }
            else{
                res.send({message:"Submitted successfully"})
            }
        })

})


ExpApp.get("/applications",(req,res)=>{
  
        dbo.collection("applications").find().toArray((err,applicationsArray)=>{
            if(err)
            {
              console.log("err in applications",err)
            }
            else{
                res.send({message:applicationsArray})
            }
        })
})


// ExpApp.get("/JobTitleData",(req,res)=>{
  
//     dbo.collection("applications").find().toArray({jobTitle:req.body},(err,TitleapplicationsArray)=>{
//         if(err)
//         {
//           console.log("err in applications",err)
//         }
//         else{
//             res.send({message:TitleapplicationsArray})
//         }
//     })
// })

// //import require modules
// const multer = require('multer');
// // const xlsxtojson = require("xlsx-to-json-lc");
// // const xlstojson = require("xls-to-json-lc");


// //multers disk storage settings
// var storage = multer.diskStorage({
    
//     destination: function (req, file, cb) {
//         console.log("vasanth")
//     cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//     var datetimestamp = Date.now();
//     cb(null, `${new Date().getTime()}_${file.originalname}`)
//     }
//    });
//    // upload middleware
//    const upload = multer({ storage: storage});
//    // convert excel to json route
//     ExpApp.post("/Applyjob",upload.single('uploadfile'),(req,res)=>{
//     // if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
//     // exceltojson = pdf;
//     // } else {
//     // exceltojson = xlstojson;
//     // }
//     // try {
//     // exceltojson({
//     // input: req.file.path, //the same path where we uploaded our file
//     // output: null, //since we don't need output.json
//     // lowerCaseHeaders:true
//     // }, function(err,result){
//     // if(err) {
//     // return res.json({error_code:1,err_desc:err, data: null});
//     // }
// //     dbo.collection("logcollection").insertMany(result, (err, data) => {
// //     // console.log(data);
// //     res.json({error_code:0,err_desc:null, data:
// //    data["ops"],"message":"log sheet uploaded sucessfully"});
// //     });
   
// //     });
// //     } catch (e){
// //     res.json({error_code:1,err_desc:"Corupted excel file"});
// //     }
//     });

ExpApp.post("/SendMail/:mail",(req,res)=>{
    // console.log("req.body",req.params.mail)
    dbo.collection("applications").findOne({email:req.params.mail},(err,UserObj)=>{
        if(err)
        {
            console.log("err in FindingMail",err)
        }
        else{
           console.log("finded userObj",UserObj)
            dbo.collection('shortlist').findOne({email:UserObj.email},(err,ShortlistObj)=>{
                console.log('ShortlistObj') 
                if(err)
                 {
                    console.log("err in find shortlisted",err)    
                 }
                 
                 else if(ShortlistObj==null)
                 {
                     console.log("shortlist",ShortlistObj)
                      dbo.collection('shortlist').insertOne(UserObj,(err,result)=>{
                         if(err)
                         {
                           console.log("posting short list",err)
                         }
                         else {
                             console.log("posted in shortlist")
                          dbo.collection('applications').deleteOne({email:UserObj.email},(err,DelShortlist)=>{
                              if(err)
                              {
                                console.log('Delete Shortlisted Candidates',err)
                              }
                              else{
                                 console.log('deleted sucessfully')
                                    res.send({message:"Candidate was Shortlisted"})
                              }
                      })    
                 }
            })
            }else{
                res.send({message:'Already shortlisted'})
            }
            
    })
            // console.log(UserObj)
            // console.log(moment().add(3, 'days').calendar())
           
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: `sidekickk${6}@gmail.com`,
                pass: 'fakegmail'
              }
            });
            
            var mailOptions = {
              from: `sidekickk${6}@gmail.com`,
              to: req.params.mail,
              subject: 'Hi',
              text: `You have shorlisted for the post of Angualr Developer
                    your interview was scheduled on ${moment().add(3, 'days').calendar()}`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
        }
                

    })
})

ExpApp.post("/rejectmail/:mail",(req,res)=>{
    console.log("req.body",req.params.mail)
    dbo.collection("applications").findOne({email:req.params.mail},(err,UserObj)=>{
        if(err)
        {
            console.log("err in FindingMail",err)
        }
        else if(UserObj==null){
          res.send({message:"Application not Existed"})
        }else
            {
            dbo.collection('applications').deleteOne({email:UserObj.email},(err,result)=>{
                if(err)
                {
                  console.log('Delete Shortlisted Candidates',err)
                }
                else{
                   console.log('deleted sucessfully')
                      res.send({message:"Application was Rejected"})
                }
        })    
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: `sidekickk${6}@gmail.com`,
                pass: 'fakegmail'
              }
            });
            
            var mailOptions = {
              from: `sidekickk${6}@gmail.com`,
              to: req.params.mail,
              subject: 'Hi',
              text: `ThankYou for your interest.
                    But we cannot move further with your Application
                    All the Best For further `
            };
            
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
        }
                

    })
})
var mid1=require("../Middleware/CreatingId")

ExpApp.post("/addAdmin",mid1,(req,res)=>{
    console.log(req.body)
    dbo.collection('AdminList').findOne({username:req.body.username},(err,adminobj)=>{
        console.log("adminobj",adminobj)
         if(err)
         {
             console.log('err in finding addAdmin',err)
         }
         else if(adminobj==null)
         {
            bcrypt.hash(req.body.password,6,(err,hashedPassword)=>{
                if(err)
                {
                 console.log("err in hashing admin password",err)
                }
                else
                {
                    console.log(hashedPassword)
                 req.body.password=hashedPassword
                   console.log("req body pasw",req.body.password)
                 dbo.collection("AdminList").insert(req.body,(err,result)=>{
                    console.log("going to save",req.body)
                    if(err)
                    {
                       console.log('err in inserting addAdmin',err)
                    }
                    else{
                       res.send({message:'New admin added succesfully'})
                    }
                })
                }
                
            })
         }
         else
         {
             res.send({message:"UserName Existed"})
         }
    })
})


ExpApp.post("/loginAdmin",(req,res)=>{
    dbo.collection("AdminList").findOne({username:req.body.username},(err,adminObj)=>{
        console.log("adminobj",adminObj)
        if(err)
        {
          console.log('err in find loginadmin',err)
        }
        else if(adminObj==null){
           res.send({message:"invalid username"})
        }
        else{
             bcrypt.compare(req.body.password,adminObj.password,(err,isMatched)=>{
                 if(err)
                 {
                   console.log('err in compare password',err)     
                 }
                 else
                 {
                   if(isMatched!==true)
                   {
                      res.send({message:"inavalid password"})
                   }
                   else
                   {
                       jwt.sign({username:req.body.username},"ishhh",{expiresIn:60},(err,signedToken)=>{
                           if(err)
                           {
                             console.log('err in token',err)
                           }
                           else{
                               console.log(signedToken)
                               res.send({message:"success",token:signedToken,username:req.body.username})
                           }
                       })
                   }
                 }
             })
        }
    })
})



ExpApp.get("/shortlist",(req,res)=>{
  
  dbo.collection("shortlist").find().toArray((err,shortlistArray)=>{
      if(err)
      {
        console.log("err in shortlist",err)
      }
      else{
          res.send({message:shortlistArray})
      }
  })
})

ExpApp.delete("/deleteApplication/:email",(req,res)=>{
  console.log(req.params)
  dbo.collection('shortlist').findOne({email:req.params.email},(err,userObject)=>{
    console.log(req.params)
    console.log(userObject)
    if(err)
    {
       console.log("Error in find of deleteApplication",err)
    }
    else if(userObject==null)
    {
        res.send("aApplication not Existed")
    }
    else{
      dbo.collection('shortlist').deleteOne({email:userObject.email},(err,result)=>{
        if(err)
        {
           console.log("Error in delete of deleteApplication",err)
        }
        else{
          res.send({message:"Application Deleted sucessfully"})
        }
      })
    }
  
  })
})

ExpApp.delete("/deleteCareerJob/:jobId",(req,res)=>{
  console.log(req.params)
  dbo.collection('Admin').findOne({jobId:req.params.jobId},(err,userObject)=>{
    console.log(userObject)
    if(err)
    {
       console.log("Error in find of deleteJob",err)
    }
    else if(userObject==null)
    {
        res.send("job not Existed")
    }
    else{
      dbo.collection('Admin').deleteOne({jobId:req.params.jobId},(err,result)=>{
        if(err)
        {
           console.log("Error in delete of deletejob",err)
        }
        else{
          res.send({message:"job Deleted sucessfully"})
        }
      })
    }
  
  })
})


ExpApp.put("/updateCareerJob",jobId,(req,res)=>{
  console.log("incomn from globalServc obj",req.body)
  dbo.collection('Admin').findOne({jobId:req.body.jobId},(err,JobObject)=>{
    console.log("update obj",JobObject)
    if(err)
    {
       console.log("Error in find of deleteJob",err)
    }
    else if(JobObject==null)
    {
        res.send("job not Existed")
    }
    else{
      console.log("checkin for update",req.body)
      dbo.collection('Admin').updateOne({jobId:req.body.jobId},{$set:{description:req.body.description,
                                         facetoface:req.body.facetoface,joblocation:req.body.joblocation,jobtitle:req.body.jobtitle,
                                         jobtype:req.body.jobtype,maxsalary:req.body.maxsalary,minsalary:req.body.minsalary,
                                         qualification:req.body.qualification,telephone:req.body.telephone,walkin:req.body.walkin,
                                         writtentest:req.body.writtentest}},(err,result)=>{
                                    
        if(err)
        {
           console.log("Error in update of updateJob",err)
        }
        else{
          res.send({message:"Updated Sucessfully"})
        }
      })
    }
  
  })
})
