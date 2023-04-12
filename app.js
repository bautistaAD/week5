import mongoose from "mongoose";

await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect("mongodb://localhost:27017/ICS.Students");

const Student = mongoose.model("students", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

// const newStudent = new Student({
//     stdnum: '1234567',
//     fname: 'Juan',
//     lname: "Dela Cruz",
//     age: 20
// })


// let data = await newStudent.save();


let data = await Student.find({fname: "Ellie"})

//UPDATE        
// let updateNewStudent =  await Student.findOne({stdnum: "1234567"});
// updateNewStudent.age = 25;
// let data = await updateNewStudent.save();

// let updateNewStudent = await Student.updateMany(
//         {age: 17},
//         {$set: {fname: "John"}}
// );

// console.log(updateNewStudent);

// let data = await Student.deleteMany({age: {$gt: 17 , $lt: 21}});

console.log(data);
process.exit();

