import mongoose from "mongoose";
await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
{useNewUrlParser: true, useUnifiedTopology: true});

const Student = mongoose.model("students", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});



const homepage = (req,res) => {
    res.send("welcome to homepage");
}

const findStudent = async (req,res) => {
    res.send(await Student.find({}));
}

const findStudentbyPost = async (req,res) => {
    res.send(await Student.find({age: req.body.age}));
}

const addStudentPost = async (req,res) => {
    try{
        const student = new Student ({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        });
        
        const result = await student.save();
        res.send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

export {homepage, findStudent, findStudentbyPost, addStudentPost};