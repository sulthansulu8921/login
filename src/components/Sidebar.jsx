import { useState } from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import "../styles/sidebar.css";

const menu = [
  { label: "Dashboard", icon: DashboardOutlinedIcon },
  { label: "Leads", icon: PeopleAltOutlinedIcon },
  { label: "Companies", icon: BusinessCenterOutlinedIcon },
  { label: "Deals", icon: AssignmentTurnedInOutlinedIcon },
  { label: "Tickets", icon: ConfirmationNumberOutlinedIcon },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0); // ✅ active state

  return (
    <Box
      sx={{
        width: 100,
        height: "120vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #eef2f7",
        pt: 3,
        marginTop: "50px",
      }}
    >
      <List>
        {menu.map((item, index) => {
          const Icon = item.icon;
          const active = index === activeIndex;

          return (
            <ListItem
              key={index}
              onClick={() => setActiveIndex(index)} // ✅ click
              sx={{
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
                cursor: "pointer",
              }}
            >
              {/* ICON CIRCLE */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: active ? "none" : "1px solid #e7ecf3",
                  background: active
                    ? "linear-gradient(135deg, #5b5ce2, #7a6ff0)"
                    : "transparent",
                }}
              >
                <Icon
                  sx={{
                    fontSize: 20,
                    color: active ? "#ffffff" : "#8f9bad",
                  }}
                />
              </Box>

              {/* TEXT */}
              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: 10,
                  fontWeight: active ? 600 : 500,
                  color: active ? "#1f2a44" : "#0f1f3d",
                }}
              >
                {item.label}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
