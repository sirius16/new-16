j = prompt('#', '0');
srcs = document.getElementsByClassName('js-display-url');
for (i = 0; i < j; i++) {
	window.open(srcs[i].innerHTML);
}
