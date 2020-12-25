//mobile menu handle
var mobileMenu = document.getElementById('mobile-menu');

function menuMobilehanlde() {
  mobileMenu.style.display = 'inline-block';
}
function closehandle() {
  mobileMenu.style.display = 'none';
}


//navbar when scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var navbar = document.getElementById("navbar-home");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.background = "#333";
  } else {
    navbar.style.background = "none";
  }
}


//upload file and show image
function getFile() {
  document.getElementById("upfile").click();

}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
  document.getElementById("img-place").innerHTML = `<img class="col-sm-6" id="blah" src="#" alt="your image" />`;
}


//add topic to forum
$(document).ready(function () {
  var topics = [];
  $('#addToTopicList').click(function () {
    var topicTitle = $('#form-topic-title').val();
    var topicText = $('#form-topic-text').val();
    var topicMaker = $('#Form-topic-maker').val();
    topics.push({ title: topicTitle, text: topicText, maker: topicMaker });
    console.log(topics);
  });
});