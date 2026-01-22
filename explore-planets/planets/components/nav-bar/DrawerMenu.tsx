import { useState, useMemo, useCallback } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import { planets } from "@/data/planets";
import NavLink from "./NavLink";
import styles from "./styles.module.scss";

const DrawerMenu = (): JSX.Element => {
  const { drawerContainer } = styles;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const DrawerList = useMemo(
    () => (
      <Box
        className={drawerContainer}
        role="presentation"
        onClick={handleClose}
      >
        <List>
          {planets.map((planet) => (
            <ListItem key={planet.id} disablePadding>
              <ListItemButton>
                <Box display="flex" alignItems="center" width="100%">
                  <CircleIcon
                    sx={{
                      fontSize: "20px",
                      color: planet.color,
                    }}
                  />
                  <NavLink key={planet.id} planetName={planet.name} />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    [handleClose],
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={handleClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
