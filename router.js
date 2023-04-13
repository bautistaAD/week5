import {homepage, findStudent, findStudentbyPost, addStudentPost, deleteStudentByName, updateStudentAge, createStudent} from "./controller.js";

const router = (app) => {
    app.get("/", homepage);
    app.get("/find-students", findStudent);
    app.post("/find-students-by-post", findStudentbyPost)
    app.post("/add-students", addStudentPost);
    app.post("/delete-student-by-name" , deleteStudentByName);
    app.post("/update-student-age", updateStudentAge);
    app.post("/create-student", createStudent);
}


export default router;