(function(){

const ICON_BASE = "https://cdn.jsdelivr.net/npm/@tabler/icons/icons/";

async function loadIcon(icon){

    const name = icon.getAttribute("name");
    const size = icon.getAttribute("size") || 24;

    if(!name) return;

    try{

        const res = await fetch(ICON_BASE + "outline/" + name + ".svg");

        if(!res.ok){
            console.warn("Ikona nie istnieje:", name);
            return;
        }

        const svg = await res.text();

        const wrapper = document.createElement("span");
        wrapper.innerHTML = svg;

        const el = wrapper.firstElementChild;
        el.setAttribute("width", size);
        el.setAttribute("height", size);

        icon.replaceWith(el);

    }catch(e){
        console.error("Błąd pobierania ikony", e);
    }

}

function init(){
    document.querySelectorAll("nova-icon").forEach(loadIcon);
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
}else{
    init();
}

})();