import React from 'react';
import { Box, Grid, Paper, styled, Typography, ImageList, ImageListItem, Stack, Avatar } from '@mui/material';
import Asd from '../images/Asd.jpg';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

function Home() {
	return (
		<Box sx={{ p: 10 }}>
			<Stack direction="row" spacing={2}></Stack>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Avatar src={Asd} alt={'Asd'} sx={{ width: 300, height: 300 }} />
				</Grid>
				<Grid item xs={8}>
					<Typography variant="p" component="p">
						สวัสดี! ผม
					</Typography>
					<Typography variant="h4" component="h3">
						นายภาณุมาศ อาจชนะศึก
					</Typography>
					<p>นักพัฒนาเว็บไซต์ Font - End</p>
				</Grid>
			</Grid>
		</Box>
	);
}
export default Home;
