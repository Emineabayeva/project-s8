const navbarBtn = document.querySelector(".fa-bars")
const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function () {
    mobileMenyu.classList.add("aktiv")
  })
  
  closeIcon.addEventListener("click", function () {
    mobileMenyu.classList.remove("aktiv")
  })

  // swiper
  const karusel = new Swiper(".shirketlerKaruseli", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
   
  });


  // awards section start 
  const mukafatlarDivi= document.querySelector("#mukafatlar")
  window.addEventListener("load", getLocaldanMelumatlariGetir)

  async function getLocaldanMelumatlariGetir(){
    const unvan="assets/mukafatlar.json"

    try{
const gelenCavab = await fetch(unvan)
const mukafatlar =await gelenCavab.json()

mukafatlar.forEach(function(birMukafat){
mukafatlarDivi.innerHTML +=`   <div class="swiper-slide text-center">
  <div class="card rounded-0 ">
      <img src="${birMukafat.mukafat_sekli}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${birMukafat.mukafat_adi}</h5>
        <p class="card-text">${birMukafat.mukafat_metni}</p>
      </div>
    </div>
</div>`
});

    }

    catch(err){

    }
  }
  const swiper = new Swiper(".awardsSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  // accordion 

  new Accordion('.accordion-left');
new Accordion('.accordion-right');

// sweeetAlert

const getStarted = document.querySelector("#get-started")

getStarted.addEventListener("click",function(){
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
})


// Modalbox 
const modal = document.getElementById("myModal");

    const btn = document.getElementById("myBtn");

    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener("click",function(){
      modal.style.display = "block";
    })

    span.addEventListener("click",function(){
      modal.style.display = "none";
    })
 

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
