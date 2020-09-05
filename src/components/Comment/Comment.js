import React from "react";

const Comment = ({ comment, image }) => {
	const { name, email, body } = comment;

	return (
		<div>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<h4>{email}</h4>
			<p>{body}</p>
		</div>
	);
};

export default Comment;
