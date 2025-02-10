import React, { useState } from 'react';
import { Avatar, Box, Button, Grid, Rating, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Review component
function Review ({ profileImage, rating, name, date, review }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 2}}>
      {/* Profile Image */}
      <Avatar alt={name} src={profileImage} sx={{ width: 56, height: 56, mr: 2 }} />
      
      {/* Review Content */}
      <Box sx={{ flex: 1 }}>
        {/* Rating */}
        <Rating name='read-only' value={rating} precision={0.5} readOnly />
        
        {/* Name and Date */}
        <Typography variant='body2' color='text.secondary'>
          {name} • {'October 1, 2023'}
        </Typography>
        
        {/* Review Text */}
        <Typography variant="body1" sx={{ mt: 1 }}>
          {review}
        </Typography>
      </Box>
    </Box>
  );
};

// FilteredReviewsList component
function FilteredReviewsList({ reviews, onClose }) {
  const [filterRating, setFilterRating] = useState(null);

  const handleFilter = (rating) => {
    setFilterRating(rating === filterRating ? null : rating);
  };

  const filteredReviews = filterRating 
    ? reviews.filter((review) => Math.floor(review.rating) === filterRating)
    : reviews;

  return (
    <Box sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: 4, mt: 2 }}>
      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        {[5, 4, 3, 2, 1].map((rating) => (
          <Button 
            key={rating}
            variant={filterRating === rating ? 'contained' : 'outlined'}
            onClick={() => handleFilter(rating)}
            sx={{ mx: 1 }}
          >
            {rating} Stars
          </Button>
        ))}
      </Box>

      {/* Filtered Reviews */}
      <Box>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Review {...review} />
            </Box>
          ))
        ) : (
          <Typography>No reviews found for the selected filter.</Typography>
        )}
      </Box>

      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="outlined" onClick={onClose}>Close</Button>
      </Box>
    </Box>
  );
};

function ReviewsGrid({ reviews }) {
  const [showFilteredReviews, setShowFilteredReviews] = useState(false);

  const handleMoreClick = () => {
    setShowFilteredReviews(true);
  };

  const handleClose = () => {
    setShowFilteredReviews(false);
  };

  return (
    <Box sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: 4 }}>
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>

      {/* Reviews Grid (2x2 layout) */}
      <Grid container spacing={2}>
        {reviews.slice(0, 4).map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Review {...review} />
          </Grid>
        ))}
      </Grid>

      {/* More Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          endIcon={<ChevronRightIcon />} 
          onClick={handleMoreClick}
        >
          More
        </Button>
      </Box>

      {/* Filtered Reviews Component */}
      {showFilteredReviews && (
        <FilteredReviewsList reviews={reviews} onClose={handleClose} />
      )}
    </Box>
  );
};

export default ReviewsGrid;