import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { DynamicAttributeForm } from "../../common/mui";
import { StyleBox } from "../../common/styleBox";
import { UploadImage } from "../../common/uploadFile/UploadImage";

interface Product {
  name: string;
  sku: string;
  barcode: string;
  description: string;
}

function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [attItems, setAttItems] = useState<number[]>([1]);
  const [variants, setVariant] = useState<{ [key: string]: string[] }>({});
  const [product, setProduct] = useState<Product>({
    name: "",
    sku: "",
    barcode: "",
    description: "",
  });
  console.log("🚀 ~ AddProduct ~ product:", product);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e: SelectChangeEvent) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
    console.log(image);
    console.log(variants);
  };

  return (
    <Box component="form" onSubmit={(e) => handeSubmit(e)}>
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
            <Button variant="outlined" color="warning" type="submit">
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              fullWidth
              sx={{ mb: 3 }}
            />
            <Grid container columns={12} spacing={2} sx={{ mb: 3 }}>
              <Grid sx={{ sm: 12, md: 6 }}>
                <Typography>SKU</Typography>
                <TextField
                  color="tertiary"
                  name="sku"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  fullWidth
                  placeholder="SKU"
                />
              </Grid>
              <Grid sx={{ sm: 12, md: 6 }}>
                <Typography component="label">Barcode</Typography>
                <TextField
                  color="tertiary"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  fullWidth
                  name="barcode"
                  placeholder="0123-4567"
                />
              </Grid>
            </Grid>
            <Typography component="label">Description (Optional)</Typography>
            <TextField
              name="description"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              fullWidth
              multiline
              rows={4}
              color="tertiary"
            />
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
            {attItems.map((i, index) => {
              return (
                <DynamicAttributeForm
                  setVariant={setVariant}
                  key={index}
                  variant={{
                    color: ["red", "blue"],
                    size: ["X", "XC"],
                  }}
                />
              );
            })}

            <Button onClick={() => setAttItems((prev) => [...prev, 1])}>
              Add item
            </Button>
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
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
              <Select
                onChange={(e: SelectChangeEvent) => handleChange(e)}
                color="tertiary"
                name="vendor"
                fullWidth
              >
                <MenuItem></MenuItem>
                <MenuItem value={1}>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Category</Typography>
              <Select
                onChange={(e: SelectChangeEvent) => handleChange(e)}
                color="tertiary"
                name="category"
                fullWidth
              >
                <MenuItem></MenuItem>
                <MenuItem value={1}>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Collection</Typography>
              <Select
                onChange={(e: SelectChangeEvent) => handleChange(e)}
                color="tertiary"
                name="collection"
                fullWidth
              >
                <MenuItem></MenuItem>
                <MenuItem value={1}>sjkhdjka</MenuItem>
              </Select>
            </Box>
            <Box mb={3}>
              <Typography>Status</Typography>
              <Select
                onChange={(e: SelectChangeEvent) => handleChange(e)}
                color="tertiary"
                name="status"
                fullWidth
              >
                <MenuItem></MenuItem>
                <MenuItem value={1}>sjkhdjka</MenuItem>
              </Select>
            </Box>
          </StyleBox>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProduct;
