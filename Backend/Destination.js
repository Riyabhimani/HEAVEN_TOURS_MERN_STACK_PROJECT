mongoose=require('mongoose');
tourschema=require('./tourschema');
bodyParser=require('body-parser');
const cors = require('cors');

const connectionString = 'mongodb+srv://Riya_Bhimani:Riyabhimani2005@cluster0.zuzrz.mongodb.net/HevenTours';

mongoose.connect(connectionString).then(() => {
    express=require('express');
    app=express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded());

    // get all destinations
    app.get('/Tours',async(req,res)=>{
        const ans=await tourschema.find();
        res.send(ans);
    });

    // get single destination (by id)
    app.get('/Tours/:Id', async (req, res) => {
        const ans = await tourschema.findOne({Id : req.params.Id});
        res.send(ans);
    });

    // add new destination (Post)
    app.post('/Tours', async (req, res) => {
        const newTour = new tourschema({...req.body});
        const ans = await newTour.save();
        res.send(ans);
    });

    // update a destination (Put)
    app.put('/Tours/:Id', async (req, res) => {
        const updatedTour = await tourschema.findOne({Id : req.params.Id});
        res.send(updatedTour);
    });

    // update a destination (Patch)
    app.patch('/Tours/:Id', async (req, res) => {
        const updatedTour = await tourschema.findOne({Id : req.params.Id} , req.body)
        res.send(updatedTour);
    });

    // delete a destination (Delete)
    app.delete('/Tours/:Id', async (req, res) => {
        const ans = await tourschema.deleteOne({Id : req.params.Id});
        res.send(ans);
    });

    // start the server on port 8000
    app.listen('8000',()=>{
        console.log("server started @8000");
    });

});