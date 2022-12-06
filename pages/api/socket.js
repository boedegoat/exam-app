import { Server } from 'socket.io'

import socketHandler from '@/utils/socketHandler'

export default function SocketHandler(req, res) {
    // It means that socket server was already initialised
    if (res.socket.server.io) {
        console.log('Already set up')
        res.end()
        return
    }

    const io = new Server(res.socket.server)
    res.socket.server.io = io

    // Define actions inside
    io.on('connection', (socket) => {
        socketHandler(socket, req, res)
    })

    console.log('Setting up socket')
    res.end()
}
