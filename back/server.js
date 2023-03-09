const express = require('express');
const app = express();
const {pool} = require('./dbConfig')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt');


const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send("Hello")
})
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.post("/users/register", async (req, res) => {
    var  {club_name, email, password, password2}= req.body
    let errors = []

    if(!club_name || !email || !password || !password2){
        // errors.push({message: "Debes completar todos los campos"})
        console.log(errors)
    }
    if(password.length < 8){
        errors.push({message: "La contraseña debe tener al menos 8 caracteres"})
        console.log({club_name, email, password, password2})
    }
    if(password != password2){
        errors.push({message: "Las contraseñas deben ser iguales"})
        console.log(errors)
    }
    if(errors.length > 0){
        res.send(errors)
        console.log(errors)
        
    }else{
        let hashedPassword = await bcrypt.hash(password, 10)
        pool.query(
            `SELECT * FROM users
            WHERE email = $1`,
            [email],
            (err, results) => {
                if(err){
                    throw err
                }

                console.log(results.rows)
                if(results.rows.length > 0){
                    errors.push({message: "El correo ya esta registrado"})
                    // res.send("register", {errors})
                    console.log(errors)
                }else{
                    pool.query(
                        `INSERT INTO users (club_name, email, password)
                        VALUES ($1, $2, $3)
                        RETURNING userid, password`,
                        [club_name, email, hashedPassword],
                        (err, results)=>{
                            if(err){
                                throw err;
                            }
                            console.log(results.rows)
                        }
                        )
                }
            }
        )
        
    }
    

    
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})