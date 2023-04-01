import { SocketContext } from './socketIoContext';
import { React } from 'react';
import { socket } from './socketIoContext';
import { useState } from 'react';
import { useEffect } from 'react';
// import { processTimestamp } from '../../features/Dashboard/AlertSummary/helper';
import { getUser } from '../AuthHelpers';

function SocketProvider(props) {
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [newUser, setNewUser] = useState(0);

  const notificationListener = message => {
    setNotifications(arr => [message, ...arr]);
    setNotificationCount(count => count + 1);
  };

  // const alertsListener = message => {
  //   // const processedAlertsData = processTimestamp([message]);
  //   setAlerts(arr => [message[0], ...arr]);
  // };

  useEffect(() => {
    // const userId = JSON.parse(getUser())?.id;
    // if (userId) {
      socket.emit('connected');
    // }
    socket.on('jobnotification', notificationListener);

    return () => {
      socket.off('jobnotification', notificationListener);
    };
  }, [newUser]);
  return (
    <SocketContext.Provider
      value={{
        socket,
        notificationCount,
        setNotificationCount,
        notifications,
        setNotifications,
        newUser,
        setNewUser,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
