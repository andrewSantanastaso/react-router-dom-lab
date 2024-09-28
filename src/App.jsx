import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";
import LetterForm from "./components/LetterForm";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const handleAddBox = (formData) => {
    setMailboxes([...mailboxes, formData]);
  };
  const handleAddLetter = (formData) => {
    setLetters([...letters, formData]);
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm handleAddBox={handleAddBox} mailboxes={mailboxes} />
          }
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route
          path="/new-letter"
          element={
            <LetterForm
              mailboxes={mailboxes}
              handleAddLetter={handleAddLetter}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
