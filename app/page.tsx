import React from 'react';
import ButtonGroup from '../components/CustomButtonGroup'; // Ensure the import path is correct
import { Box } from '@mui/material';

import Grid from '@mui/material/Grid';



const Home: React.FC = () => {
  return (



    <>
      <Box display="flex" alignItems="center" p={4} >
        <ButtonGroup size="small" />
        <ButtonGroup size="medium" />
        <ButtonGroup size="large" />
      </Box>
      <Box display="flex" alignItems="center" p={4}>
        <ButtonGroup size="small" disabled />
        <ButtonGroup size="medium" disabled />
        <ButtonGroup size="large" disabled />
      </Box>
    </>


  );
};

export default Home;

