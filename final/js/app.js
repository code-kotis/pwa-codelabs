(function () {
	// Fab & Dialog Elements
	var addCardElement = document.querySelector('.main__fab');
	var dialogElement = document.querySelector('.dialog');
	var dialogOverlayElement = document.querySelector('.dialog__overlay');
	var dialogInput = document.querySelector('.dialog__input');
	var dialogCloseBtn = document.querySelector('.dialog__close');
	var dialogInputBtn = document.querySelector('.dialog__add');
	var headerElement = document.querySelector('.header');
	var menuHeaderElement = document.querySelector('.menu__header');
	var fabElement = document.querySelector('.main__fab');
  var metaTagTheme = document.querySelector('meta[name=theme-color]');
  var loader = document.querySelector('.main__loader');
  var userNames = JSON.parse(localStorage.getItem('usernames'));

   //Show spinner
  function showSpinner() {
  	loader.classList.remove('hide');
  }

  //Hide spinner
  function hideSpinner() {
  	loader.classList.add('hide');
  }

	function fetchGithubInfo(username) {	
		showSpinner();

		//Fetch API
		fetch('https://api.github.com/users/' + username).then(function (response) {
			return response.json();
		})
		.then(function (data) {
			hideSpinner();

			if (data && data.message) {
				return false;
			}

			var newCard = document.querySelector('.github__card').cloneNode(true);
			var newCardBody = newCard.querySelector('.github__body-content');
			var newCardFooter = newCard.querySelector('.github__footer-content');

			newCard.querySelector('.github__header img').src = data.avatar_url;
			newCard.querySelector('.github__header a').href = data.html_url;
			newCardBody.querySelector('.name span').textContent = data.name;
			newCardBody.querySelector('.location span').textContent = data.location;
			newCardBody.querySelector('.bio .text').textContent = data.bio;
			newCardFooter.querySelector('.repos .text').textContent = data.public_repos;
			newCardFooter.querySelector('.followers .text').textContent = data.followers;
			newCardFooter.querySelector('.following .text').textContent = data.following;
			newCardBody.classList.remove('hide');
			newCardFooter.classList.remove('hide');
			newCard.classList.remove('hide');
			document.querySelector('.main').appendChild(newCard);
		})
		.catch(function (error) {
			hideSpinner();
			console.error('Error in fetching data ', error);
		});
	}

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
		showSnackBar("App is offline");
		var offlineColor = '#9E9E9E';
		metaTagTheme.setAttribute('content', offlineColor);
		headerElement.style.background = offlineColor;
		menuHeaderElement.style.background = offlineColor;
		fabElement.style.background = offlineColor;
	}

	function goOnline() {
		metaTagTheme.setAttribute('content', '#1E88E5');
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
			
		//If not input, return false
		if (!userInput) {
			return false
		}

		var usernames =  userNames || []; //Get already stored usernames
		usernames.push(userInput);
		localStorage.setItem('usernames', JSON.stringify(usernames)); //Storing the username in localstorage
		fetchGithubInfo(userInput); //Send the username to fetch
		dialogInput.value = ""; //Empty the input
		hideDialog(); //Hide the dialog
	});

	if (userNames) {
		userNames.map(function (userName) {
			fetchGithubInfo(userName); 
		});
	}
})();