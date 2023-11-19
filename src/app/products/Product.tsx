import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import DetailsModal from './DetailsModal';

export type TProduct = {
  active: true;
  name: string;
  description: string;
  id: string;
  image: string;
  promo: boolean;
  rating: number;
};

const Product = ({ name, description, image, promo, rating, active }: TProduct) => {
  return (
    <Card
      sx={{
        maxWidth: 288,
        height: 400,
        boxShadow: 'none',
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {promo && ( // Conditionally render promo label
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '16px',
            fontSize: '14px',
            backgroundColor: '#F9A52B',
            color: 'white',
            width: '75px',
            height: '24px',
          }}
        >
          Promo
        </div>
      )}
      <CardMedia sx={{ minHeight: 170 }} image={image} title="Product Image" />
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontSize: '18px' }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '14px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            maxHeight: '60px',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          mt: 'auto',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingX: '16px',
          width: '256px',
          // border: '1px solid black',
        }}
      >
        <Rating
          name="read-only"
          value={rating}
          readOnly
          sx={{ mb: 1, '& .MuiRating-icon': { margin: '0 2.21px' } }}
          size="small"
        />

        <DetailsModal image={image} description={description} name={name} active={active} />
      </CardActions>
    </Card>
  );
};

export default Product;
