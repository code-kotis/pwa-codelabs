(function () {
	// Card Elements
	var githubCard = document.querySelector('.github__card');
	var avatarElement = githubCard.querySelector('.github__header img');
	var profileLinkElement = githubCard.querySelector('.github__header a');
	var githubBodyElement = githubCard.querySelector('.github__body-content');
	var nameElement = githubBodyElement.querySelector('.name span');
	var bioElement = githubBodyElement.querySelector('.bio .text');
	var locationElement = githubBodyElement.querySelector('.location span');
	var githubFooterElement = githubCard.querySelector('.github__footer-content');
	var repoElement = githubFooterElement.querySelector('.repos .text');
	var followersElement = githubFooterElement.querySelector('.followers .text');
	var followingElement = githubFooterElement.querySelector('.following .text');
	var addCardElement = document.querySelector('.main__fab');
	var dialogElement = document.querySelector('.dialog');
	var dialogOverlayElement = document.querySelector('.dialog__overlay');
	var dialogInput = document.querySelector('.dialog__input');
	var dialogCloseBtn = document.querySelector('.dialog__close');
	var dialogInputBtn = document.querySelector('.dialog__add');

	function fetchGithubInfo(userInput) {
		var username = userInput || localStorage.getItem('username');
		
		//Fetch API
		fetch('https://api.github.com/users/' + username).then(function (response) {
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
			githubFooterElement.classList.remove('hide');
			githubBodyElement.classList.remove('hide');
		})
		.catch(function (error) {
			console.error('Error in fetching data ', error);
		});
	}

	fetchGithubInfo(); //Fetch the github data on load

	//To hide dialog
	function hideDialog() {
		dialogElement.classList.add('dialog--hide');
	}

	//Show add card dialog
	addCardElement.addEventListener('click', function () {
		dialogElement.classList.remove('dialog--hide');
	});

	//Cliking on the overlay to close the dialog
	dialogOverlayElement.addEventListener('click', function () {
		hideDialog();
	});

	//Close btn in dialog
	dialogCloseBtn.addEventListener('click', function () {
		hideDialog()
	});

	//To add a new card
	dialogInputBtn.addEventListener('click', function () {
		var userInput = dialogInput.value;
		if (!userInput) return; 

		fetchGithubInfo(userInput); //Send the username to fetch
		localStorage.setItem('username', userInput); //Storing the username in localstorage
		
		hideDialog(); //Hide the dialog
	});
})();