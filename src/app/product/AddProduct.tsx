import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DynamicAttributeForm } from "../../common/mui";
import { StyleBox } from "../../common/styleBox";
import { UploadImage } from "../../common/uploadFile/UploadImage";

function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };
  return (
    <Box component="div">
      <StyleBox>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5">Add a new Product</Typography>
            <Typography variant="body2">
              Orders placed across your store
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center" gap={2}>
            <Button variant="outlined" color="secondary">
              Discard
            </Button>
            <Button variant="outlined" color="warning">
              Save Draft
            </Button>
            <Button variant="primary">Pushlish Product</Button>
          </Stack>
        </Stack>
      </StyleBox>
      <Grid container columns={12} spacing={2}>
        {/* Info product */}
        <Grid size={{ xs: 12, md: 8 }}>
          <StyleBox>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Product information
            </Typography>
            <Typography component="label">Name</Typography>
            <TextField
              color="tertiary"
              name="name"
              placeholder="Name"
              fullWidth
              sx={{ mb: 3 }}
            />
            <Grid container columns={12} spacing={2} sx={{ mb: 3 }}>
              <Grid sx={{ sm: 12, md: 6 }}>
                <Typography>SKU</Typography>
                <TextField
                  color="tertiary"
                  name="sku"
                  fullWidth
                  placeholder="SKU"
                />
              </Grid>
              <Grid sx={{ sm: 12, md: 6 }}>
                <Typography component="label">Barcode</Typography>
                <TextField
                  color="tertiary"
                  fullWidth
                  name="barcode"
                  placeholder="0123-4567"
                />
              </Grid>
            </Grid>
            <Typography component="label">Description (Optional)</Typography>
            <TextField fullWidth multiline rows={4} color="tertiary" />
          </StyleBox>
          {/* Image product */}
          <StyleBox>
            <Typography variant="h6">Product Image</Typography>
            <UploadImage
              name=""
              preview={preview}
              removeImage={removeImage}
              handleImageChange={handleImageChange}
            />
          </StyleBox>

          <StyleBox>
            <Typography variant="h6">Variants</Typography>
            <DynamicAttributeForm />
          </StyleBox>
        </Grid>
        {/* Priceing */}
        <Grid size={{ xs: 12, md: 4 }}>
          <StyleBox>
            <Typography variant="h6" mb={4}>
              Pricing
            </Typography>
            {[
              { label: "Base Price", name: "price", placeholder: "Price" },
              {
                label: "Discounted Price",
                name: "discountedPrice",
                placeholder: "Discounted Price",
              },
            ].map(({ label, name, placeholder }) => (
              <Box key={name} mb={3}>
                <Typography>{label}</Typography>
                <TextField
                  color="tertiary"
                  name={name}
                  fullWidth
                  placeholder={placeholder}
                />
              </Box>
            ))}
            <Box display="flex" alignItems="center" gap={1}>
              <CheckBox color="secondary" />
              <Typography>Charge tax on this product</Typography>
            </Box>
            <hr />
            <Stack direction="row" justifyContent="space-between">
              <Typography>In stock</Typography>
              <Switch defaultChecked color="secondary" />
            </Stack>
          </StyleBox>

          <StyleBox>
            <Typography variant="h6" mb={4}>
              Organize
            </Typography>
            <Box mb={3}>
              <Typography>Vendor</Typography>
              <Select color="tertiary" name="vendor" fullWidth>
                <MenuItem>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Category</Typography>
              <Select color="tertiary" name="category" fullWidth>
                <MenuItem>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Collection</Typography>
              <Select color="tertiary" name="collection" fullWidth>
                <MenuItem>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Status</Typography>
              <Select color="tertiary" name="status" fullWidth>
                <MenuItem>sjkhdjka</MenuItem>
              </Select>
            </Box>
          </StyleBox>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProduct;
