function changeText() {
  document.getElementById("title").textContent = "Text Changed!";
  document.body.style.backgroundColor = "#f0f8ff";
}

function toggleBox() {
  const box = document.getElementById("box");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
