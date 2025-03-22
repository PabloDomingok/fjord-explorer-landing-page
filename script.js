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

const testimonials = [
    {
        img: "Assets/person-1.jpeg",
        name: "Andrea Fridman",
        role: "Fiko's Founder",
        text: "My experience with Fjord Explorer was fantastic. The tour was well-organized, allowing us to fully enjoy Norway’s stunning landscapes without feeling rushed. Our guide was knowledgeable and passionate, sharing fascinating insights that made the trip even more special. Every detail was carefully planned, making for a smooth and memorable adventure. I highly recommend Fjord Explorer to anyone looking to explore Norway’s beauty in the best way possible!"
    },
    {
        img: "Assets/person-2.jpeg",
        name: "Carlos Méndez",
        role: "Tech Startup CEO",
        text: "The service exceeded my expectations! Every detail was taken care of, making it an effortless and enjoyable experience. I felt completely supported and appreciated the personalized attention. Highly recommended!"
    },
    {
        img: "Assets/person-3.jpeg",
        name: "Samantha Lee",
        role: "Marketing Director",
        text: "I was blown away by the professionalism and quality. The team went above and beyond to deliver an outstanding result. I wouldn’t hesitate to work with them again!"
    }
];

let currentTestimonial = 0;

function changeTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    } else if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    document.getElementById("testimonial-img").src = testimonials[currentTestimonial].img;
    document.getElementById("testimonial-name").textContent = testimonials[currentTestimonial].name;
    document.getElementById("testimonial-role").textContent = testimonials[currentTestimonial].role;
    document.getElementById("testimonial-text").textContent = testimonials[currentTestimonial].text;
}

document.getElementById("viewMoreButton").addEventListener("click", function() {
    const container = document.getElementById("blogCardsContainer");
    const button = document.getElementById("viewMoreButton");
    
    const newCards = [
        {
            date: "Jan 15, 2024",
            title: "The Northern Lights Experience",
            image: "Assets/northern-lights.jpg",
            description: "Witness the mesmerizing dance of the auroras in the Arctic sky. A dreamlike spectacle of nature."
        },
        {
           date: "Feb 28, 2024",  
            title: "A Journey through the Lofoten Islands",  
            image: "Assets/lofoten.jpeg",  
            description: "Discover the stunning beauty of the Lofoten Islands in Norway, where dramatic peaks rise above picturesque fishing villages and crystal-clear fjords."  

        }
    ];

    newCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("our-blog-card");
        cardElement.innerHTML = `
            <div class="our-blog-card-image">
                <img src="${card.image}" alt="${card.title}">
            </div>
            <div class="our-blog-card-info">
                <p>${card.date}</p>
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            </div>
        `;
        container.appendChild(cardElement);
    });
    
    // Deshabilitar el botón después de la primera carga
    button.disabled = true;
    button.style.opacity = "0.5";
    button.style.cursor = "not-allowed";
});

