import {ImageListItem, ImageList} from '@mui/material';
/* A React component that is returning a JSX element. */
export const ImageGalery = ({images}) => {
  if (!images) return
  return (
    <ImageList sx={{ width: 'auto', height: 450 }} cols={5} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}