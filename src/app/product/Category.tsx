import { useState } from "react";
import { AddOutlined } from "@mui/icons-material";
import { Button, MenuItem, SelectChangeEvent, Stack } from "@mui/material";
import { StyledOption, StyledSelect, StyledTextField } from "../../common/form";
import { MuiTable } from "../../common/table";

function Category() {
  const [page, setPage] = useState<string>("1");

  const handleChange = (e: SelectChangeEvent) => {
    setPage(e.target.value);
  };

  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <StyledTextField />

        <Stack direction="row" gap={2}>
          <StyledSelect label="Page" value={page} onChange={handleChange}>
            <MenuItem value="1">Page 1</MenuItem>
            <MenuItem value="2">Page 2</MenuItem>
            <MenuItem value="3">Page 3</MenuItem>
          </StyledSelect>

          <Button variant="primary" startIcon={<AddOutlined />}>
            Add Category
          </Button>
        </Stack>
      </Stack>

      <Stack mt={3}>
        <MuiTable />
      </Stack>
    </div>
  );
}

export default Category;
