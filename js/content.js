$(document).on('mousedown', function (e) {
	if (isRightCombination(e)) return;
	
	e.stopPropagation();
	e.preventDefault();

	if(e.target.src != undefined)
	{
		chrome.runtime.sendMessage(e.target.src);
	}
});

$(document).on('click', function (e) {
	if (isRightCombination(e)) return;
	e.stopPropagation();
	e.preventDefault();
});

function isRightCombination(e){
	return (!e.ctrlKey || !e.shiftKey)
}