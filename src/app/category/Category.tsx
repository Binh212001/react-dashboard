import { AddOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Drawer,
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
import { CellItemWithImage } from "../../common/mui";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../service/categoryApi";

import AddCategory from "./AddCategory";

export interface Category {
  id: string; // ID của category
  name: string; // Tên của category
  slug: string; // Slug của category (chuỗi đơn giản dùng cho URL)
  image: string; // URL của ảnh liên quan đến category
  description: string | null;
  createdAt: string; // Thời gian tạo category
  updatedAt: string; // Thời gian cập nhật category
  createdBy: string | null; // Người tạo category (có thể null nếu không có thông tin)
  updatedBy: string | null; // Người cập nhật category (có thể null nếu không có thông tin)
}

function Category() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set()); // Lưu trữ các mục được chọn
  const [open, setOpen] = useState<boolean>(false);

  const { data, isLoading, isError, refetch } = useGetCategoriesQuery({});
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
      const allIds: Set<string> = new Set(data?.map((row: Category) => row.id));
      setSelectedRows(allIds); // Chọn tất cả
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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

  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextField placeholder="Search" color="tertiary" />
        <Stack direction="row" gap={2}>
          <Button
            onClick={toggleDrawer(true)}
            variant="primary"
            startIcon={<AddOutlined />}
          >
            Add Category
          </Button>

          {/* Nút Xóa các mục đã chọn */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteSelected}
            disabled={selectedRows.size === 0} // Vô hiệu hóa nút nếu không có mục nào được chọn
          >
            Delete Selected
          </Button>
        </Stack>
      </Stack>

      <Stack mt={3}>
        {isLoading ? (
          <Typography>Loading...</Typography> // Hiển thị trạng thái loading
        ) : isError ? (
          <Typography>Error loading categories.</Typography> // Hiển thị nếu có lỗi
        ) : (
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
              {data?.map((cat: Category) => (
                <TableRow key={cat.id}>
                  {/* Cột checkbox cho mỗi hàng */}
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.has(cat.id)} // Kiểm tra xem hàng có được chọn không
                      onChange={() => handleSelectRow(cat.id)}
                    />
                  </TableCell>

                  <CellItemWithImage
                    label={cat.name}
                    image={cat.image}
                    description={cat.description}
                  />
                  <TableCell>{cat.slug}</TableCell>
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
              ))}
            </TableBody>
          </Table>
        )}
      </Stack>

      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <AddCategory onClose={toggleDrawer(false)} />
      </Drawer>
    </div>
  );
}

export default Category;
