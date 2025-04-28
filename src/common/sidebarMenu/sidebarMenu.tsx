import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { JSX, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebarMenu.css";
import {
  DashboardOutlined,
  ExpandLess,
  ExpandMore,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
  to?: string;
  icon?: JSX.Element;
}

// Sample menu array
const menuItems: MenuItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: <DashboardOutlined /> },
  {
    icon: <ShoppingCartOutlined />,
    label: "Product",
    children: [
      {
        label: "Add Product",
        to: "/add-product",
      },
      { label: "Category", to: "/category" },
    ],
  },
];

export function SidebarMenu() {
  // Manage open/close state of menus by path
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const theme = useTheme();
  const location = useLocation();

  const handleToggle = (path: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  // Recursive function to render menu
  const renderMenu = (items: MenuItem[], parentPath = ""): JSX.Element[] => {
    return items.map((item, index) => {
      const path = parentPath ? `${parentPath}-${index}` : `${index}`;
      const hasChildren = item.children && item.children.length > 0;

      // Checking if the item is active (current path)
      const isActive = location.pathname === item.to;

      const buttonContent = (
        <ListItemButton
          component={item.to ? NavLink : "div"}
          to={item.to}
          onClick={() => hasChildren && handleToggle(path)}
          sx={{
            padding: "5px 10px",
            // Apply active background color
            ...(isActive && {
              backgroundColor: theme.palette.menu, // Use the theme menu color here
            }),
            // Optional: add hover effect for active link
            "&:hover": {
              backgroundColor: theme.palette.menu,
            },
          }}
        >
          {item.icon ? item.icon : <></>}
          <ListItemText primary={item.label} />
          {hasChildren ? (
            openMenus[path] ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItemButton>
      );

      return (
        <div key={path}>
          {buttonContent}

          {hasChildren && (
            <Collapse in={openMenus[path]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenu(item.children!, path)}
              </List>
            </Collapse>
          )}
        </div>
      );
    });
  };

  return (
    <Drawer
      open
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>{renderMenu(menuItems)}</List>
    </Drawer>
  );
}
