// init messaging
const messaging = firebase.messaging()

// init database to store fcm token
const database = firebase.firestore().collection("fcmTokens")

// to store fcm token of the device
var token = "";

// content placeholder
const content = document.querySelector(".sub");

// redirect if any external link mentioned
var redirect = window.location.href.split("=")[1];
if (redirect!="" && redirect!=undefined) {
	window.location.href=redirect;
}

// gets fcm token if subscribed to fcm
const getFCMToken = async () => {
	await messaging.getToken({vapid:'<PUBLIC VAPID KEY>'}).then((a)=>{token = a})
	// Replace <PUBLIC VAPID KEY> with your project's valip key pair.
	// You can find that at https://console.firebase.google.com/u/0/project/_/settings/cloudmessaging under Web Configurations > Web Push Certificates > Key Pair. If not available, generate one.
	return token;
}

// displays fcm token in the placeholder
const showFCMToken = async () => {
	await getFCMToken();
	console.log(token);
	content.innerHTML = "<h4>FCM Token</h4><p>"+token+"</p>";
}

// requests permission for notification
const requestPermission = () => {
  messaging.requestPermission().then(async () => {
    token = await getFCMToken();
    database.doc().set({
    	token: token
    }).then(() => {
    	showFCMToken();
    }).catch((err) => {
    	Notification.permission=="default";
    	alert(err.message);
    })
  }).catch((err) => {
    alert("You've blocked the notifications. Please check your browser settings");
  })
}

// checks whether the user is already subscribed to notifications
if (Notification.permission=="granted") {
  showFCMToken();
}

// defines what to do when a new notification arrives if the website is open
messaging.onMessage((msg) => {
  content.innerHTML = "<h4>" + msg.notification.title + "</h4><p>" + msg.notification.body + "</p>";
});

  /*******************************************************/
 /******************************************************/
/*****************************************************/
