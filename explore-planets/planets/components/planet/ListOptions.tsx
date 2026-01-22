import { memo, useMemo } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { SelectionOptionProps } from "../types";

const ListOptions = memo(({
  color,
  selectedIndex,
  handleListItemClick,
}: SelectionOptionProps): JSX.Element => {
  const listSx = useMemo(
    () => ({
      ".Mui-selected, .MuiListItemButton-root:hover": {
        backgroundColor: `${color} !important`,
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
    }),
    [color]
  );

  return (
    <List component="nav" sx={listSx}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={() => handleListItemClick(0)}
      >
        <ListItemText primary="OVERVIEW" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={() => handleListItemClick(1)}
      >
        <ListItemText primary="INTERNAL STRUCTURE" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={() => handleListItemClick(2)}
      >
        <ListItemText primary="SURFACE GEOLOGY" />
      </ListItemButton>
    </List>
  );
});

ListOptions.displayName = "ListOptions";

export default ListOptions;
