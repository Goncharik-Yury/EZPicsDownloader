$(document).on('mousedown', function (e) {
	if (isRightCombination(e)) return;

	e.stopPropagation();
	e.preventDefault();

	let imageUrl = e.target.src;

	if (imageUrl != undefined) {
		chrome.runtime.sendMessage(imageUrl);
	}
});

$(document).on('click', function (e) {
	if (isRightCombination(e)) return;
	e.stopPropagation();
	e.preventDefault();
});

function isRightCombination(e) {
	return (!e.altKey || !e.shiftKey);
}