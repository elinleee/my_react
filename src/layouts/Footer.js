import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

import './Footer.css';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  }));

  return (
    <Box className="footer" width="100vw" height="200px">
      <Grid container spacing={2} width="720px" margin="0 auto">
      <Grid item xs={4}>
          <Item>
          <h5>예배 실황</h5>
              <p>
                <a href='#!' className='text-reset'>
                  주일예배
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  수요예배
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  쉴하쉬림
                </a>
              </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <h5>예배 실황</h5>
              <p>
                <a href='#!' className='text-reset'>
                  주일예배
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  수요예배
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  쉴하쉬림
                </a>
              </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <h5>CONTACT</h5>
              <p>
                <a href='#!' className='text-reset'>
                  서울특별시 강동구 천호대로 1212-6 석천교회
                </a>
              </p>
              <p>
                <a href='https://www.youtube.com/channel/UCJUsz3WJ3aLVO1vMEDIDsEQ' className='text-reset'>
                 하늘가족석천교회
                </a>
              </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;