var ulList = document.querySelector("#Home");
var ulList2 = document.querySelector("#Introduce");

var home = document.querySelector(".home")
var introduce = document.querySelector(".introduce")

ulList.addEventListener("click", function() {

    introduce.style.display = "none";
    home.style.display = "block";
});

ulList2.addEventListener("click", function() {
    

    introduce.style.display = "block";
    home.style.display = "none";
});

var login = document.querySelector('.login button[type = button]');

console.log(login);

login.addEventListener('click', function(){
    document.querySelector('#dangnhap').style.display = 'flex'

})


var closeLogin = document.querySelector('#dangnhap .close-icon')
    closeLogin.addEventListener('click', function () {
        document.querySelector('#dangnhap').style.display = 'none';
})
