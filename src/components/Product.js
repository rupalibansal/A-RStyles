import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Product(props) {
  const { image, name, price } = props.productData;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="450" image={image} />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          ${price}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export { Product };
