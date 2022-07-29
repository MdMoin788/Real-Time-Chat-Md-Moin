const http = require("http")
const express = require("express");
const cors = require("cors")
const app = express();
const socketIO = require("socket.io");

app.use(express.json());
const users = []
app.use(cors())

const server = http.createServer(app)

require("dotenv").config()
const connect = require("./config/db")
const { register, login } = require("./controllers/userController");
app.post("/register", register)
app.post("/login", login)

const io = socketIO(server)
io.on("connection",  (socket)=>{
    console.log("connection")



    socket.on('joined',({user})=>{
      
          users[socket.id]=user;
          console.log(`${user} has joined `);
          socket.broadcast.emit('userJoined',{message:` ${users[socket.id]} Is Online`});
       
         
            socket.emit('welcome',{message: `Welocome To The Chat`})

    })

    socket.on('message',({message,id})=>{
      
        io.emit('sendMessage',{user:users[id],message,id});
    })

    socket.on('disconnect',()=>{
        console.log(users[socket.id])
          socket.broadcast.emit('leave',{user:"Admin",message:`User Got 
          Offline `});
    })

})
server.listen(process.env.PORT || 5000, async () => {
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }
})
