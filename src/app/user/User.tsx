import {
  Button,
  Checkbox,
  Grid,
  Menu,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../service/categoryApi";
import { StyleBox } from "../../common/styleBox";
import { ImportExport, AddOutlined } from "@mui/icons-material";
import { CellItemWithImage } from "../../common/mui";

function User() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set()); // Lưu trữ các mục được chọn
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useGetCategoriesQuery({
    ...(search && {
      q: search,
    }),
  });
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleSelectRow = (id: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id); // Bỏ chọn nếu đã chọn
    } else {
      newSelectedRows.add(id); // Chọn nếu chưa chọn
    }
    setSelectedRows(newSelectedRows);
  };

  // Hàm chọn hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    if (selectedRows.size === data?.length) {
      setSelectedRows(new Set()); // Bỏ chọn tất cả nếu đã chọn hết
    } else {
      // const allIds: Set<string> = new Set(data?.map((row: Category) => row.id));
      // setSelectedRows(allIds); // Chọn tất cả
    }
  };

  // Xóa các category đã chọn
  const handleDeleteSelected = async () => {
    const idsToDelete = Array.from(selectedRows);
    try {
      await Promise.all(idsToDelete.map((id) => deleteCategory(id).unwrap()));
      refetch();
      setSelectedRows(new Set()); // Reset các mục đã chọn sau khi xóa
    } catch (err) {
      alert("Error deleting categories");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <StyleBox>
      <Typography variant="h6">Filter</Typography>
      <Grid container columns={12} spacing={2} mb={3}>
        <Grid
          size={{
            md: 4,
          }}
        >
          <Select defaultValue={"all"} fullWidth>
            <MenuItem value="all">Select Role</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </Grid>
        <Grid
          size={{
            md: 4,
          }}
        >
          <Select defaultValue={"all"} fullWidth>
            <MenuItem value="all">Select Role</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </Grid>
        <Grid
          size={{
            md: 4,
          }}
        >
          <Select defaultValue={"all"} fullWidth>
            <MenuItem value="all">Select Role</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Select defaultValue={10}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
        {/* Nút Xóa các mục đã chọn */}
        <Stack direction="row" gap={2}>
          {selectedRows.size > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteSelected}
            >
              Delete Selected
            </Button>
          )}
          <TextField
            placeholder="Search"
            color="tertiary"
            onChange={handleChange}
          />
          <Button
            color="success"
            variant="contained"
            disabled={selectedRows.size === 0}
          >
            <ImportExport />
            Export
          </Button>

          <Button variant="primary">
            <AddOutlined />
            Add new Record
          </Button>
        </Stack>
      </Stack>

      <Table>
        <TableHead>
          <TableRow>
            {/* Cột checkbox "Chọn tất cả" */}
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedRows.size === data?.length} // Kiểm tra xem tất cả có được chọn không
                onChange={handleSelectAll}
              />
            </TableCell>

            <TableCell>Name</TableCell>
            <TableCell>Slug</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* Cột checkbox cho mỗi hàng */}
            <TableCell padding="checkbox">
              <Checkbox
              // checked={selectedRows.has(cat.id)} // Kiểm tra xem hàng có được chọn không
              // onChange={() => handleSelectRow(cat.id)}
              />
            </TableCell>

            <CellItemWithImage
              label={"cat.name"}
              image={"cat.image"}
              description={"cat.description"}
            />
            <TableCell>{"cat.slug"}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteSelected()} // Xóa các mục đã chọn
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyleBox>
  );
}

export default User;
