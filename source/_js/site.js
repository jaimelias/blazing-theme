function toggleMenu()
{
	var menu = document.querySelector('#menuToggled');
	menu.classList.toggle('toggled');
}
function show_modal(the_id)
{
	document.getElementById(the_id).classList.toggle('hidden');
	return false;
}
function google_async(UA)
{
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	ga('create', UA, 'auto');
	ga('send', 'pageview');	
}

