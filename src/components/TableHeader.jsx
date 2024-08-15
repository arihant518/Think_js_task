import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

function TableHeader() {
  return (
    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          PRIMARY DATA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Parchment be turns stand veela fawkes mistletoe snare drops.
        </Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{backgroundColor:'rgb(236,243,237)', color:'#3F9A4D', fontWeight:'bold'}} startIcon={<PlaylistAddIcon />}>
          Add Service
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgb(236,243,237)', color:'#3F9A4D', fontWeight:'bold'}} startIcon={<PlaylistAddIcon />}>
          Add Houk Service
        </Button>
      </Stack>
    </Box>
  );
}

export default TableHeader;

