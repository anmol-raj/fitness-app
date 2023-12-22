import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
      p={"20px"}
    >
      <Typography
        color={"#ff2625"}
        fontWeight={"600"}
        sx={{
          fontSize: { lg: "24px", sm: "22px", xs: "18px" },
          width: { lg: "500px", md: "300px", xs: "250px" },
        }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          //   mt: { lg: "30px", xs: "16px" },
          mb: { lg: "23px", xs: "13px" },
          fontSize: { lg: "44px", sm: "32px", xs: "26px" },
          width: { lg: "500px", xs: "250px" },
        }}
      >
        Sweat, Smile and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ backgroundColor: "#ff2625", padding: "10px", boxShadow: "none" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
