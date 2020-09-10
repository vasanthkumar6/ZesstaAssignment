const exp=require("express")
const app=exp()
port=4000
app.listen(process.env.PORT || port,()=>{console.log("app is running on port no 4000......")})


app.use(exp.json())


const adminApp=require("./src/APiS/admin")

app.use("/admin",adminApp)

//path
const path=require("path")

app.use(exp.static(path.join(__dirname,'./dist/collegeAdmission')))







