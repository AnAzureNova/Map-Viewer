document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("img");
    const dropdownLink = document.querySelectorAll(".dropdownContent a");

    dropdownLink.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const imageFile = link.getAttribute("data-img");
            if (imageFile) {
                const newSrc = `resources/imageList/${imageFile}`;
                img.src = newSrc;
            }
        });
    });
});

//i dunno if this ones even nessesary but its here now
updateStatus();