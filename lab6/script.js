const downloadButton = document.getElementById("download-button"),
      responseMessageDiv = document.getElementById("response-message"),
      wrapper = document.getElementById("wrapper");

downloadButton.addEventListener('click', () => {
    let person = document.createElement("div")
    person.className = "person";
    wrapper.appendChild(person);
    sendRequestAndAddNewPerson(person);
});

function sendRequestAndAddNewPerson (person) {
    apilink = 'https://randomuser.me/api';
    fetch(apilink)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            addNewPerson(data, person);
        })
        .catch(() => {
            responseMessageDiv.innerText = "Something went wrong!";
        });
};

function addNewPerson (data, person) {
    let results = data?.results[0];
    let img = document.createElement("img");
    img.src = results?.picture?.large;
    person.appendChild(img);
    
    let name = document.createElement("div");
    name.innerText = `Name: ${Object.values(results?.name).join(" ")}`;
    person.appendChild(name);

    let city = document.createElement("div");
    city.innerText = `City: ${results?.location?.city}`;
    person.appendChild(city);

    let country = document.createElement("div");
    country.innerText = `Country: ${results?.location?.country}`;
    person.appendChild(country);

    let postcode = document.createElement("div");
    postcode.innerText = `Postcode: ${results?.location?.postcode}`;
    person.appendChild(postcode);
    responseMessageDiv.innerText = "Success!";
};
