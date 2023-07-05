import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MoviesImageList({itemData, onClickHandler}) {
  return (
    <ImageList
    sx={{
      marginTop: 10,
    }}
      rowHeight={200}
      gap={10}
      cols={5}
    >
      {itemData.map((item) => {
        const cols = 1;
        const rows = 1;
        return (
          <ImageListItem key={item.backdrop_path} onClick={() => onClickHandler(item.id)} cols={cols} rows={rows} sx={{ padding: 0.5, "&:hover": {
            transform: 'scale(1.1)',
            opacity: .5,
            transition: "all 150ms ease-in-out",
          },}}>
            <img
              {...srcset(`https://image.tmdb.org/t/p/w300${item.backdrop_path}`, 220, 450, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                  <Rating sx={{ color: 'yellow'}} 
                  aria-label={`star ${item.title}`} name="half-rating-read" defaultValue={item.vote_average/2} precision={0.5} readOnly />
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

