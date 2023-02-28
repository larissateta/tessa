const express = require("express");
const app = express();
const pool = require('./mysql');
const bcrypt = require('bcrypt')
const cors = require('cors');

app.use(cors());

app.use(express.json());

const users=[];

app.post('/api/signup', async(req, res) =>{
    const { name, email, password, confirmPassword } = req.body;

    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({messsage: 'All fields are required'});
    }
    if(password !== confirmPassword){
        return res.status(400).json({message: 'Passwords do not match'});
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users(name, email, password) VALUES (?,?,?)';
        const values = [name, email, hashedPassword];
        const [result] = await pool.execute(query, values);

        const user = {
            name: name,
            email: email,
            password: password
        };

        users.push(user);

        res.status(200).json(user)
    }catch(error){
        console.log('Error inserting the user in the database: ', error);
        res.status(500).json({message: 'Error inserting user into database'});
    }
});

app.post('/api/login',async(req, res)=>{
    const { email, password } = req.body;

    try {
      const [results, fields] = await pool.execute(
        'SELECT id, name, email, password FROM users WHERE email = ?',
        [email]
      );
  
      const user = results[0];
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Compare the hashed password with the provided password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      res.status(200).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
})
app.listen(3001, ()=>{
    console.log('Server started on port 3001');
});