// Inicializar AOS
AOS.init({duration:800,once:true});

// Typed.js banner
const typed = new Typed('.typed-text',{
  strings:["¡Nuevos gadgets!","¡Promociones semanales!","¡Compra ahora por WhatsApp!"],
  typeSpeed:50,backSpeed:30,loop:true
});

// Swiper slider
const swiper = new Swiper('.swiper-container',{
  loop:true,
  slidesPerView:1,
  autoplay:{delay:2500,disableOnInteraction:false},
  pagination:{el:'.swiper-pagination',clickable:true}
});

// Hover 3D en productos
document.querySelectorAll('.product-card').forEach(card=>{
  card.style.transition='transform 0.15s ease, box-shadow 0.15s ease';
  card.addEventListener('mousemove',e=>{
    const {width,height,left,top}=card.getBoundingClientRect();
    const x=e.clientX-left;
    const y=e.clientY-top;
    const rotateY=((x/width)*16)-8;
    const rotateX=((y/height)*-12)+6;
    card.style.transform=`perspective(700px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.04)`;
    card.style.boxShadow=`${-rotateY*1.5}px ${rotateX*1.5}px 14px rgba(13,110,253,0.3)`;
  });
  card.addEventListener('mouseleave',()=>{card.style.transform='none';card.style.boxShadow='0 7px 28px rgba(0,0,0,0.08)';});
});

// Chatbot simple con SweetAlert2
document.getElementById('chatbot').addEventListener('click',()=>{
  Swal.fire({
    title:'Hola 👋',
    text:'¿En qué producto estás interesado?',
    icon:'info',
    confirmButtonText:'Escribir en WhatsApp',
    showCancelButton:true,
    cancelButtonText:'Cerrar'
  }).then(result=>{
    if(result.isConfirmed){
      window.open('https://wa.me/0000000000?text=Hola, quiero información de un producto','_blank');
    }
  });
});
