import React, { useState } from 'react';
import { TextField, Button, Stack, Box, Typography } from '@mui/material';

function TokenGenerator() {
    const [blueTokens, setBlueTokens] = useState('');
    const [bluePrefix, setBluePrefix] = useState('');
    const [bluePerRow, setBluePerRow] = useState('');
    const [redTokens, setRedTokens] = useState('');
    const [redPrefix, setRedPrefix] = useState('');
    const [redPerRow, setRedPerRow] = useState('');
    const [tokens, setTokens] = useState({ blue: [], red: [] });

    const generateTokens = () => {
        const generateTokenList = (count, prefix) => Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`);
        setTokens({
            blue: generateTokenList(Number(blueTokens), bluePrefix),
            red: generateTokenList(Number(redTokens), redPrefix),
        });
    };

    const clearTokens = () => {
        setBlueTokens('');
        setBluePrefix('');
        setBluePerRow('');
        setRedTokens('');
        setRedPrefix('');
        setRedPerRow('');
        setTokens({ blue: [], red: [] });
    };

    const renderTokenBox = (token, color) => (
        <Box key={token} sx={{
            bgcolor: color,
            color: 'white',
            textAlign: 'center',
            p: 2,
        }}>
            {token}
        </Box>
    );

    return (
        <Box sx={{ px: 20, py: 3 }}>
            <Typography variant="h4" gutterBottom>
                Token Generator
            </Typography>
            <Stack>
                <TextField sx={{ my: 1 }} label="Number of blue tokens" type="number" fullWidth value={blueTokens} onChange={(e) => setBlueTokens(e.target.value)} />
                <TextField sx={{ my: 1 }} label="Blue token prefix" fullWidth value={bluePrefix} onChange={(e) => setBluePrefix(e.target.value)} />
                <TextField sx={{ my: 1 }} label="Blue tokens per row" type="number" fullWidth value={bluePerRow} onChange={(e) => setBluePerRow(e.target.value)} />
                <TextField sx={{ my: 1 }} label="Number of red tokens" type="number" fullWidth value={redTokens} onChange={(e) => setRedTokens(e.target.value)} />
                <TextField sx={{ my: 1 }} label="Red token prefix" fullWidth value={redPrefix} onChange={(e) => setRedPrefix(e.target.value)} />
                <TextField sx={{ my: 1 }} label="Red tokens per row" type="number" fullWidth value={redPerRow} onChange={(e) => setRedPerRow(e.target.value)} />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ mb: 3 }}>
                <Button variant="contained" fullWidth onClick={generateTokens}>Generate</Button>
                <Button variant="outlined" fullWidth onClick={clearTokens}>Clear</Button>
            </Stack>
            <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${bluePerRow || 1}, 1fr)`, gap: 2, mt: 2 }}>
                {tokens.blue.map(token => renderTokenBox(token, 'blue'))}
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${redPerRow || 1}, 1fr)`, gap: 2, mt: 2 }}>
                {tokens.red.map(token => renderTokenBox(token, 'red'))}
            </Box>
        </Box>
    );
}

export default TokenGenerator;
