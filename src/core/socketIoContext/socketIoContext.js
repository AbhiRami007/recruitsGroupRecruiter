import { io } from 'socket.io-client';
import { createContext } from 'react';

const SOCKET_IO_URL= 'https://trg-app-lhmza.ondigitalocean.app/api/v1'
export const socket = io.connect(SOCKET_IO_URL);
export const SocketContext = createContext();
