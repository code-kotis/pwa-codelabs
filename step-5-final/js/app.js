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
	var headerElement = document.querySelector('.header');
	var menuHeaderElement = document.querySelector('.menu__header');
	var fabElement = document.querySelector('.main__fab');

	function fetchGithubInfo(userInput) {
		var username = userInput || localStorage.getItem('username') || 'gokulkrishh';
		
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

	//Once the DOM is loaded, check for connectivity
	document.addEventListener('DOMContentLoaded', function(event) { 
		if (!navigator.onLine) {
			goOffline();
		}

		//Offline event listener
		window.addEventListener("offline", function () {
			goOffline();
		});
		
		//Online event listener
		window.addEventListener("online", function () {
			goOnline()
		});
	});

	function goOffline() {
		headerElement.style.background = '#9E9E9E';
		menuHeaderElement.style.background = '#9E9E9E';
		fabElement.style.background = '#9E9E9E';
	}

	function goOnline() {
		headerElement.style.background = '';
		menuHeaderElement.style.background = '';
		fabElement.style.background = '';
	}

	//To hide dialog
	function hideDialog() {
		dialogElement.classList.add('dialog--hide');
	}

	//Show add card dialog
	addCardElement.addEventListener('click', function () {
		if (navigator.onLine) {
			dialogElement.classList.remove('dialog--hide');
		}
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