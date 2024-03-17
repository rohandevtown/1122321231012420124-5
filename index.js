const express = require("express");
const {users} = require("./data/users.json")

const dotenv = require('dotenv')

// Database connection
const DbConnection = require("./databaseConnection")

const userRouter = require("./routes/users")
const booksRouter = require("./routes/books")

dotenv.config();

const app = express();

DbConnection();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})


app.use("/users", userRouter);
app.use("/books",booksRouter)

app.get("*", (req, res)=>{
    res.status(200).json({
        message: "This route does not exist"
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
})