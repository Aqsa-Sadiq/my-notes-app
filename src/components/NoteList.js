
import React from "react";
import { Grid } from "@mui/material";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, handleEdit, handleDelete }) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} key={note.id}>
          <NoteItem
            note={note}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;
