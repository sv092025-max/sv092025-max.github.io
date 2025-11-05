
/* portfolio.js */
document.addEventListener('DOMContentLoaded',function(){
  const intro = document.querySelector('.intro');
  const enter = document.querySelector('.enter-btn');
  enter && enter.addEventListener('click', function(e){
    e.preventDefault();
    intro.style.transition = 'opacity 500ms ease, transform 500ms ease';
    intro.style.opacity = '0';
    intro.style.transform = 'translateY(-10px)';
    setTimeout(()=> intro.remove(),600);
  });
});
