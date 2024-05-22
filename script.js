const container = document.querySelector(".container")
const gridSize = 257; // Grid size plus one because loops are 0 index'd.

for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
}

addEventListener("mouseover", (event) => {
    event.target.d
})