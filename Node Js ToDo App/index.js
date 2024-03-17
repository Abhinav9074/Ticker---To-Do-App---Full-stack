const app = require('./app');
const db = require('./config/db_config');
const UserModel = require('./models/user.model');

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Working successfully !!!')
})

app.listen(port,()=>{
    console.log(`Server Listening on port http://localhost:${port}`)
});