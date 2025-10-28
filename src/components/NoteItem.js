import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const NoteItem = ({ note, handleEdit, handleDelete }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {}
        <Typography sx={{ flex: 1, mr: 2 }}>{note.text}</Typography>

        <Box>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => handleEdit(note.id)}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoteItem;
