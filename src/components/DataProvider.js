import * as firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "holiday-poster-2019.firebaseapp.com",
  projectId: "holiday-poster-2019",
});
var db = firebase.firestore();

export default function DataProvider(props) {
  const [squares, setSquares] = useState([]);
  const revalidateSquares = () => {};

  const [messages, setMessages] = useState([]);
  const revalidateMessages = () => {};

  useEffect(() => {
    db.collection("squares")
      .get()
      .then((snapshot) => {
        setSquares(snapshot.docs.map((d) => d.data()));
      });
    db.collection("messages")
      .get()
      .then((snapshot) => {
        setMessages(snapshot.docs.map((d) => d.data()));
      });
  }, []);

  return props.render({
    squares,
    revalidateSquares,
    messages,
    revalidateMessages,
  });
}
