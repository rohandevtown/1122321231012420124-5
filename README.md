## Book Record Management System

This is a book record mananagment API Backend application

### Routes and Endpoints

### /users

POST: Create a New User
GET: Get all lists of users

### /users/{id}

GET: Get a user by ID
PUT: Update a user by Id
DELETE: Delete a user by ID (chk if he/she still have an issued book) && (is there any fine to be collected from the student)

### /users/subscription-deails/{id}

GET: Get user subscription details

1. Date of subscription
2. Valid till
3. Fine if any

### /books

GET: Get all books
POST: Create/Add a new book

### /books/{id}

GET: Get a book by id
PUT: UPdate a book by its id

### /books/issued

GET: Get all issued books

### /books/issued/withFine

GET: Get all issued books with fine

#### Subscription Types:

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

##### Commands

    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev

    >> npm run dev

M: MongoDB

MERN Stack

## MongoDB:

    >> npm i mongoose
    >> npm install mongodb
    >> npm i dotenv

    mongodb+srv://rohankinnal:Ltn2zL3lzQoHgzV4@cluster0.mszpfh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    mongodb+srv://rohankinnal:rohankinnal@cluster0.mszpfh2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

## MVC Architecture

    >> M: Model (Structure of ur mongodb)
    >> V: View (ReactJs)
    >> C: Controllers (Brain/Logic of our api appln)
