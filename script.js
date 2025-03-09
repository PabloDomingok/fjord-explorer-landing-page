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



const steps = document.querySelectorAll(".how-it-works-step");
const imageContainer = document.querySelector(".how-it-works-image p");
const howItWorksImage = document.querySelector(".how-it-works-image");


const stepData = [
    { 
        image: "url('Assets/find-destination.png')", 
        text: "Start your adventure by finding the perfect destination tailored to your desires."
    },
    { 
        image: "url('Assets/book-ticket.png')", 
        text: "Book your ticket with ease and secure your journey with just a few clicks."
    },
    { 
        image: "url('Assets/make-payment.png')", 
        text: "Make secure payments and get ready for your unforgettable experience."
    },
    { 
        image: "url('Assets/explore-destination.png')", 
        text: "Explore new places, embrace the culture, and enjoy the adventure of a lifetime."
    }
];

steps.forEach((step, index) => {
    step.addEventListener("click", function() {
        
        steps.forEach(s => s.classList.remove("active"));
        
        this.classList.add("active");

        
        howItWorksImage.style.backgroundImage = stepData[index].image;
        imageContainer.textContent = stepData[index].text;
    });
});

