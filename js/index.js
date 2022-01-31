//NAVBAR
let lastScrollTop = 0;
navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})
//TYPED
var typed = new Typed('.typed', {
  strings: [`Bonjour à tous ! Je me présente je m'appelle Jérémy <i class="far fa-smile-beam"></i>`,`Après plusieurs années dans le milieu du commerce, j'ai ressenti le besoin de me renouveler et me retrouver dans un domaine qui me passionne. C'est avec cette idée en tête que j'ai entrepris mon projet de reconversion vers les métiers du développement informatique. 

  <br>Un premier travail au travers d'un bilan de compétence m'a permis de cibler mes possibilités à venir et pouvoir démarrer au mieux cette nouvelle aventure.
  La perspective d'un nouveau départ est à la fois stimulante et motivante !
  <br>C'est par le biais de formations en lignes que j'ai fais mes premiers pas en tant que jeune développeur autodidacte, avant d'intégrer la formation DIGINAMIC.`],
  typeSpeed: 10,
  backSpeed: 0,
  smartBackspace: false, // this is a default
  loop: false
});

//COMPTEUR
let compteur = 0;

$(window).scroll(function(){

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function(){
      let $this = $(this),
      countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      }, {
        duration: 5000,
        easing: "swing",
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
