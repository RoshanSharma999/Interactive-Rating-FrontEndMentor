//Yeah baby!!!

//Accessing Elements
let allBtns = document.querySelectorAll(".rating-numbers");
let submitBtn = document.querySelector("button");
let rating = document.querySelector("#selected-number");
let ratingCard = document.querySelector("#rating-card");
let thankyouCard = document.querySelector("#thankyou-card");
let body = document.querySelector("body");

//Universal variables
let selNmbr;
let btnStatus = [false, false, false, false, false];
let submitStatus = false;


//Rating buttons click
for (let i = 0; i <= 4; i++) {
    allBtns[i].addEventListener("click", () => {
        btnClick(i);
    });
}
function btnClick(Idx) {
    if (btnStatus[Idx] == false) {
        for (let i = 0; i <= 4; i++) {
            allBtns[i].style.color = "hsl(217, 12%, 63%)";
            allBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)";

            btnStatus[i] = false;
        }

        allBtns[Idx].style.color = "hsl(216, 12%, 8%)";
        allBtns[Idx].style.backgroundColor = "hsl(25, 97%, 53%)";

        btnStatus[Idx] = true;
        submitStatus = true;
        selNmbr = Idx;

        afterSelectHoverS(Idx);
    }
    else if (btnStatus[Idx] == true) {
        for (let i = 0; i <= 4; i++) {
            allBtns[i].style.color = "hsl(217, 12%, 63%)";
            allBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)";

            btnStatus[Idx] = false;
        }
        submitStatus = false;
        selNmbr = -1;

        afterSelectHoverNs();
    }
}

//Rating buttons hover effect when one selected
function afterSelectHoverS(Idx) {
    for (let i = 0; i <= 4; i++) {
        if (i == Idx) {
            allBtns[i].addEventListener("mouseenter", () => {
                allBtns[Idx].style.color = "hsl(216, 12%, 8%)";
                allBtns[Idx].style.backgroundColor = "hsl(25, 97%, 53%)";
            });

            allBtns[i].addEventListener("mouseleave", () => {
                allBtns[Idx].style.color = "hsl(216, 12%, 8%)";
                allBtns[Idx].style.backgroundColor = "hsl(25, 97%, 53%)";
            });
        } else {
            allBtns[i].addEventListener("mouseenter", () => {
                allBtns[i].style.color = "hsl(216, 12%, 8%)";
                allBtns[i].style.backgroundColor = "white";
            });

            allBtns[i].addEventListener("mouseleave", () => {
                allBtns[i].style.color = "hsl(217, 12%, 63%)";
                allBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)";
            });
        }
    }   
}

//Rating buttons hover effect when none selected
function afterSelectHoverNs() {
    for (let i = 0; i <= 4; i++) {
        allBtns[i].addEventListener("mouseenter", () => {
            allBtns[i].style.color = "hsl(216, 12%, 8%)";
            allBtns[i].style.backgroundColor = "white";
        });

        allBtns[i].addEventListener("mouseleave", () => {
            allBtns[i].style.color = "hsl(217, 12%, 63%)";
            allBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)";
        });
    }
}

//Rating buttons hover effect - default
for (let i = 0; i <= 4; i++) {
    allBtns[i].addEventListener("mouseenter", () => {
        allBtns[i].style.color = "hsl(216, 12%, 8%)";
        allBtns[i].style.backgroundColor = "white";
        allBtns[i].style.cursor = "pointer";
    });

    allBtns[i].addEventListener("mouseleave", () => {
        allBtns[i].style.color = "hsl(217, 12%, 63%)";
        allBtns[i].style.backgroundColor = "hsl(213, 19%, 18%)";
        allBtns[i].style.cursor = "default";
    });
}

//Submit button hover effect
submitBtn.addEventListener("mouseenter", () => {
    if (submitStatus == true) {
        submitBtn.style.backgroundColor = "white";
    }
});
submitBtn.addEventListener("mouseleave", () => {
    if (submitStatus == true) {
        submitBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
});

//Submit button click
submitBtn.addEventListener("click", () => {
    if (submitStatus == false) {
        alert("Select a number");
    }
    else {
        rating.innerText = `${selNmbr + 1}`;
        ratingCard.style.display = "none";
        thankyouCard.style.display = "block";
    }
});