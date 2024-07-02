import React, { useState } from "react";
import Home from "./src/screens/Home";
import AddNote from "./src/screens/AddNote";
import EditNote from "./src/screens/EditNote";

interface Note {
  id: number;
  title: string;
  desc: string;
}

interface CurrentPageWidgetProps {
  currentPage: string;
  noteList: Note[];
  setCurrentPage: (page: string) => void;
  addNote: (title: string, desc: string) => void;
  deleteNote: (id: number) => void;
  selectNote: (id: number) => void;
  selectedNoteId: number | null;
  editNote: (id: number, title: string, desc: string) => void; // Add this line
}

const CurrentPageWidget: React.FC<CurrentPageWidgetProps> = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  selectNote,
  selectedNoteId,
  editNote, // Add this line
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          selectNote={selectNote} // Add this line
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          selectedNoteId={selectedNoteId} // tambahkan ini
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          editNote={editNote}
        />
      );
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      );
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const [noteList, setNoteList] = useState<Note[]>([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const addNote = (title: string, desc: string) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id: number) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const editNote = (id: number, title: string, desc: string) => {
    setNoteList(
      noteList.map((note) => (note.id === id ? { id, title, desc } : note)),
    );
  };

  const selectNote = (id: number) => {
    setSelectedNoteId(id);
    setCurrentPage("edit");
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      selectNote={selectNote} // Add this line
      selectedNoteId={selectedNoteId}
      editNote={editNote} // Add this line
    />
  );
};

export default App;
