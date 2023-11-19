import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import DetailsModal from './DetailsModal';
import '../../assets/styles/main.scss';
import { useState } from 'react';
import Loader from 'ui/loader/Loader';

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
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  return (
    <Card sx={{ boxShadow: 'none' }} className="product">
      <CardMedia sx={{ position: 'relative' }}>
        {promo && <div className="promo-label">Promo</div>}
        {imageLoading && (
          <div style={{ height: '170px' }}>
            <Loader />
          </div>
        )}
        <img
          src={image}
          alt="Product Image"
          style={{ width: '100%', height: '170px', objectFit: 'cover', display: imageLoading ? 'none' : 'block' }}
          onLoad={() => {
            setImageLoading(false);
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontSize: '18px' }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
          className="product-description"
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions className="product-actions">
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
