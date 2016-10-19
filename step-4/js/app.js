(function () {

	var githubCard = document.querySelector(".github__card");
	var avatarElement = githubCard.querySelector(".github__header img");
	var nameElement = githubCard.querySelector(".name span");
	var bioElement = githubCard.querySelector(".bio .text");
	var locationElement = githubCard.querySelector(".location span");
	var repoElement = githubCard.querySelector(".repos .text");
	var followersElement = githubCard.querySelector(".followers .text");
	var followingElement = githubCard.querySelector(".following .text");

	fetch('https://api.github.com/users/gokulkrishh')
		.then(function (response){
			return response.json()
		})
		.then(function (data) {
			avatarElement.src = data.avatar_url;
			nameElement.textContent = data.name;
			bioElement.textContent = data.bio;
			locationElement.textContent = data.location;
			repoElement.textContent = data.public_repos;
			followersElement.textContent = data.followers;
			followingElement.textContent = data.following;
		})
		.catch(function (error) {
			console.error("Error in fetching data ", error);
		});
})();