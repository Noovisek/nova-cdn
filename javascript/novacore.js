(function () {

    function getLicense() {
        const scripts = document.getElementsByTagName("script");
        for (let s of scripts) {
            if (s.src && s.src.includes("novacore.js")) {
                return s.getAttribute("data-license");
            }
        }
        return null;
    }

    function createBadge() {
        const badge = document.createElement("div");
        badge.innerText = "novacore";

        badge.style.position = "fixed";
        badge.style.bottom = "20px";
        badge.style.right = "20px";
        badge.style.background = "#000";
        badge.style.color = "#fff";
        badge.style.padding = "10px 16px";
        badge.style.borderRadius = "12px";
        badge.style.fontFamily = "Arial, sans-serif";
        badge.style.fontSize = "14px";
        badge.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        badge.style.zIndex = "999999";

        document.body.appendChild(badge);
    }

    function init() {
        const license = getLicense();

        if (!license) {
            console.warn("NovaCore: brak licencji.");
            return;
        }

        createBadge();
        console.log("NovaCore aktywowany. Licencja:", license);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();