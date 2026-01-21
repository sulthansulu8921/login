import { useState } from "react";
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import {
  Category,
  Profile2User,
  Briefcase,
  Ticket,
} from "iconsax-react";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

const menu = [
  { label: "Dashboard", icon: Category },
  { label: "Leads", icon: Profile2User },
  { label: "Companies", icon: Briefcase },
  { label: "Deals", icon: AssignmentTurnedInOutlinedIcon, mui: true },
  { label: "Tickets", icon: Ticket },
];

function SidebarContent({ onItemClick }) {
  const [active, setActive] = useState(0);

  return (
    <Box sx={{ pt: 10 }}>
      <List>
        {menu.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === i;

          return (
            <ListItem
              key={i}
              onClick={() => {
                setActive(i);
                onItemClick?.();
              }}
              sx={{
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isActive
                    ? "linear-gradient(135deg,#5b5ce2,#7a6ff0)"
                    : "transparent",
                  border: !isActive ? "1px solid #e7ecf3" : "none",
                }}
              >
                {item.mui ? (
                  <item.icon
                    sx={{
                      fontSize: 20,
                      color: isActive ? "#fff" : "#8f9bad",
                    }}
                  />
                ) : (
                  <Icon
                    size="20"
                    variant={isActive ? "Bold" : "Linear"}
                    color={isActive ? "#fff" : "#8f9bad"}
                  />
                )}
              </Box>

              <Typography sx={{ mt: 1, fontSize: 11, fontWeight: 600 }}>
                {item.label}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <Box
        sx={{
          width: 90,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          background: "#fff",
          borderRight: "1px solid #eef2f7",
          display: { xs: "none", md: "block" },
          zIndex: 1000,
        }}
      >
        <SidebarContent />
      </Box>

      {/* MOBILE SIDEBAR */}
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
          },
        }}
      >
        <SidebarContent onItemClick={onClose} />
      </Drawer>
    </>
  );
}
