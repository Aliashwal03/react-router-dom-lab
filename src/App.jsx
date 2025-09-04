// src/App.jsx
import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/navBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import LetterForm from "./components/LetterForm";


const mailboxExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Slaman',
};

const letterExample = {
  mailboxId: 0,
  recipient: '',
  message: '',
};

const App = () => {
  
  const [boxes, setBoxes] = useState([mailboxExample])
  const [letters, setLetters] = useState([letterExample])

  const addBoxes = (newBoxesData) => {
    const newBox = { ...newBoxesData, _id: boxes.length + 1 };
    setBoxes([...boxes, newBox]);
  };

  const addLetter = (newLetterData) => {
    setLetters((prevLetters) => [...prevLetters, newLetterData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/mailboxes" element={<MailboxList boxes={boxes} />} />
        <Route path="/mailboxes/:mailboxId"
          element={<MailboxDetails boxes={boxes} letters={letters} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBoxes={addBoxes} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={boxes} addLetter={addLetter} /> } />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  )
};

export default App;