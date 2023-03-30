// const apiKey = process.env.REACT_APP_OPENAI_KEY;
// export const handleSubmit = async (message, messages, setMessages, setHistory,setTyping, ) => {
//     //  open ai
//     const newMessage = {
//       message: message,
//       sender: "user",
//       direction: "outgoing",
//     };

//     const newMessages = [...messages, newMessage];
//     // update messages state
//     setMessages(newMessages);

//     // set typing indicator
//     setTyping(true);
//     setHistory(newMessage.message);
//       if (Array.isArray(newMessages)) {
//         await processMessages(newMessages);
//       }
//       console.log(messages);
//     //localStorage.setItem("title", history);
   
//   };

//   // process mesaage to chatgpt
//   export const processMessages = async (chatMessages, setMessages, setTyping, messages) => {
//     let apiMessages = chatMessages.map((messageObj) => {
//       let role = "";
//       if (messageObj.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObj.message };
//     });

//     // role: "user" =. a message from the user, 'assistant' =. a response from chatGpt
//     // system == generally one initial message defining How we want chat gpt to talk
//     const systemMessage = {
//       role: "system",
//       content: "",
//     };
//     const apiRequestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [systemMessage, ...apiMessages],
//       temperature: 0.9,
//       max_tokens: 150,
//       top_p: 1,
//       frequency_penalty: 0.0,
//       presence_penalty: 0.6,
//     };

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         // console.log(data);
//         // console.log(data.choices[0].message.content);

//         let message = data.choices[0].message.content;

//         setMessages([
//           ...chatMessages,
//           {
//             message: message,
//             sender: "ChatGPT",
//           },
//         ]);

//         setTyping(false);
//         // save to local storage
//         //localStorage.setItem("messages", JSON.stringify(messages));
//       })

//       .catch((error) => {
//         console.error(error);
//       });
//   };

// //  export const refresh = () => {
// //     setMessages([]);
// //   };
// //   export const clearChats = () => {
// //     setHistory([]);
// //     setMessages([]);
// //     localStorage.removeItem("title", "messages");
// //   };
