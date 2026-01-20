import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListOptionsProps } from "../types";

const ListOptions = ({
  selectedIndex,
  handleListItemClick,
}: ListOptionsProps) => {
  return (
    <List
      component="nav"
      sx={{
        ".Mui-selected, .MuiListItemButton-root:hover": {
          backgroundColor: "#419ebb !important",
        },
        ".MuiListItemButton-root": {
          height: "50px",
          border: "1px solid rgba(255, 255, 255, 0.26)",
          fontSize: ".9rem",
          margin: "10px 0",
          textAlign: "left",
          padding: "1rem",
          marginTop: "1rem",
        },
      }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemText primary="OVERVIEW" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemText primary="INTERNAL STRUCTURE" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemText primary="SURFACE GEOLOGY" />
      </ListItemButton>
    </List>
  );
};

export default ListOptions;
