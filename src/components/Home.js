import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Home() {
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirm: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submit migration')
        try {
            const res = await axios.post(
                'http://localhost:3001/migrate',
                // form,
            );
            if (res.status === 201) {
                console.log('success');
                // navigate('/login', {
                //     message: 'Your account has been created now you can login now',
                // });
            }
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    
    }

    return (
        <Container>
        <Box style={{ margin: 20, padding: 20, alignItems: "center", backgroundColor: "#E9E7EF", }}>
        <Typography sx={{ p: 1, color:"red" }}>{errorMessage}</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#285430', maxWidth: "20%" }}
                    >
                        Migrate
                    </Button>
                </Box>
             </Box> 
        </Container>

    )
}