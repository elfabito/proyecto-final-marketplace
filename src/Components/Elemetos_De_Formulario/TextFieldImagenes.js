import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TextFieldImagenes({ textFieldImagenesData, setTextFieldImagenesData }) {
  const [imgsrc, setImgsrc] = useState([]);

  const addTextField = () => {
    setTextFieldImagenesData([...textFieldImagenesData, { id: Date.now(), value: '' }]);
    setImgsrc([...imgsrc, '']); 
  };

  const removeTextField = (id) => {
    const updatedTextFields = textFieldImagenesData.filter((field) => field.id !== id);
    setTextFieldImagenesData(updatedTextFields);

    const updatedImgsrc = [...imgsrc];
    updatedImgsrc.splice(id, 1); 
    setImgsrc(updatedImgsrc);
  };

  const handleTextFieldChange = (id, value) => {
    const updatedTextFields = textFieldImagenesData.map((field) => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    });
    setTextFieldImagenesData(updatedTextFields);

    const updatedImgsrc = [...imgsrc];
    updatedImgsrc[id] = value;
    setImgsrc(updatedImgsrc);
  };

  return (
    <div>
      {textFieldImagenesData.map((field) => (
        <div key={field.id}>
          <TextField
            id={`outlined-basic-${field.id}`}
            label="Imagenes"
            variant="standard"
            placeholder="URL"
            value={field.value}
            onChange={(e) => handleTextFieldChange(field.id, e.target.value)}
          />
          <IconButton color="secondary" onClick={() => removeTextField(field.id)}>
            
          </IconButton>
        </div>
      ))}
      <Box>
        <IconButton color="primary" onClick={addTextField}>
          <AddIcon />
        </IconButton>
      </Box>
    </div>
  );
}
