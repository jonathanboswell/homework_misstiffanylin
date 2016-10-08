/*
for readMore button
*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var moreText = "Read More >",
    lessText = "Read Less >",
    moreButton = $(".accordion");

moreButton.click(function () {
    var $this = $(this);
    $this.text($this.text() == moreText ? lessText : moreText).next("p.more").slideToggle("fast");
});

/*
for learMore button
*/
var acc2 = document.getElementsByClassName("learnMore");
var i;

for (i = 0; i < acc2.length; i++) {
    acc2[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var learnMoreText = "Learn More >",
    learnLessText = "Learn Less >",
    learnMoreButton = $(".learnMore");

learnMoreButton.click(function () {
    var $this = $(this);
    $this.text($this.text() == learnMoreText ? learnLessText : learnMoreText).next("p.more").slideToggle("fast");
});