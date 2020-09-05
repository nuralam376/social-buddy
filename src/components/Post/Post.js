import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	makeStyles,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles({
	card: {
		width: "25%",
		margin: "1%",
		padding: "2%",
	},
	id: {
		fontSize: 20,
		textAlign: "center",
	},
	title: {
		fontSize: 25,
		marginBottom: "20px",
		color: "lightcoral",
	},
});

const Post = ({ post }) => {
	const classes = useStyles();

	const { id, title, body } = post;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.id} color="textSecondary" gutterBottom>
					{id}
				</Typography>
				<Typography variant="h4" className={classes.title} component="h4">
					{title}
				</Typography>

				<Typography variant="body2" component="p">
					{body.slice(0, 50)} ......
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					color="primary"
					style={{ textAlign: "center", margin: "auto" }}
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
