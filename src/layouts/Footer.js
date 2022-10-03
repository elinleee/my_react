import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

import './Footer.css';
import { FooterItem } from './FooterItem';

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
    <Box className="footer">
      <Grid container spacing={4} width='80vw' margin="0 auto" justifyContent='space-around'>
        {FooterItem.map((category, categoryIndex) => {
          return (
            <Grid item xs={category.size} key={categoryIndex}>
              <Item className="footer-category" sx={{backgroundColor:'transparent', boxShadow:'none'}}>
                <h5 className={category.cName}>{category.title}</h5>
                <ul className="footer-ul">
                {category.items.map((item, itemIndex) => {
                  return (
                    <li key={itemIndex}>
                      <a href={item.extraUrl?item.extraUrl:null} className={item.cName} target={item.extraUrl?"_blank":""}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
                </ul>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Footer;