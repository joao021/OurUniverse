
function changeColor(id)
{
  document.getElementById(id).style.color = "#7cb0bc"
  
}

function changeColor2(id)
{
  document.getElementById(id).style.color = "#ffe88a"
}

function changeColor3(id)
{
  document.getElementById(id).style.color = "#d75a4a"
}

function replace(id) {
  document.getElementById(id).style.backgroundImage = 'url("../../assets/img/bg2.png")'
}

function replace2(id) {
  document.getElementById(id).style.backgroundImage = 'url("../../assets/img/bg1.png")'
  
}

function replace3(id) {
  document.getElementById(id).style.backgroundImage = 'url("../../assets/img/bg3.png")'
  
}

/*menu responsivo*/

let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show;
})