import { Card, CardMedia } from "@mui/material";
import "./card.css";
const MovieCard = ({title, backdrop_path}) => {
    return (
        <Card sx={{ maxWidth: 500 }} className="card">
            <CardMedia
                component="img"
                height="194"
                image={`https://image.tmdb.org/t/p/w220_and_h330_face${backdrop_path}`}
                alt={title}
                
            />
            <h5 style={{ textAlign: "center"}}>{title}</h5>
        </Card>
    );
};

export default MovieCard;