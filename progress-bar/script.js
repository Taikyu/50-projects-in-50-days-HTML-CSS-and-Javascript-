const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll(".circle");

currentActive = 1;
next.addEventListener('click', () => {
    currentActive++ ;
    if (currentActive > circles.length ){
        currentActive = circles.length;
    }

    updateProgress();
});
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1 ) {
        currentActive = 1
    }
    updateProgress()
});





function updateProgress() {
   circles.forEach((circle,idx) => {
    if (currentActive > idx ) {
        circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
   })
   
   const actives = document.querySelectorAll('.active');
   progress.style.width = ((actives.length-1) / (circles.length-1))  * 100 +'%';

   if (currentActive == 1) {
    prev.disabled = true
   }else if (currentActive == circles.length) {
    next.disabled = true
   }else {
    next.disabled = false
    prev.disabled = false
   }
}