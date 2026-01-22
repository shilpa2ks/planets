import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { SelectionOptionProps } from "../types";
import styles from "./styles.module.scss";

const BUTTON_OPTIONS = [
  { index: 0, label: "OVERVIEW" },
  { index: 1, label: "INTERNAL STRUCTURE" },
  { index: 2, label: "SURFACE GEOLOGY" },
];

const ButtonOptions = ({
  color,
  selectedIndex,
  handleListItemClick,
}: SelectionOptionProps): JSX.Element => {
  const { buttonGroup } = styles;

  const getButtonStyles = (index: number) => ({
    backgroundColor:
      selectedIndex === index ? `${color} !important` : undefined,
    color: "#FFFFFF",
    border: "0 !important",
  });

  return (
    <Box>
      <ButtonGroup
        variant="text"
        size="large"
        className={buttonGroup}
        fullWidth
      >
        {BUTTON_OPTIONS.map(({ index, label }) => (
          <Button
            key={index}
            onClick={() => handleListItemClick(index)}
            sx={getButtonStyles(index)}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ButtonOptions;
