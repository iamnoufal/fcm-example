importScripts('/__/firebase/8.8.0/firebase-app.js');
importScripts('/__/firebase/8.8.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();

messaging.onBackgroundMessage((msg) => {
  const notificationTitle = msg.notification.title;
  const notificationOptions = {
    body: msg.notification.body
  };
})
