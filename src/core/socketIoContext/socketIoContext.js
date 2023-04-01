import { io } from 'socket.io-client';
import { createContext } from 'react';

const SOCKET_IO_URL= 'http://localhost:3000/'
export const socket = io.connect(SOCKET_IO_URL);
export const SocketContext = createContext();
