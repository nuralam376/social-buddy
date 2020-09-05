import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const [user, setUser] = useState({});
	const [comments, setComments] = useState([]);

	const { userId, title, body } = post;
	const { name } = user;

	useEffect(() => {
		// Fetches the post of the selected id
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.json())
			.then((data) => setPost(data))
			.catch((error) => alert(error));

		// Retrieves the user of the post
		if (userId) {
			fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then((response) => response.json())
				.then((data) => setUser(data))
				.catch((error) => alert(error));

			// Retrieves the comments of the post
			fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
				.then((response) => response.json())
				.then((data) => setComments(data))
				.catch((error) => alert(error));
		}
	}, [postId, userId]);

	return (
		<div>
			<h2>{title}</h2>
			<p>Posted By - {name}</p>
			<p>{body}</p>

			<br />
			<br />

			<h4>Comments</h4>

			{comments.map((comment) => (
				<Comments key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default PostDetails;
