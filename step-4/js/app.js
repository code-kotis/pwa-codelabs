(function () {

	// Card Elements
	var githubCard = document.querySelector(".github__card");
	var avatarElement = githubCard.querySelector(".github__header img");
	var profileLinkElement = githubCard.querySelector(".github__header a");
	var githubBodyElement = githubCard.querySelector(".github__body-content");
	var nameElement = githubBodyElement.querySelector(".name span");
	var bioElement = githubBodyElement.querySelector(".bio .text");
	var locationElement = githubBodyElement.querySelector(".location span");
	var githubFooterElement = githubCard.querySelector(".github__footer-content");
	var repoElement = githubFooterElement.querySelector(".repos .text");
	var followersElement = githubFooterElement.querySelector(".followers .text");
	var followingElement = githubFooterElement.querySelector(".following .text");
	var addCardElement = document.querySelector(".main__fab");

	//Fetch API
	fetch('https://api.github.com/users/gokulkrishh').then(function (response) {
		return response.json();
	})
	.then(function (data) {
		if (data && data.message) {
			return false;
		}
		avatarElement.src = data.avatar_url;
		nameElement.textContent = data.name;
		bioElement.textContent = data.bio;
		locationElement.textContent = data.location;
		profileLinkElement.href = data.html_url;
		repoElement.textContent = data.public_repos;
		followersElement.textContent = data.followers;
		followingElement.textContent = data.following;
		githubFooterElement.classList.remove("hide");
		githubBodyElement.classList.remove("hide");
	})
	.catch(function (error) {
		console.error("Error in fetching data ", error);
	});

	//Add New Card
	addCardElement.addEventListener("click", function () {
		
	});
		
})();