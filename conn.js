const mongoose =  require('mongoose');
mongoose.connect("mongodb://localhost:27017/finalProject", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    console.log("connection successful");
}).catch((error)=>{
    console.log(`The error occured  ${error}`);
})
