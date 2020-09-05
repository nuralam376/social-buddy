import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
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
