// Importing necessary dependencies and styles
//import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ReactModal from "react-modal";

import "./index.css";
import axios from "axios";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

// Setting the app element to be the root element of your app for accessibility purposes
ReactModal.setAppElement("#root");

function App() {
  // Define state variables
  const [messages, setMessages] = useState([]); // store chat messages
  const [typing, setTyping] = useState(false); // show typing indicator
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [responseData, setResponseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add an event listener for the beforeunload event and remove it when the component unmounts
  const [confirmReload, setConfirmReload] = useState(false);

  //Adding a useEffect hook which handles the "beforeunload" event and displays a confirmation message if the user tries to refresh the page. Also clears the chats.
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!confirmReload) {
        event.preventDefault();
        event.returnValue = "";
        Swal.fire({
          title:
            "We respect your privacy, if you refresh this page all chat history will be cleared. Refresh?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            setConfirmReload(true);
            Swal.fire("Deleted!", "Your Chats has been deleted.", "success");
          }
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [confirmReload]);

  useEffect(() => {
    if (confirmReload) {
      window.location.reload();
    }
  }, [confirmReload]);

  // Send message to backend and add response to chat history
  const apiUrl = "https://cheerbot.dev/api/";
  const handleSubmit = async (messageText) => {
    axios
      .post(apiUrl, { msg: messageText }, { mode: "no-cors" })
      .then((response) => {
        if (response.status === 200) {
          // Format the response message
          let message = response.data.res;
          let time = response.data.time;
          let newMessage = `${message} <br>${time}</br>`;
          const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          };
          let date = new Date().toLocaleString(options).replace(/[/]/g, "-");
          let userMessage = `${messageText} <br>${date}</br>`;
          // Add the message to chat history
          setMessages([
            ...messages,
            {
              message: userMessage,
              direction: "outgoing",
              tick: true,
            },
            {
              message: newMessage,
              tick: false,
            },
          ]);

          // Hide typing indicator
          setTyping(false);
          console.log(response.data);
        } else {
          console.error("Server returned an error:", response.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setTyping(true);
  };

  //A useEffect hook that handles the user location generation using the geolocation Api
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  //send location to the backend

  const submitLocation = (event) => {
    event.preventDefault();
    axios
      .post(`${apiUrl}location`, {
        lat: userLocation.lat,
        lon: userLocation.lon,
      })
      .then((response) => {
        setResponseData(response.data);
        setIsModalOpen(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //custom css style for the modal
  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: "1000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      maxWidth: "80%",
      maxHeight: "80%",
      overflow: "auto",
      borderRadius: "30px",
      outline: "none",
      padding: "20px",
    },
  };

  return (
    <div className="">
      <div className="header font-bold">
        <p style={{ textAlign: "center" }}>Welcome to CheerBot😃</p>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>
          Boost Your Spirit with the CheerBot : Your Personal Cheerleader
        </p>
      </div>
      <div>
        <div className="wrapper">
          <div>
            {/* 
  form containing a button that, when clicked, will call the submitLocation function.
*/}
            <form onSubmit={submitLocation}>
              <button
                className="bg-gray-500 hover:bg-blue-300 text-white font-bold py-2 px-4 md:mt-3 mt-1 rounded-lg mx-auto block"
                type="submit"
              >
                Therapist Around You
              </button>
            </form>
          </div>
          <div className="box">
          <MainContainer>
              {/* chat container using several components from a chat UI library called react-chat-ui*/}
              <ChatContainer className="mt-0 mb-0">
                <MessageList
                  scrollBehavior="smooth"
                  typingIndicator={
                    typing ? <TypingIndicator content="Cheer Bot😃" /> : null
                  }
                >
                  {messages.map((message, index) => (
                    <Message key={index} model={message} />
                  ))}
                </MessageList>
                <MessageInput
                  attachButton={false}
                  placeholder="Enter message"
                  onSend={handleSubmit}
                />
              </ChatContainer>
              </MainContainer>
              {/*The ReactModal component  used to display a modal dialog. Rendered conditionally  based on the value of isModalOpen.*/}
              <ReactModal isOpen={isModalOpen} style={customModalStyles}>
                {isModalOpen && responseData && (
                  <div className="text-black">
                    <div className="bg-blue-500 py-4">
                      <p className="text-center text-white font-bold flex items-center justify-center">
                        <i className="fas fa-hospital text-3xl mr-2"></i>
                        Here are Therapist around you
                      </p>
                    </div>
                    {/* A div that displays a list of therapist locations. The list is generated based on data in the responseData object.*/}
                    <div>
                      {Object.keys(responseData.list).map((key) => {
                        const isClosed =
                          responseData.list[key].open === "Closed at this time";
                        return (
                          <div className="border-gray-300 py-9 border-b-4">
                            <p className="font-bold text-xl mb-2">
                              <i className="fas fa-hospital"></i> Hospital Name:
                            </p>
                            <p className="text-lg">
                              {responseData.list[key].name}
                            </p>
                            <p className="font-bold text-xl mt-4 mb-2">
                              <i className="fas fa-map-marker-alt"></i> Address:
                            </p>
                            <p className="text-lg">
                              {responseData.list[key].vicinity}
                            </p>
                            <div
                              className="text-blue-700 hover:text-pink-300 hover:underline text-lg mt-4"
                              dangerouslySetInnerHTML={{
                                __html: `<p><i class="fas fa-map-marker-alt"></i> Google Map Link: ${responseData.list[key].googleMap_link}</p>`,
                              }}
                            />
                            <p className="font-bold text-xl mt-4 mb-2">
                              <i className="far fa-clock"></i> Availability:
                            </p>
                            <p
                              className={`text-lg ${
                                isClosed ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {responseData.list[key].open}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <button
                  className="bg-gray-500 hover:bg-blue-300 text-white font-bold py-2 mt-3 px-4 rounded-lg mx-auto block"
                  type="submit"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Modal
                </button>
              </ReactModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
