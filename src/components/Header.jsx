import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"; // For green dot
import UpdateIcon from "@mui/icons-material/Update";
import AutorenewIcon from '@mui/icons-material/Autorenew';
export const Header = () => {
  return (
    <div>
      <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid #ddd", // Optional border for separation
      }}
    >
      {/* Left side tabs */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "48px", marginLeft:'12px' }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#DDF2D1",
            color: "black",
            padding: "6px 12px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "none", 
            display: "flex",
            alignItems: "center",
            gap: "8px",
            "&:hover": {
              backgroundColor: "#c0e4b1",
            },
          }}
        >
          <FiberManualRecordIcon
            sx={{ fontSize: "12px", color: "#004900" }}
          />
          PRIMARY
        </Button>
        <Typography sx={{ fontSize: "14px", color: "grey" }}>
          <FiberManualRecordIcon
            sx={{ fontSize: "8px", color: "#bbb", mr: "4px" }}
          />
          SECONDARY
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "grey" }}>
          <FiberManualRecordIcon
            sx={{ fontSize: "8px", color: "#bbb", mr: "4px" }}
          />
          THIRDLY
        </Typography>
      </Box>

      {/* Right side buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px", marginRight:'12px' }}>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderColor: "#c0e4b1",
            color: "black",
            padding: "6px 12px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            "&:hover": {
              borderColor: "#a2d49b",
              backgroundColor: "#f1f8e9",
            },
          }}
        >
          <UpdateIcon sx={{ fontSize: "16px", color: "black" }} />
          Update Data BD
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#004900",
            color: "white",
            padding: "6px 12px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "none", // Remove box shadow
            "&:hover": {
              backgroundColor: "#003600",
            },
          }}
        >
          <AutorenewIcon sx={{ fontSize: "16px", color: "white" }} />
          Update Inventory
        </Button>
      </Box>
    </Box>
    </div>
  );
};
