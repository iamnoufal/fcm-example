// init database to fetch fcm tokens
const database = firebase.firestore().collection("fcmTokens");

// sendMsg functions to send notifications to the registered devices
const sendMsg = async (notification) => {
	
	// fetching fcm tokens from the database and storing it in an array "tokens"
	await database.get().then(async (q) => {
		var tokens = [];
		await q.forEach((doc) => {
			tokens.push(doc.data().token);
		})
		
		// send function to send the notification to the specific fcm token
		const send = (token, notification) => {	
			fetch('https://fcm.googleapis.com/fcm/send', {
				'method': 'POST',
				'headers': {
					'Authorization': 'key=<SERVER KEY>',
					// Replace <SERVER KEY> qith your SERVER KEY from the FCM settings
					// You can find that at https://console.firebase.google.com/u/0/project/_/settings/cloudmessaging under Project Credentials > Server Key
					'Content-Type': 'application/json'
				},
				'body': JSON.stringify({
					'notification': notification,
					'to': token
				})
			}).then((response) => {
				// success!!
				console.log(response);
			}).catch((error) => {
				// error :(
				console.log(error);
			})
		}
		
		for (i in tokens) {
			await send(tokens[i], notification);
		}
	});
	
	// whole process done!!
	alert("Notifications sent!!");
}

// initSend function to get the notification typed in the form and convert it to JSON data
const initSend = () => {

	var notification = {
		'title': document.getElementById("title").value,
		'body': document.getElementById("desc").value,
		'icon': document.getElementById("ico").value,
		"click_action": "/?r="+document.getElementById("ca").value
	};
	// typeof(notification) = "object" <JSON>
	
	sendMsg(notification);
}

  /*******************************************************/
 /******************************************************/
/*****************************************************/
