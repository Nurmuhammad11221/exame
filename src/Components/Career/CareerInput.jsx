import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const CareerInput = () => {
    const inputSx = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: '1px solid #4F46E5' },
            borderRadius: '2px',
        },
        '& .MuiInputBase-input': { padding: '20px 25px' },
        width: { xs: '100%', md: 'calc(50% - 10px)' }
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh', 
            bgcolor: '#F2F5F9', 
            p: 2 
        }}>
            
            <Box sx={{ 
                p: { xs: 3, md: 6 }, 
                maxWidth: '900px', 
                width: '100%', 
                bgcolor: 'white', 
                borderRadius: '4px' 
            }}>
                
                <h1 style={{ 
                    fontSize: '32px', 
                    fontWeight: 'bold', 
                    marginBottom: '40px', 
                    fontFamily: 'sans-serif', 
                    color: '#1D2130' 
                }}>
                    Apply Now
                </h1>

                <Box
                    component="form"
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '20px' 
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField placeholder="First Name" variant="outlined" sx={inputSx} />
                    <TextField placeholder="Last Name" variant="outlined" sx={inputSx} />
                    <TextField placeholder="Email Id" variant="outlined" sx={inputSx} />
                    <TextField placeholder="Mobile No" variant="outlined" sx={inputSx} />
                    
                    <TextField
                        placeholder="Why do you thing you are good fit for Ether?"
                        multiline
                        rows={6}
                        fullWidth
                        sx={{ 
                            width: '100% !important',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#F8F9FF',
                                '& fieldset': { border: 'none' }
                            }
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 4, mb: 4 }}>
                    <Checkbox 
                        {...label} 
                        defaultChecked 
                        sx={{ 
                            p: 0, 
                            color: '#4F46E5', 
                            '&.Mui-checked': { color: '#4F46E5' } 
                        }} 
                    />
                    <p style={{ 
                        margin: '0 0 0 15px', 
                        fontSize: '14px', 
                        color: '#4B5563', 
                        lineHeight: '1.6',
                        fontFamily: 'sans-serif'
                    }}>
                        I agree to accept the privacy policy, We will add your contact details 
                        provided in this form to our system for contacting you regarding your request.
                    </p>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#4F46E5',
                        textTransform: 'none',
                        padding: '12px 35px',
                        fontSize: '16px',
                        borderRadius: '2px',
                        boxShadow: 'none',
                        '&:hover': { backgroundColor: '#4338CA', boxShadow: 'none' }
                    }}
                >
                    Submit Application  <span>→</span>
                </Button>
            </Box>
        </Box>
    );
}

export default CareerInput;