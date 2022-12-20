const handleHeartImageClick = (event) => {
    const element = event.target;
    console.log('element', event.target)

    // Check if element is not undefined
    if (element) {
        element.classList.toggle("heart-filled")
    }
}

const heartImages = document.querySelectorAll('.heart-image')
    .forEach(el => el.addEventListener("click", handleHeartImageClick))

