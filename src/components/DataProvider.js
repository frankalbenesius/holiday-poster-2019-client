import * as firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyC2EODpeg9hRgQ-iCzdixXg5eu6mM-Bk-0",
  authDomain: "holiday-poster-2019.firebaseapp.com",
  databaseURL: "https://holiday-poster-2019.firebaseio.com",
  projectId: "holiday-poster-2019",
  storageBucket: "holiday-poster-2019.appspot.com",
  messagingSenderId: "69143548505",
  appId: "1:69143548505:web:4841837d218bf1ba4f9748",
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
