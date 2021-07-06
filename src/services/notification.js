import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export  const notification = (title, message, type) => {
  store.addNotification({
    title,
    message,
    type,
    container: 'top-right',
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};