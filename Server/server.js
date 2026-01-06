import express from "express";
import connectDB from "./Dbconfig/db.js";
import router from "./router/router.js";

const app = express();

app.use("/api/student/",router);

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
