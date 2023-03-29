import {homepage, findStudent, findStudentbyPost, addStudentPost} from "./controller.js";

const router = (app) => {
    app.get("/", homepage);
    app.get("/find-students", findStudent);
    app.post("/find-students-by-post", findStudentbyPost)
    app.post("/add-students", addStudentPost);
}



export default router;