import express from "express";
import datebase from "./datebase.js"/* Conection Import MongoDB */
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(express.json());

//Routes
import taskRoutes from "./routes/task.routes.js";
app.use(taskRoutes);



//Static Files
/* app.use(express.static(path.join(__dirname,('public')))); */

//Config Server
app.listen(app.get('port'), () => {
    console.log("Server Run in Port");
});