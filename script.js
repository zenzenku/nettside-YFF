const imageInput = document.getElementById("imageInput");
const imageGallery = document.getElementById("imageGallery");

imageInput.addEventListener("change", function () {

    const files = Array.from(this.files);

    files.forEach(file => {

        if (!file.type.startsWith("image/")) return;

        const img = document.createElement("img");

        img.src = URL.createObjectURL(file);
        img.alt = file.name;

        imageGallery.appendChild(img);

    });

    this.value = "";
});