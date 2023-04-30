const dogImages = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedsArr = [];

fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => {
        dogs.message.forEach(dog => {
            const dogImg = document.createElement("img");

            dogImg.setAttribute("src", dog);
            dogImages.appendChild(dogImg);
        });
    });

fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        for(const breed in breeds.message) {
            breedsArr.push({
                breed: breed,
                subBreed: breeds.message[breed]
            });
            createBreedLi(breeds.message[breed], breed);
        }
        filterBreeds(breedsArr);
    });

function filterBreeds(breeds) {
    breedDropdown.addEventListener("change", () => {
        dogBreeds.textContent = "";
        const filteredBreeds = breeds.filter(breed => {
            return breed.breed[0] === breedDropdown.value;
        });

        filteredBreeds.forEach(breed => {
            createBreedLi(breed.subBreed, breed.breed);
        });
    });
}

function createBreedLi(allBreeds, breedType) {
    const breedLi = document.createElement("li");

    breedLi.textContent = breedType;
    dogBreeds.appendChild(breedLi);

    if(allBreeds.length > 0) {   
        allBreeds.forEach(innerBreed => {
            const innerUl = document.createElement("ul");
            const innerLi = document.createElement("li");

            innerLi.textContent = innerBreed;
            innerUl.appendChild(innerLi);
            breedLi.appendChild(innerUl);
        });
    }

    breedLi.addEventListener("click", function() {
        this.style.color = "#2A56C7"
    });
}