function startShowing_nav(){
    var elementToHide = document.getElementById("nav");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 1)
        {
            clearInterval(intervalId);
        }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.05;
        }
    },40);
}

function startShowing_nav_background(){
    var elementToHide = document.getElementById("Réteg_1");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 0.3)
        {
            clearInterval(intervalId);
        }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.01;
        }
    },40);
}

function startShowing_bipi(){
    var elementToHide = document.getElementById("bipi");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 0.5)
        {
            clearInterval(intervalId);
        }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.005;
        }
    },25);
}




