import { Box, Drawer, DrawerProps, Typography } from "@mui/material";
import { Font } from "../../shared/data";
import styles from '../../styles/Fonts.module.css';
import Image from "next/image";

interface FontDrawerProps extends DrawerProps {
  font: Font | undefined
}

const FontDrawer = (props: FontDrawerProps) => {

  const { font, ...restProps } = props;

  return (
    <Drawer {...restProps}
      open={!!font}>
      <Box sx={{ width: '30vw', padding: '20px' }}>

        <Typography variant='h4' align='center' fontWeight='bold'>
          {font?.nom}
        </Typography>

        {
          font?.fitxer &&
          <Box style={{ width: '100%', paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <Box style={{ width: '90%' }}>
              <Image src={`/fonts/${font?.fitxer}`} alt={font?.nom} width='100%' height='100%' layout='responsive' objectFit='contain'/>
            </Box>
          </Box>
        }

        {
          font?.descripcio &&
          <>
            <Typography variant='h6'>Descripció</Typography>
            <Typography className={styles.text}>{font?.descripcio}</Typography>
          </>
        }

        {
          font?.historia &&
          <>
            <Typography variant='h6'>Historia</Typography>
            <Typography className={styles.text}>{font?.historia}</Typography>
          </>
        }

        {
          font?.com &&
          <>
            <Typography variant='h6'>Com arribar-hi</Typography>
            <Typography className={styles.text}>{font?.com}</Typography>
          </>
        }

      </Box>
    </Drawer>
  )
}

export default FontDrawer;