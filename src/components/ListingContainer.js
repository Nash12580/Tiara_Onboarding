import { Box, Grid } from "@mui/material";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const { listings } = props;
  return (
    <Box sx={{ flexGrow: 1, width:'95%'}}>
      <Grid container justifyContent="space-between">
        {listings.map((listing, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ListingCard {...listing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListingsContainer;