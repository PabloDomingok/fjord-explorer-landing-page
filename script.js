const statisticsEls = document.querySelectorAll('.statistic h2');

statisticsEls.forEach((stat) => {
    let targetValue = parseInt(stat.textContent.replace(/\D/g, ''), 10);
    let counter = 0;
    
    let updateCounter = setInterval(() => {
        counter++;
        stat.textContent = counter + (stat.textContent.includes('M') ? 'M+' : stat.textContent.includes('K') ? 'K' : '');
        
        if (counter >= targetValue) {
            clearInterval(updateCounter);
            stat.style.color = 'green'; 
        }
    }, 1); 
});

const ratingEls = document.querySelectorAll('.tour-packages-card-info .rating p');

ratingEls.forEach((rating) => {
    let targetValue = parseFloat(rating.textContent); 
    let counter = 0;
    
    let updateCounter = setInterval(() => {
        counter += 0.09; 
        rating.textContent = counter.toFixed(1); 
        
        if (counter >= targetValue) {
            clearInterval(updateCounter);
            rating.style.color = 'white'; 
        }
    }, 10);
});



document.querySelectorAll(".how-it-works-step").forEach(step => {
    step.addEventListener("click", function() {
        
        document.querySelectorAll(".how-it-works-step").forEach(s => s.classList.remove("active"));
        
        this.classList.add("active");
    });
});
