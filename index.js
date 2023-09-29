const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.set('view engine', 'pug');

const port = 3000;

let customers = [
    { id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
    { id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113' },
    { id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176' },
]

app.get('/', (req, res) => {
    res.render("customerlist", {
        customers
    })
});

app.get('/addcustomer', (req, res) => {
    res.render('addcustomer');
});

app.post('/addcustomer', (req, res) => {
    const newCustomer = {
        id: Date.now(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    customers = [...customers, newCustomer];
    res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});
