let input1 = document.querySelector('input[name="useranmeinput"]');
let input2 = document.querySelector('input[name="passwordinput"]');
function addEventToBtn() {
    let btn = document.getElementById('loginbox');
    function check() {
        if (input1.value === "admin" && input2.value === "admin123") {
            window.location.href='homepage.html';
        } else {
            alert("Invalid username and password");
        }
    }
    btn.addEventListener('click', check);
}
addEventToBtn();
