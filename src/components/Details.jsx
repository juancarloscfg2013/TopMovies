import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';
import "./Details.css"


const Details = ({open, handleClose, data}) => {
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log('Detalles:', data);

    return(
        <div>
        <Dialog
          fullScreen={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
            opacity: 1,
          }}
          PaperProps={{
            style: {
              background: 'rgba( 255, 255, 255, 0.1 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 0px )',
              borderRadius: 10,
              border: '1px solid rgba( 255, 255, 255, 0.18 )',
              //textAlign: 'center',
              justifyContent: 'flex-start',
            },
          }}
          
        >
          <div className='div'>
            <DialogTitle id="responsive-dialog-title" sx={{color: 'yellow',fontSize: 50, fontWeight: 4}}>
              Title: {data?.original_title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText sx={{color: 'yellow',fontSize: 30, fontWeight: 4}}>
                {data?.overview}
              </DialogContentText>
              <DialogContentText sx={{color: 'yellow',fontSize: 30, fontWeight: 4}}>
              Release Date: { data?.release_date}
              
              {
              data?.genres.map((genero) => {
                <li>{genero.name}</li>
              })}
              
              </DialogContentText>
              <div className='container'>
                <img src={ `https://image.tmdb.org/t/p/w500${data.backdrop_path}`} loading='lazy'/>

                <Rating sx={{ color: 'yellow'}} 
                    aria-label={`star ${data.title}`} name="half-rating-read" defaultValue={data.vote_average/2} precision={0.5} readOnly />
              </div>
            </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
          </div>
        </Dialog>
      </div>
    );
};
export default Details;