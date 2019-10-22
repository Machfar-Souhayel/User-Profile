link = document.getElementById("already-have-acc");
userInput = document.getElementsByClassName("login-submit")[0];

link.addEventListener('click', function(){
	window.setTimeout(function()
	{
		userInput.focus();
	},0);
});