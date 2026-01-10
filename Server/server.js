import express from "express";
import connectDB from "./Config/db.js";
import router from "./router/student.router.js";
import Adminrouts from "./router/Aamin.router.js";
import cors from 'cors'
const app = express();
app.use(cors({
  origin:"http://localhost:5173",

}));
app.use(express.json());

app.use("/api/student/",router);

app.use("/api/admin/",Adminrouts);


connectDB(); 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
