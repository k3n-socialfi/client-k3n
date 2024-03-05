// ** React Imports
"use client"
// ** MUI Imports
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Ratings = ( props: any) => {

  return (
      <Box sx={{ mb: 3 }}>
        <Rating
          {...props}
        />
      </Box>
  );
};

export default Ratings;
