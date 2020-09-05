import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Social Buddy
					</Typography>
					<Button color="inherit">Home</Button>
					<Button color="inherit">Posts</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
