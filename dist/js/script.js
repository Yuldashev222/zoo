var playBtn = document.querySelector(".play-btn");
var wrapper = document.querySelector(".hero");

var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal__content");

var contact = document.querySelector(".nav__btn-contact");
var modalContact = document.querySelector(".modal--contact");

var feedback = document.querySelector(".btn--testimonials");
var modalFeedback = document.querySelector(".modal--feedback");

var feeding = document.querySelector(".btn--feeding");
var modalFeeding = document.querySelector(".modal--feeding");

var signUp = document.querySelector(".profile__sign-up");
var modalSignUp = document.querySelector(".modal--sign-up");

var login = document.querySelector(".profile__log-in");
var modallogin = document.querySelector(".modal--log-in");

function closeVideo(evt) {
		if(evt.currentTarget.matches('.hero') && !evt.target.matches('.play-btn')){
		playBtn.classList.remove('play-btn--active');
	}
}
playBtn.addEventListener("click", () => {
	playBtn.classList.toggle('play-btn--active');
	wrapper.addEventListener("click", closeVideo);
});

contact.addEventListener("click", function () {
	contact.classList.toggle('nav__btn-contact--active');
	modalContact.classList.toggle('modal--contact--active');
})

feedback.addEventListener("click", function () {
	modalFeedback.classList.toggle('modal--feedback--active');
})

feeding.addEventListener("click", function () {
	modalFeeding.classList.toggle('modal--feeding--active');
})

signUp.addEventListener("click", function () {
	signUp.classList.toggle('profile__sign-up--active');
	modalSignUp.classList.toggle('modal--sign-up--active');
})

login.addEventListener("click", function () {
	login.classList.toggle('profile__log-in--active');
	modallogin.classList.toggle('modal--log-in--active');

})

modalContact.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--contact')){
		contact.classList.remove('nav__btn-contact--active');
		modalContact.classList.remove('modal--contact--active');
		
	}
})

modalSignUp.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--sign-up')){
		modalSignUp.classList.remove('modal--sign-up--active');
	}
})

modallogin.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--log-in')){
		modallogin.classList.remove('modal--log-in--active');
		login.classList.toggle('profile__log-in--active');
	}
})

modalFeedback.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--feedback')){
		modalFeedback.classList.remove('modal--feedback--active');
	}
})

modalFeeding.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--feeding')){
		modalFeeding.classList.remove('modal--feeding--active');
	}
})