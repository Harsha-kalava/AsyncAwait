let posts = [
	{
		title: "Post One",
		body: "This is Post one",
		createdAt: new Date().getTime(),
	},
	{
		title: "Post Two",
		body: "This is Post Two",
		createdAt: new Date().getTime(),
	},
];

function getPosts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let output = "";
			posts.forEach((post) => {
				output += `<li>${post.title} -last updated ${
					(new Date().getTime() - post.createdAt) / 1000
				} seconds ago</li>`;
			});
			resolve(posts);
			document.body.innerHTML = output;
		}, 1000);
	});
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push({ ...post, createdAt: new Date().getTime() });
			const error = false;
			if (!error) {
				resolve(post);
			} else {
				reject("Error:Something went wrong");
			}
		}, 1000);
	});
}

function deletePost() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (posts.length > 0) {
				const deletedItem = posts.pop();
				resolve(deletedItem);
			} else {
				reject("No item present in the array");
			}
		}, 1000);
	});
}

async function pre1() {
	const postCreation = await createPost({
		title: "Post Three",
		body: "This is Post Three",
	});

	console.log(postCreation);

	const postgetting = await getPosts();
	console.log(postgetting);

	const postDeletion = await deletePost();
	console.log(postDeletion);

	const postsAfterDeleted = await getPosts();
	console.log(postsAfterDeleted);
}

pre1();

// ============ With Promise.all ==================
// let PromiseExecution = async () => {
// 	let promise = await Promise.all([
// 		createPost({
// 			title: "Post Three",
// 			body: "This is Post Three",
// 		}),

// 		getPosts(),

// 		deletePost(),

// 		getPosts(),
// 	]);
// 	console.log(promise);
// };

PromiseExecution();
