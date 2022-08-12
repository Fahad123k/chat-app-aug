const io = require('socket.io')(3000, {
    cors: {
        origin: "*"
    }
})

const users = {};
io.on('connection',socket=>{
    socket.on('new-user',name=>{
        // console.log(name);
        // soket user new unique id
        users[socket.id]=name;
        // u wil send msg to all user who connect server excpt  yourself

        socket.broadcast.emit('user-connect',name)
    })
})