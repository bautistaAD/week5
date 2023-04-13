import needle from "needle";

// const data = {
//     age:44
// }
// const addData = {
//     stdnum: '0987654',
//     fname: 'JM',
//     lname: "Cruz",
//     age: 25
// }

// needle.post("http://localhost:3000/add-students",{
//     stdnum: addData.stdnum,
//     fname: addData.fname,
//     lname: addData.lname,
//     age: addData.age
// }, (req,res) => {
//     console.log(res.body);
// })

// needle.post("http://localhost:3000/find-students-by-post",
//     {age: data.age}, (req,res)=>{
//         console.log(res.body);
//     });

// needle.post("http://localhost:3000/delete-student-by-name", 
//     {fname: "Buck", lname: "Widdocks"} , (req, res) => {
//         console.log(res.body);
//     }
// );

// needle.post("http://localhost:3000/update-student-age",
//     {stdnum: "4938779315", age: 19}, (req, res) => {
//         console.log("successfully updated");
//     }
// );

// needle.post("http://localhost:3000/create-student",
//     {   stdnum: "25372957239",
//         fname: "Roberta",
//         lname: "Salazar",
//         age: 30
//     }, (req, res) => {
//         console.log(res.body);
//     }
// );

// needle.post('http://localhost:3000/read-data',
//     {fname: "Roberta", lname: "Salazar"}, (req, res) => {
//         console.log(res.body);
//     }
// );

needle.post('http://localhost:3000/read-data',
    {}, (req, res) => {
        console.log(res.body);
    }
);