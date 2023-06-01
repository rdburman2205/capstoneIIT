const API_KEY = "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";
const GPT_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions";

const DIALOG_FLOW_API = "https://dialogflow.cloud.google.com/v1/integrations/messenger/webhook/c5008b18-36be-47c0-9a8b-1840c8fa7a03/sessions/dfMessenger-94910654";

// //Define a function call DialogFlow API
// async function generateResponse(prompt) {
// 	// Set up the API request
// 	const response = await fetch(DIALOG_FLOW_API, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({"queryInput":{"text":{"text":"hi","languageCode":"en"}}}),
// 	});
// 	const data = await response.json();
// 	console.log(data)
// 	// return data.choices[0].text.trim();
// }

// Define a function to add a message to the chatbox
function addMessage(text, sender) {
	const chatbox = document.getElementById("chatbox");
	const message = document.createElement("div");
	message.className = "message";
	message.classList.add(sender);
	message.innerText = text;
	chatbox.appendChild(message);
}


// Define a function when chatbox is getting response to print
// function botThinkink(text, sender) {
// 	const chatbox = document.getElementById("chatbox");
// 	const message = document.createElement("div");
// 	message.className = "thinking";
// 	message.classList.add(sender);
// 	message.innerText = 'Thinking';
// 	chatbox.appendChild(message);
// }

// Define a function to send a message to the chatbot
async function sendMessage() {
	console.log('send message');
	const input = document.getElementById("message");
	const message = input.value;
	addMessage(message, "user");
	input.value = "";
	const response = await generateResponse(message);
	addMessage(response, "bot");
}
