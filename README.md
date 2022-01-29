# Firebase Cloud Messaging
Firebase offers Cloud Messaging as one of its Backend-as-a-service. You can subscribe a user to get notifications and you can send push notifications directly from FCM Console or by using this template

## Prerequisites
- Firebase project (with Cloud Firestore enabled)
- Web server key and Public VAPID (https://console.firebase.google.com/project/_/settings/cloudmessaging)
- firebase-cli (Check https://firebase.google.com/docs/cli)

## Initialization
- Create a folder:
  ```
  mkdir messaging
  cd messaging  
  ```
- Clone this repository by running  
  ```
  git clone https://github.com:Rahman24/fcm-example
  ```
- Create two new files  `firebase.json`  and  `.firebaserc`
- Contents of  `firebase.json`:

    ```firebase.json
    {
      "hosting": {
        "public": "fcm-example",
        "ignore": [
          "firebase.json",
          "**/.*",
          "**/node_modules/**"
        ]
      }
    }
    ```
- Contents of  `.firebaserc`

  ```.firebaserc
  {
    "projects": {
      "default": "<PROJECT NAME>"
    }
  }
  // Replace <PROJECT NAME> with your firebase project name
  ```
  
- Go to fcm-example folder and open `msg.js`. Replace `<PUBLIC VAPID KEY>` with the Public VAPID key from your project settings.
- Go to admin folder and open  `admin.js`. Replace `<SERVER KEY>` with the Server key from your project settings.
- Go to root folder and run  `firebase serve`  It starts the local development server at http://localhost:5000

## Sending and Recieving Messages
- Open http://localhost:5000 and Enable Notifications
- As soon as the notifcation is enabled, fcm token will appear on the screen.
- In a new tab, open http://localhost:5000/admin. Type Title, Description, Icon URL and Click Action and hit Send. On Successful send, alert message appears.
- Switch tabs to check the message which replaces the fcm token.
  
## Issues
If you have any issues in the code, go to Issues pannel and describe your issue
  ```Template of issue
  Describe your issue clearly
  Post the error if any logged to the console
  Post Screenshots
  ```
