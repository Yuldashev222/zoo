var playBtn = document.querySelector(".play-btn");
var wrapper = document.querySelector(".hero");

var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal__content");

var contact = document.querySelector(".nav__btn-contact");
var subBtn = document.querySelector("#nav__sub-btn");
var modalContact = document.querySelector(".modal--contact");
var borderBottom = document.querySelector(".nav__link-borderbottom");	
var sub_borderBottom = document.querySelector("#borderBottom");

var feedback = document.querySelector(".btn--testimonials");
var feedbackAbove = document.querySelector("#subFeedback");
var modalFeedback = document.querySelector(".modal--feedback");

var feeding = document.querySelector("#feeding");
var feedingAbove = document.querySelector("#feeding-above");
var btnLower = document.querySelector(".btn-lower--feeding");
var modalFeeding = document.querySelector(".modal--feeding");

var signUp = document.querySelector(".profile__sign-up");
var modalSignUp = document.querySelector(".modal--sign-up");

var login = document.querySelector(".profile__log-in");
var modallogin = document.querySelector(".modal--log-in");

var profile = document.querySelector(".profile-tablet");

var hamburger = document.querySelector(".hamburger-button");
var nav = document.querySelector(".nav");
var body = document.querySelector(".body");

var mobileAccount = document.querySelector(".nav__btn-account");

var modal = document.querySelector(".modal");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-button--active");
	nav.classList.toggle("nav--active");
	body.classList.toggle("body--active");
})

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
	subBtn.classList.toggle('nav__btn-contact--active');
	modalContact.classList.toggle('modal--contact--active');
	borderBottom.classList.toggle("nav__link-borderbottom");
	sub_borderBottom.classList.toggle("nav__link-borderbottom");
	nav.classList.toggle("nav--active");
	hamburger.classList.remove("hamburger-button--active");

})

subBtn.addEventListener("click", function () {
	contact.classList.toggle('nav__btn-contact--active');
	subBtn.classList.toggle('nav__btn-contact--active');
	modalContact.classList.toggle('modal--contact--active');
	borderBottom.classList.toggle("nav__link-borderbottom");
	sub_borderBottom.classList.toggle("nav__link-borderbottom");
})

feedback.addEventListener("click", function () {
	modalFeedback.classList.toggle('modal--feedback--active');
})

feeding.addEventListener("click", function () {
	modalFeeding.classList.toggle('modal--feeding--active');
})

feedingAbove.addEventListener("click", function () {
	modalFeeding.classList.toggle('modal--feeding--active');
})

feedbackAbove.addEventListener("click", function () {
	modalFeedback.classList.toggle('modal--feedback--active');
})

btnLower.addEventListener("click", function () {
	modalFeeding.classList.toggle('modal--feeding--active');
})

signUp.addEventListener("click", function () {
	modalSignUp.classList.toggle('modal--sign-up--active');
})

profile.addEventListener("click", function () {
	modalSignUp.classList.toggle('modal--sign-up--active');
})

mobileAccount.addEventListener("click", function () {
	modalSignUp.classList.toggle('modal--sign-up--active');
	nav.classList.toggle("nav--active");
	hamburger.classList.remove("hamburger-button--active");

})

login.addEventListener("click", function () {
	login.classList.toggle('profile__log-in--active');
	modallogin.classList.toggle('modal--log-in--active');
	borderBottom.classList.toggle("nav__link-borderbottom");
})

modalContact.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--contact')){
		contact.classList.remove('nav__btn-contact--active');
		subBtn.classList.toggle('nav__btn-contact--active');
		modalContact.classList.remove('modal--contact--active');
		borderBottom.classList.remove("nav__link-borderbottom");
		sub_borderBottom.classList.toggle("nav__link-borderbottom");
		body.classList.toggle("body--active");

	}
})

modalSignUp.addEventListener("click", function (evt) {
	if(evt.target.classList.contains('modal--sign-up')){
		modalSignUp.classList.remove('modal--sign-up--active');
		body.classList.toggle("body--active");

	}
})

	modallogin.addEventListener("click", function (evt) {
		if(evt.target.classList.contains('modal--log-in')){
			modallogin.classList.remove('modal--log-in--active');
			login.classList.toggle('profile__log-in--active');
			borderBottom.classList.toggle("nav__link-borderbottom");
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

var sidebar = document.querySelector(".sidebar-mobile");
var dropdown = document.querySelector(".sidebar__animal-dropdown-list");

// sidebar.addEventListener("click", function () {
// 	dropdown.classList.toggle('sidebar__animal-dropdown-list--active');
// 	sidebar.classList.toggle('sidebar-mobile--active');
// })