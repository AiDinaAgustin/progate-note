// EditNote.tsx

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";

interface Note {
  id: number;
  title: string;
  desc: string;
}

interface EditNoteProps {
  selectedNoteId: number | null;
  noteList: Note[];
  setCurrentPage: (page: string) => void;
  editNote: (id: number, title: string, desc: string) => void;
}

const EditNote: React.FC<EditNoteProps> = ({
  selectedNoteId,
  noteList,
  setCurrentPage,
  editNote,
}) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  // Find the selected note and set the title and desc
  useEffect(() => {
    if (selectedNoteId !== null) {
      const note = noteList.find((note) => note.id === selectedNoteId);
      if (note) {
        setTitle(note.title);
        setDesc(note.desc);
      }
    }
  }, [selectedNoteId, noteList]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Ubah Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan"
          width="100%"
          onPress={() => {
            if (selectedNoteId !== null) {
              editNote(selectedNoteId, title, desc);
            }
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
