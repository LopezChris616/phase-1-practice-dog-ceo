console.log('%c HI', 'color: firebrick')

const dogImages = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => {
        dogs.message.forEach(dog => {
            const dogImg = document.createElement("img");
            
            dogImg.setAttribute("src", dog);
            dogImages.appendChild(dogImg);
        })
    });

fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        console.log(breeds.message);
        for(const breed in breeds.message) {
            const breedLi = document.createElement("li");

            breedLi.textContent = breed;
            dogBreeds.appendChild(breedLi);

            if(breeds.message[breed].length > 0) {   
                breeds.message[breed].forEach(innerBreed => {
                    const innerUl = document.createElement("ul");
                    const innerLi = document.createElement("li");

                    innerLi.textContent = innerBreed;
                    innerUl.appendChild(innerLi);
                    breedLi.appendChild(innerUl);
                })
            }
        }
    })