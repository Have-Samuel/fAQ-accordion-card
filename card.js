const solutions = document.querySelectorAll('.qus-ans');

solutions.forEach((solution) => {
  solution.addEventListener('click', () => {
    solution.classList.value.includes('visible');
    solution.classList.toggle('visible');
  });
});
