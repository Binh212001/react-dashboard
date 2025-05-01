import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
} from "../../service/categoryApi";

export interface CategoryReq {
  name: string;
  description: string;
  slug: string;
  files: File | null;
}

function AddCategory({ onClose }: { onClose: Function }) {
  const [formData, setFormData] = useState<CategoryReq>({
    name: "",
    description: "",
    files: null,
    slug: "",
  });

  const [createCategory] = useCreateCategoryMutation();
  const { refetch } = useGetCategoriesQuery({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setFormData((prev) => ({
        ...prev,
        files: file, // ✅ Là File object thực sự
      }));
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createCategory(formData).unwrap();
    refetch();
    onClose(true);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 3,
      }}
    >
      <Typography variant="h5">ADD CATEGORY</Typography>
      <TextField
        label="Name"
        variant="outlined"
        color="tertiary"
        name="name"
        value={formData.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        required
      />

      <TextField
        name="description"
        label="Decsription"
        variant="outlined"
        color="tertiary"
        value={formData.description}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />

      <label>Image</label>
      <input
        name="files"
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFile(e)}
      />
      <Button variant="contained" type="submit">
        Gửi
      </Button>
    </Box>
  );
}
export default AddCategory;
