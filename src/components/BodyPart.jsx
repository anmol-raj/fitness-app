import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, BodyPart }) => {
  return (
    <Stack
      type={"button"}
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={
        BodyPart === item
          ? {
              borderTop: "4px solid #ff2625",
              borderColor: "#fff",
            }
          : ""
      }
    >
      <img src={Icon} alt="icon" />
      <Typography>BodyPart</Typography>
    </Stack>
  );
};

export default BodyPart;
