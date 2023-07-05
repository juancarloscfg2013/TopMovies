
import {useEffect, useState} from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header';
import {useDispatch, useSelector} from 'react-redux';
import { obtenerPopularAction, obtenerDetallesAction } from './redux/movies';
import "./App.css";
import { dark } from '@mui/material/styles/createPalette';
import MoviesImageList from './components/movieImage';
import Details from './components/Details';


const defaultTheme = createTheme( dark);

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         topmovies.com
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

function App() {

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies.array);
  const details = useSelector(store => store.movies.detail);

  const onClickHandler = async (id) => {
    await dispatch(obtenerDetallesAction(id));
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    dispatch(obtenerPopularAction());
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
    
    <Header/>
      
        {/* <ImageList  variant="quilted" cols={10} rows={1} gap={2}>
          { movies !== null ? 
          movies.map((movie, index) =>(
            
              <MovieCard key={index} title={movie.title} backdrop_path={movie.backdrop_path} />
           
          ))
           : null}
         </ImageList> */}
         {open && <Details open={open} data={details} handleClose={handleClose}/>}

         { movies !== null ? <MoviesImageList itemData={movies} onClickHandler={onClickHandler}/> : null}
        
        
     

      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Top Movies
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          The best movie experience!
        </Typography>
        <Copyright />
      </Box> */}
      
    </ThemeProvider>
  )
}

export default App
