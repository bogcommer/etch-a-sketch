const container = document.querySelector(".container")
const gridSize = 257; // Grid size plus one because loops are 0 index'd.

const button = document.querySelector(".main-button");

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}

addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-item")) {
        event.target.classList.add("hovered");
    }
});

button.addEventListener("click", function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => container.removeChild(item));
    
    let size;

    do {
    size = prompt("Enter a new grid size (cannot be more than 100)");
    } while (isNaN(size) || size > 100 || size < 1);

    for (let i = 0; i < size * size + 1; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        container.appendChild(newDiv);
    }

    const css = `div:nth-child(${size}n + 1) {
        width: 100%;
        border: 0;
        height: 0;
    }`;

    const styleElement = document.getElementById('dynamic-styles');
    styleElement.innerHTML = css;
});