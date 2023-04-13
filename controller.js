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

const deleteStudentByName = async (req, res) => {
    try{
        res.send(await Student.deleteOne({fname: req.body.fname, lname: req.body.lname}));
    }catch(err){
        res.status(500).send(err.message);
    }
}


const updateStudentAge = async (req ,res) => {
    try
    {
        let updateInfo = await Student.findOne({stdnum: req.body.stdnum});
        updateInfo.age = req.body.age;
        let data = await updateInfo.save();
        res.send(data);

    }catch(err){
        res.status(500).send(err.message);
    }
}

const createStudent = async (req, res) => {
    try
    {
        const newStudent = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        })

        let data = await newStudent.save();
        res.send(data);
    }catch(err)
    {
        res.status(500).send(err.message);
    }

}

const readData = async (req, res) => {
    try
    {
        let data = await Student.find({});
        res.send(data);
    }catch(err)
    {
        res.status(500).send(err.message);
    }
}
export {homepage, findStudent, findStudentbyPost, addStudentPost, deleteStudentByName, updateStudentAge, createStudent, readData};