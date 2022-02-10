import React from 'react';
import { Box, Grid, Paper, styled, Typography, Avatar, makeStyles } from '@mui/material';
import Profile from '../images/Profile2.jpg';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
}));

function Home() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Item>
				<Grid container spacing={{ xs: 0, md: 3 }} columns={{ md: 12 }}>
					<Grid item md={4}>
						<Avatar src={Profile} sx={{ width: '300px', height: '300px' }} />
					</Grid>

					<Grid item md={8}>
						<Typography variant="h3">12asdaasdasdsd3</Typography>
					</Grid>
				</Grid>
			</Item>
		</Box>
	);
}
export default Home;
