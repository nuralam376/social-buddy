import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const [user, setUser] = useState({});

	const { id, userId, title, body } = post;
	const { name } = user;

	useEffect(() => {
		// Fetches the post of the selected id
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.json())
			.then((data) => setPost(data));

		// Retrieves the user of the post
		if (userId) {
			fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then((response) => response.json())
				.then((data) => setUser(data));
		}
	}, [postId, userId]);

	return (
		<div>
			<h2>{title}</h2>
			<p>Posted By - {name}</p>
			<p>{body}</p>
		</div>
	);
};

export default PostDetails;
