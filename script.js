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
