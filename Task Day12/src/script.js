document.querySelector(".mood").addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } 
        else {
            localStorage.setItem("theme", "light");
        }
        document.querySelector(".mood i").classList.toggle("fa-moon");
        document.querySelector(".mood i").classList.toggle("fa-sun");
});

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    document.querySelector(".mood i").classList.toggle("fa-moon");
    document.querySelector(".mood i").classList.toggle("fa-sun");
}

document.querySelector(".min-bar").addEventListener("click",()=>{
    console.log(document.querySelector(".nav-bar ul"));
     document.querySelector(".nav-bar ul").classList.add("block");
     document.querySelector(".nav-bar ul").classList.remove("hidden");
});
document.querySelector(".close").addEventListener("click",()=>{
     document.querySelector(".nav-bar ul").classList.remove("block");
     document.querySelector(".nav-bar ul").classList.add("hidden");
});
