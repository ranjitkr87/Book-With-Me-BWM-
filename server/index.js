const express =require ("express");
const mongoose=require ("mongoose");
const config=require("./config/dev");
const rental=require("./models/rental");
const FakeDb=require("./models/fake-db");
const rentalsRoutes=require("./routes/rentals")

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb= new FakeDb();
    fakeDb.seeDb();
});
const app=express();

app.use("/api/v1/rentals", rentalsRoutes);
const PORT= process.env.PORT || 3000;
app.listen(
    PORT, function(){
        console.log("Hi");
    }
)