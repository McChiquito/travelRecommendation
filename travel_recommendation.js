fetch("./travel_recommendation.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

let travelData = {};

fetch("./travel_recommendation.json")
    .then(res => res.json())
    .then(data => {
        travelData = data;
    });

document.getElementById("searchBtn").addEventListener("click", function(){
    let keyword = document.getElementById("searchInput").value.toLowerCase();

    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
    document.getElementById("results").style.display = "grid";
    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
    if(keyword.includes("country")){
        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                resultsContainer.innerHTML += `
                    <div class="result-card">
                        <img src="${city.imageUrl}" width="300">
                        <h3>${city.name}</h3>
                        <p>${city.description}</p>
                    </div>
                `;
            });
        });
    }
if(keyword.includes("temple")){
    travelData.temples.forEach(temple=>{
        resultsContainer.innerHTML += `
            <div class="result-card">
                <img src="${temple.imageUrl}" width="300">
                <h3>${temple.name}</h3>
                <p>${temple.description}</p>
            </div>
        `;
    });
}

if(keyword.includes("beach")){
    travelData.beaches.forEach(beach=>{
        resultsContainer.innerHTML += `
            <div class="result-card">
                <img src="${beach.imageUrl}" width="300">
                <h3>${beach.name}</h3>
                <p>${beach.description}</p>
            </div>
        `;
    });
}
});


document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("results").style.display = "none";
    // Limpiar resultados
    document.getElementById("results").innerHTML = "";
    // Limpiar input
    document.getElementById("searchInput").value = "";

})