const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const link = this.getAttribute('href');
    window.open(link, '_blank');
  });
});
