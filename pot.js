// // scripts.js
// gsap.from("header h1", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
// gsap.from("nav ul", { duration: 1, opacity: 0, y: -50, ease: "power2.out", delay: 0.5 });
// gsap.from("section", { duration: 1, opacity: 0, y: 50, ease: "power2.out", stagger: 0.5 });
function login(e){
    let username = e.target[0].value
    let email= e.target[1].value
  
    if(username =''&& email==''){
      window.location='./potentry.html'
    }
    // else{
    //   let err = document.getElementById('error')
    //   err.innerText = 'credetial are not matching'
    //   err.style.cssText =`color:black;font-size:20px`
    // }
    e.preventDefault()
    console.log(username,email)
  }