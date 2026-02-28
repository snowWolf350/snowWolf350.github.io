const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove active from all buttons
        tabs.forEach(btn => btn.classList.remove("active"));

        // Hide all content
        contents.forEach(section => section.classList.remove("active"));

        // Activate clicked button
        tab.classList.add("active");

        // Show corresponding content
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add("active");
    });
});
