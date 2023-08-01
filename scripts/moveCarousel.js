var imageIndex = 0;

    var carouselShowNext = () => {
        console.log(2);
        var children = document.querySelector(".carousel .carouselBackground .move").children;
        
        imageIndex = ++imageIndex < children.length? imageIndex: 0;
        
        Array.from(children).forEach((element, i) => {    
            if(i == imageIndex){
                element.style.display = "block";
                element.style.opacity = "1";
                
            } else {
                element.style.display = "none";
                element.style.opacity = "0";
                
            }
        })
    }
    
    var carouselShowPrevious = () => {
        var children = document.querySelector(".carousel .carouselBackground .move").children;
        
        imageIndex = --imageIndex >= 0? imageIndex: children.length-1;
        
        Array.from(children).forEach((element, i) => {   
            if(i == imageIndex){
                element.style.display = "block";
                element.style.opacity = "1";
                
            } else {
                element.style.display = "none";
                element.style.opacity = "0";
                
            }
        })
    }
    document.querySelector(".moveCarousel.right").addEventListener("click", carouselShowNext);
    document.querySelector(".moveCarousel.left").addEventListener("click", carouselShowPrevious);