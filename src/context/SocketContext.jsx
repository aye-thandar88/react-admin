import { createContext, useContext, useEffect, useRef,useState } from "react";
import { useAuth } from "./AuthContext";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (context === undefined) {
    throw new Error(
      "useSocket context must be used within a SocketContextProvider"
    );
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { userInfo } = useAuth();
  const { selectedChatData, selectedChatType } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      const newSocket = io("http://localhost:3002", {
        withCredentials: true,
        query: { userId: userInfo.id },
      });

      newSocket.on("connect", () => {
        console.log("Connected to socket server");
      });

      const handleReceiveMessage = (message) => {
        console.log("message",message)
        if (
          selectedChatType !== undefined &&
          (selectedChatData.id === message.sender.id ||
            selectedChatData.id === message.recipient.id)
        ) {
          console.log("message", message);
          dispatch(addMessage(message));
        }
      };

      newSocket.on("recieveMessage", handleReceiveMessage);

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
        // setSocket(null); // Clean up the socket when the component unmounts
      };
    }
  }, [userInfo, selectedChatData, selectedChatType, dispatch]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

// export const SocketProvider = ({ children }) => {
//   const socket = useRef();
//   const { userInfo } = useAuth();
//   const { selectedChatData, selectedChatType } = useSelector(
//     (state) => state.chat
//   );
//   const dispatch = useDispatch();

//   console.log("Rendering SocketProvider with socket:", socket.current);

//   useEffect(() => {
//     if (userInfo) {
//       socket.current = io("http://localhost:3002", {
//         withCredentials: true,
//         query: { userId: userInfo.id },
//       });

//       socket.current.on("connect", () => {
//         console.log("Connected to socket server");
//       });

//       const handleRecieveMessage = (message) => {
//         if (
//           selectedChatType !== undefined &&
//           (selectedChatData.id === message.sender.id ||
//             selectedChatData.id === message.recipient.id)
//         ) {
//           console.log("message", message);
//           dispatch(addMessage(message));
//         }
//       };

//       socket.current.on("recieveMessage", handleRecieveMessage);

//       return () => {
//         socket.current.disconnect();
//       };
//     }
//   }, [userInfo]);

//   return (
//     <SocketContext.Provider value={socket.current}>
//       {children}
//     </SocketContext.Provider>
//   );
// };
