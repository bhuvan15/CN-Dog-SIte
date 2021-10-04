/* https://api.thedogapi.com/v1/breeds */


/* Upper Box api calls */
let counter = 1;
const cards = document.querySelector("#lowerContainer");


$.ajax({
    type: "GET",
    url: "https://api.thedogapi.com/v1/breeds",
    crossDomain: true,
    dataType: 'json',
    headers: {"x-api-key": "7c690378-fc61-4090-b696-6985e7e55f3a"},
    success: function(response) {
      let imageUrl = response[counter].image.url;
      let breedName = response[counter].name;
      let breedGroup = response[counter].breed_group;
      let weight = response[counter].weight.metric;
      let life = response[counter].life_span;
      let tempe = response[counter].temperament;
      $("#body-img").attr("src", imageUrl);
      $(".breed_name").text(breedName);
      $(".breed_group").text(breedGroup);
      $(".weight_range").text(weight);
      $(".life_span").text(life);
      $(".qualities").text(tempe);
},
});

function fetchData() {
    counter++;

    $.ajax({
    type: "GET",
    url: "https://api.thedogapi.com/v1/breeds",
    crossDomain: true,
    dataType: 'json',
    headers: {"x-api-key": "7c690378-fc61-4090-b696-6985e7e55f3a"},
    success: function(response) {
        let imageUrl = response[counter].image.url;
        let breedName = response[counter].name;
        let breedGroup = response[counter].breed_group;
        let weight = response[counter].weight.metric;
        let life = response[counter].life_span;
        let tempe = response[counter].temperament;
        $("#body-img").attr("src", imageUrl);
        $(".breed_name").text(breedName);
        $(".breed_group").text(breedGroup);
        $(".weight_range").text(weight);
        $(".life_span").text(life);
        $(".qualities").text(tempe);
    },
});
}



/* Lower Container */

let anotherCounter = 0;


function start() {
    for(let i = 0; i < 10; i++) {
    $.ajax({
    type: "GET",
    url: "https://api.thedogapi.com/v1/breeds",
    crossDomain: true,
    dataType: 'json',
    headers: {"x-api-key": "7c690378-fc61-4090-b696-6985e7e55f3a"},
    success: function(response) {

        let div = document.createElement("div");
        let Url = response[anotherCounter].image.url;
        let breedName = response[anotherCounter].name;
        let breedGroup = response[anotherCounter].breed_group;
        let weight = response[anotherCounter].weight.metric;
        let life = response[anotherCounter].life_span;
        let height = response[anotherCounter].height.metric;
        div.innerHTML = `       
        <div class="info-card">
           <img class = "info-image" src="${Url}" alt="">
           <div class="info-div">
               <div class="infos">
                   <h4>Breed :</h4>
                   <p class="name">${breedName}</p>
               </div>
            <div class="infos">
                <h4>Group : </h4>
                <p class="grp">${breedGroup}</p>
            </div>
            <div class="infos">
                <h4>Life-span :</h4>
                <p class="lyf">${life}</p>
            </div>
            <div class="infos">
                <h4>Weight :</h4> 
                <p class="weightt">${weight}</p>
            </div>
            <div class="infos">
                <h4>Height :</h4>
                <p class="height">${height}</p>
            </div>
           </div>
            
       </div>`
              cards.appendChild(div);
              anotherCounter++;
              
        
    },
});

}
}

function nextFunc(anotherCounter) {
    cards.innerHTML = "";
    let count = anotherCounter + 10;
    start(count);
}
   


/* Next button event */

/* Button Event */
$("#random").click(fetchData);
$("#next").click(nextFunc);
start(anotherCounter);
