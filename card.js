/* When the user clicks on the arrow,
toggle between hiding and showing the content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the content if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.drop')) {
    let dropdowns = document.getElementsByClassName('answer');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}