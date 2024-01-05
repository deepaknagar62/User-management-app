var express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/UserManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{ console.log("connection to Database is successfull.......")})
.catch((error) => console.log(error));




  const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    
  })

  const User = mongoose.model('Users',UserSchema);

  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email, password });
  
      if (user) {
        res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/register', async (req, res) => {
    try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
