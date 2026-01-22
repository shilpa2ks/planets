import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ListOptionsProps } from "../types";
import styles from "./styles.module.scss";

const ButtonOptions = ({
  selectedIndex,
  handleListItemClick,
}: ListOptionsProps): JSX.Element => {
  const { buttonGroup } = styles;

  return (
    <Box>
      <ButtonGroup
        variant="text"
        size="large"
        className={buttonGroup}
        fullWidth
      >
        <Button onClick={() => handleListItemClick(0)} key="0">
          OVERVIEW
        </Button>
        <Button onClick={() => handleListItemClick(1)} key="1">
          INTERNAL STRUCTURE
        </Button>
        <Button onClick={() => handleListItemClick(2)} key="2">
          SURFACE GEOLOGY
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ButtonOptions;
