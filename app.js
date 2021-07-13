require("dotenv").config();
const Express = require("express");
const app = Express();
<<<<<<< HEAD
const dbConnection = require("./db")

const controllers = require("./controllers");

app.use(Express.json());

app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"))
app.use("/review", controllers.reviewController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`);
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`)
    })
=======
const dbConnection = require("./db");

const controllers = require("./controllers");

app.use("/review",controllers.reviewController);

dbConnection.authenticate()
    .then(()=> dbConnection.sync())
    .then(()=> {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    })

app.use('/test', (req, res) => {
    res.send('This is a message from the test');
})

app.listen(3000, ()=> {
    console.log (`[Server]: App is listening on 3000.`);
})

>>>>>>> e9e825b6d4551e033d70f76f437dca3500a0731d
