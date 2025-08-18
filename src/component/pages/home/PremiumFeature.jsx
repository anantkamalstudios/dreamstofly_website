// import React from 'react';
// import { Card, Typography, List, ListItem, ListItemIcon, Button, Box, Grid } from '@mui/material';
// import { CheckCircle, FlightTakeoff, School, Description, LocalHospital, Hotel, AirportShuttle } from '@mui/icons-material';

// const PremiumFeature = () => {
//     return (
//         <Box sx={{ py: 6, px: 2, backgroundColor: '#f5f9ff' }}>
//             <Grid container justifyContent="center">
//                 <Grid item xs={12} md={10} lg={8}>
//                     <Card sx={{ p: 4, borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
//                         <Typography
//                             variant="h3"
//                             component="h2"
//                             gutterBottom
//                             sx={{
//                                 fontWeight: 700,
//                                 color: '#2a4365',
//                                 textAlign: 'center',
//                                 mb: 4
//                             }}
//                         >
//                             Premium Study Abroad Assistance
//                         </Typography>

//                         <Grid container spacing={4}>
//                             <Grid item xs={12} md={6}>
//                                 <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#3182ce' }}>
//                                     Comprehensive Support for Your Journey
//                                 </Typography>

//                                 <Typography variant="body1" paragraph sx={{ color: '#4a5568', lineHeight: 1.7 }}>
//                                     We provide end-to-end assistance in our premium feature from shortlisting your universities to helping you with your SOPs, LORs and finding scholarships.
//                                 </Typography>

//                                 <List>
//                                     <ListItem sx={{ px: 0 }}>
//                                         <ListItemIcon sx={{ minWidth: 36 }}>
//                                             <CheckCircle color="primary" />
//                                         </ListItemIcon>
//                                         <Typography>University shortlisting</Typography>
//                                     </ListItem>
//                                     <ListItem sx={{ px: 0 }}>
//                                         <ListItemIcon sx={{ minWidth: 36 }}>
//                                             <CheckCircle color="primary" />
//                                         </ListItemIcon>
//                                         <Typography>SOP & LOR assistance</Typography>
//                                     </ListItem>
//                                     <ListItem sx={{ px: 0 }}>
//                                         <ListItemIcon sx={{ minWidth: 36 }}>
//                                             <CheckCircle color="primary" />
//                                         </ListItemIcon>
//                                         <Typography>Scholarship guidance</Typography>
//                                     </ListItem>
//                                 </List>
//                             </Grid>

//                             <Grid item xs={12} md={6}>
//                                 <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#3182ce' }}>
//                                     Settlement Support at Your New Destination
//                                 </Typography>

//                                 <Typography variant="body1" paragraph sx={{ color: '#4a5568', lineHeight: 1.7 }}>
//                                     We help you settle abroad at your new destination by providing guidance on accommodation, airport transfers, and medical support.
//                                 </Typography>

//                                 <Grid container spacing={2} sx={{ mt: 2 }}>
//                                     <Grid item xs={6}>
//                                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                             <Hotel color="primary" sx={{ mr: 1 }} />
//                                             <Typography>Accommodation</Typography>
//                                         </Box>
//                                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                             <AirportShuttle color="primary" sx={{ mr: 1 }} />
//                                             <Typography>Airport Meet & Greet</Typography>
//                                         </Box>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                                             <LocalHospital color="primary" sx={{ mr: 1 }} />
//                                             <Typography>Medical Support</Typography>
//                                         </Box>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Grid>

//                         <Box sx={{ textAlign: 'center', mt: 5 }}>
//                             <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
//                                 Our premium feature is something not to be missed
//                             </Typography>
//                             <Button
//                                 variant="contained"
//                                 size="large"
//                                 endIcon={<FlightTakeoff />}
//                                 sx={{
//                                     px: 5,
//                                     py: 1.5,
//                                     borderRadius: 2,
//                                     fontWeight: 600,
//                                     fontSize: '1.1rem',
//                                     background: 'linear-gradient(45deg, #3182ce 30%, #63b3ed 90%)',
//                                     boxShadow: '0 3px 5px 2px rgba(49, 130, 206, .3)',
//                                     '&:hover': {
//                                         background: 'linear-gradient(45deg, #2c5282 30%, #4299e1 90%)',
//                                     }
//                                 }}
//                             >
//                                 Get On Board Today
//                             </Button>
//                         </Box>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default PremiumFeature;
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function PremiumFeature() {
    // Feature content (can add more if needed)
    const premiumData = [
        {
            id: 1,
            title: "Premium Feature !",
            description: `We provide end to end assistance in our premium feature from 
      shortlisting your universities to helping you write your SOPs, LORs and finding 
      scholarships, we cater to all your study abroad needs! That’s not it, we shall also 
      help you settle abroad at the new destination by providing you allround guidance on 
      accommodation, meet & greet at the airport and medical support at the new destination. 
      Thus the premium feature is something not to be missed.`,
            buttonText: "Get On Board Today",
            buttonIcon: <FaTelegramPlane className="text-lg" />,
            bgImage:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80", // replace with your bg img
        },
    ];

    return (
        <>
            {premiumData.map((item) => (
                <section
                    key={item.id}
                    className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative text-center max-w-3xl px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#ff7a00]  mb-4">
                            {item.title}
                        </h2>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-6">
                            {item.description}
                        </p>
                        <button className="bg-[#ff7a00] hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 mx-auto shadow-lg">
                            {item.buttonText} {item.buttonIcon}
                        </button>
                    </div>
                </section>
            ))}
        </>
    );
}
