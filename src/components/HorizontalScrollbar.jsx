/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Stack>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </Stack>
  );
};

export default HorizontalScrollbar;
