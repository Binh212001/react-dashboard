import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface AttributeRow {
  attribute: string;
  value: string;
}

const ATTRIBUTE_OPTIONS = ["Color", "Size", "Memory", "Material"];

export function DynamicAttributeForm() {
  const [rows, setRows] = useState<AttributeRow[]>([
    { attribute: "", value: "" },
  ]);

  const handleChange = (
    index: number,
    field: keyof AttributeRow,
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { attribute: "", value: "" }]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <Box sx={{ p: 2 }}>
      {rows.map((row, index) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={index}
          sx={{ mb: 1 }}
        >
          <Grid size={5}>
            <FormControl fullWidth>
              <InputLabel>Attribute</InputLabel>
              <Select
                value={row.attribute}
                label="Attribute"
                onChange={(e) =>
                  handleChange(index, "attribute", e.target.value)
                }
              >
                {ATTRIBUTE_OPTIONS.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={5}>
            <TextField
              label="Value"
              value={row.value}
              onChange={(e) => handleChange(index, "value", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={2}>
            <IconButton
              color="error"
              onClick={() => handleRemoveRow(index)}
              disabled={rows.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Button variant="outlined" onClick={handleAddRow}>
        Add Row
      </Button>
    </Box>
  );
}
