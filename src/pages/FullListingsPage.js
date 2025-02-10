import { Box, Pagination, Typography } from "@mui/material";
import ListingsContainer from "../components/ListingContainer";

const listings = [
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"},
  {image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg", title:"Mariachi San Luis", location:"San Luis Obispo, CA", rating:"4.9", price:"$800 / Day"}
];

function FullListingsPage() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', marginY: 2}}>
      <Typography fontSize='40px' fontWeight='bold'>Full Listings Page</Typography>
      <ListingsContainer listings={listings} />
      <Pagination 
        count={10} 
        size="large" 
        sx={{
          marginTop: 3,
          '& .Mui-selected': {
            backgroundColor: '#932F6D',
            color: '#fff',
          },
          '& .Mui-selected:hover': {
            backgroundColor: '#7a2558',
          }
        }}
      />
    </Box>
  );
};

export default FullListingsPage;