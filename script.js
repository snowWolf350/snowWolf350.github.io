const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const bottomSection = document.querySelector(".bottom-section");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {

        // Remove active states
        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(section => section.classList.remove("active"));

        // Activate tab
        tab.classList.add("active");
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add("active");

        // Remove old background classes
        bottomSection.classList.remove("bg-unity", "bg-blender", "bg-info");

        // Add new background class
        bottomSection.classList.add(`bg-${tab.dataset.tab}`);
    });
});
