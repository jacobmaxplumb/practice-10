import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAnimals, updateText } from "./redux/contactFormSlice";
import { useAddContactMutation, useGetContactsQuery } from "./redux/contactApi";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {

  return (
    <div className="App">
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
