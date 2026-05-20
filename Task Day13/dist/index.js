fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
    .then((x) => x.json())
    .then((data) => {
    console.log(data);
    displaydata(data.json());
});
function displaydata(data) {
    let container = document.querySelector(".container");
    data.meals.map((e) => {
        if (container) {
            container.innerHTML += `
     <div class="flex flex-col w-[100px]">
          <img class= "w-[40px] h-[40px]" src="${e.strMealThumb}">
          <h2>${e.strMeal}</h2>
        </div>
    `;
        }
    });
}
export {};
//# sourceMappingURL=index.js.map