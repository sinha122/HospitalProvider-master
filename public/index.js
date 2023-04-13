console.log("In public section ");

console.log("Running");
const menu = document.querySelector(".main-sidebar");
const menuItems = document.querySelectorAll(".sidebarGo");
const hamburger= document.querySelector(".ham");
const closeIcon= document.querySelector(".cross");
const menuIcon = document.querySelector(".menuIcon");



document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
  
    document.querySelector('.main-sidebar').classList.toggle('sidebarGo');
   
    if( document.querySelector('.main-sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }

   
}); 
function func(){
    var checkboxes = document.querySelectorAll("input[type ='checkbox']");
    // function checkAll(myChechbox){
            // if(myChechbox.checked == true){
        console.log("hello");
}
var hidden = false;
function action() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('memDeleteSelected').style.visibility = 'hidden';
    } else {
        document.getElementById('memDeleteSelected').style.visibility = 'visible';
    }
}


    function memDeleteButton() {
        let checkboxes = $('input[name=members]'),
          deleteButton = $('#memDeleteSelected');
      
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            deleteButton.show();
          } else if (!checkboxes[i].checked) {
            deleteButton.hide();
          }
        }
      }
      

function update() {
  var select = document.getElementById('language');
  var option = select.options[select.selectedIndex];

  document.getElementById('value').value = option.value;
  document.getElementById('text').value = option.text;
}

update();