const express = require("express");
const app = express();
const db = require("./models");
const PORT = 4000;
const admin=require('./middleware/admin')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const  signIn = require('./controllers/signinUc')
const  signUp = require('./controllers/signupUc')
app.use('/user' ,signUp)
app.use('/auth',signIn)


const api=require('./routes/apiRoutes')

app.use(admin)
app.use('/api', api);














db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});