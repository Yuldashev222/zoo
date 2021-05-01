var playBtn = document.querySelector(".play-btn");
var wrapper = document.querySelector(".hero");

function closeVideo(evt) {
		if(evt.currentTarget.matches('.hero') && !evt.target.matches('.play-btn')){
		playBtn.classList.remove('play-btn--active');
	}
}

playBtn.addEventListener("click", () => {
	playBtn.classList.toggle('play-btn--active');
	wrapper.addEventListener("click", closeVideo);
});