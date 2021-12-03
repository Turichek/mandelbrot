import { Container, Paper, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import PaintField from './components/PaintField';

function App() {
  const [scale, setScale] = useState(4);
  const [shiftX, setShiftX] = useState(1800);
  const [shiftY, setShiftY] = useState(1800);
  const [disabled, setDisabled] = useState(false);

  const values={
    scale,
    shiftX,
    shiftY,
    setDisabled,
  }

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 1 }}>
      <Box sx={{ m: 2 }}>
        <TextField disabled={disabled} label='Scale' type='number' value={scale} onChange={(e) => setScale(e.target.value)} />
        <TextField disabled={disabled} sx={{ my: 2 }} label='ShiftX' type='number' value={shiftX} onChange={(e) => setShiftX(e.target.value)} />
        <TextField disabled={disabled} label='ShiftY' type='number' value={shiftY} onChange={(e) => setShiftY(e.target.value)} />
      </Box>
      <Paper elevation={4} sx={{ borderRadius: '0px' }}>
        <PaintField values={values} />
      </Paper>
    </Container>
  );
}

export default App;
