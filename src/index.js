console.log('%c HI', 'color: firebrick')

const dogImages = document.getElementById("dog-image-container");
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogs => {
        dogs.message.forEach(dog => {
            const dogImg = document.createElement("img");
            dogImg.setAttribute("src", dog);
            dogImages.appendChild(dogImg);
        })
        // console.log(dogs);
    })