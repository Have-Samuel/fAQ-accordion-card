/* When the user clicks on the arrow,
toggle between hiding and showing the content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the content if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.drop')) {
    let dropdown = document.getElementsByClassName('answer');
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}