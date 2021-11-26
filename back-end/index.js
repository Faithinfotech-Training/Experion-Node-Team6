const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Gig routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));

/*[
  {
    "user_id": 1,
    "email": "testuser1@gmail.com",
    "password": "testpassword1",
    "first_name": "FirstName 1",
    "last_name": "LastName 1",
    "mobile_no": "1111111111",
    "date_of_joining": "01-01-2021"
  },
  {
    "user_id": 2,
    "email": "testuser2@gmail.com",
    "password": "testpassword2",
    "first_name": "FirstName 2",
    "last_name": "LastName 2",
    "mobile_no": "2222222222",
    "date_of_joining": "02-02-2021"
  },
  {
    "user_id": 3,
    "email": "testuser
"email": "testuser3@gmail.com",
    "password": "testpassword3",
    "first_name": "FirstName 3",
    "last_name": "LastName 3",
    "mobile_no": "3333333333",
    "date_of_joining": "03-03-2021"
  }
] */