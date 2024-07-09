document.title = "DAVID TAN";

// Initialize currentImageIndex with 0
let currentImageIndex1 = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;

// Initialize images array
const images1 = ['images/project1_1.png', 'images/project1_2.png', 'images/project1_3.png'];
const images2 = ['images/project2_1.png', 'images/project2_2.png', 'images/project2_3.png'];
const images3 = ['images/project3_1.png', 'images/project3_2.png', 'images/project3_3.png'];

// Get modal element
var modal = document.getElementById("image-modal");

// Get the image and insert it inside the modal
var profileLink = document.getElementById("profile-link");
var modalImage = document.getElementById("modal-image");

// Confetti container
var confettiContainer = document.getElementById("confetti-container");

profileLink.onclick = function () {
    modal.style.display = "block";
    launchConfetti();
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    clearConfetti();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        clearConfetti();
    }
}

// Launch confetti
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Clear confetti
function clearConfetti() {
    while (confettiContainer.firstChild) {
        confettiContainer.removeChild(confettiContainer.firstChild);
    }
}

function changeImage(project, direction) {
    let images, currentImageIndex, imgElement;

    switch (project) {
        case 'project1':
            images = images1;
            currentImageIndex = currentImageIndex1;
            imgElement = document.getElementById('project1-img');
            break;
        case 'project2':
            images = images2;
            currentImageIndex = currentImageIndex2;
            imgElement = document.getElementById('project2-img');
            break;
        case 'project3':
            images = images3;
            currentImageIndex = currentImageIndex3;
            imgElement = document.getElementById('project3-img');
            break;
        default:
            return;
    }

    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    imgElement.src = images[currentImageIndex];

    // Update the corresponding index
    switch (project) {
        case 'project1':
            currentImageIndex1 = currentImageIndex;
            break;
        case 'project2':
            currentImageIndex2 = currentImageIndex;
            break;
        case 'project3':
            currentImageIndex3 = currentImageIndex;
            break;
    }
}
