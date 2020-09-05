import React from "react";

const Comments = ({ comment }) => {
	const { id, name, email, body } = comment;
	return (
		<div>
			<h2>{id}</h2>
			<h4>{name}</h4>
			<p>{email}</p>
			<p>{body}</p>
		</div>
	);
};

export default Comments;
