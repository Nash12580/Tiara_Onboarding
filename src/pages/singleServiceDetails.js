import { Box } from "@mui/material";
import DetailsCard from "../components/DetailsCard";
import Footer from "../components/Footer";
import HeaderBar from "../components/Header";
import DetailsImages from "../components/DetailsImages";
import DetailsDescription from "../components/DetailsDescription";
import ReviewsGrid from "../components/ReviewsGrid";

const reviewsData = [
  { profileImage: 'https://via.placeholder.com/56', rating: 4.5, name: 'John Doe', date: '2023-08-21', review: 'This is a fantastic product!' },
  { profileImage: 'https://via.placeholder.com/56', rating: 5, name: 'Jane Smith', date: '2023-08-20', review: 'Incredible experience!' },
  { profileImage: 'https://via.placeholder.com/56', rating: 4, name: 'Mike Johnson', date: '2023-08-19', review: 'Pretty good, but room for improvement.' },
  { profileImage: 'https://via.placeholder.com/56', rating: 3.5, name: 'Lisa Williams', date: '2023-08-18', review: 'Average product.' },
  { profileImage: 'https://via.placeholder.com/56', rating: 2, name: 'Bob Brown', date: '2023-08-17', review: 'Not what I expected.' },
];

const images = [
  'https://via.placeholder.com/1000x700',
  'https://via.placeholder.com/800x600',
  'https://via.placeholder.com/800x600',
  'https://via.placeholder.com/800x800',
  'https://via.placeholder.com/600x600',
  'https://via.placeholder.com/500x500',
];

function SingleServiceDetails() {
  return (
    <>
      <HeaderBar />
      <Box sx={{ width: '90%', paddingTop: '85px', margin: '0 auto' }}>
        <DetailsCard
            name="Beautiful Home"
            cityState="Los Angeles, CA"
            price="$1,200,000"
            rating={4.8}
            imageUrl="https://via.placeholder.com/1000x600"
        />
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '20px' }}>
        <DetailsImages images={images}/>
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '50px' }}>
        <DetailsDescription />
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
        <ReviewsGrid reviews={reviewsData} />
      </Box>
      <Footer />
    </>
  );
}

export default SingleServiceDetails;