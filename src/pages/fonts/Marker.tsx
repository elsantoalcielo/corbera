import { MouseEventHandler } from 'react';
import { Font } from '../../shared/data';
import styles from '../../styles/Fonts.module.css';
import { Typography } from '@mui/material';

interface MarkerProps {
  lat: number,
  lng: number,
  font: Font,
  onClick: MouseEventHandler<HTMLDivElement>
}

const Marker = (props: MarkerProps) => {

  const { font } = props;

  return (
    <>
      <div className={styles.marker} onClick={props.onClick} />
      <Typography className={styles.markerText} onClick={props.onClick}>
        {font?.nom}
      </Typography>
    </>
  )
}

export default Marker;