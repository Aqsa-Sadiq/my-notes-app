
import React from "react";
import { Box, TextField, Button } from "@mui/material";

const NoteForm = ({ input, setInput, handleAddNote, handleDeleteAll, editId, notes }) => {
  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        label="Write a note..."
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddNote}
        sx={{ minWidth: "100px" }}
      >
        {editId ? "Update" : "Add"}
      </Button>

      {}
      <Button
        variant="outlined"
        color="error"
        disabled={notes.length === 0}
        onClick={handleDeleteAll}
        sx={{ minWidth: "120px" }}
      >
        Delete All
      </Button>
    </Box>
  );
};

export default NoteForm;

