const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL)
.then(()=>{
    console.log("___MongoDB Atlas Connected");
})
.catch(err=>{
    console.log("___MongoDB Not Connected"+err);
})
