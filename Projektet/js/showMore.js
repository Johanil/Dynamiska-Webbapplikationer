export default async function showMoreText() {
  const content = document.querySelector(".moreText");
  const moreTextBtn = document.getElementById("read-more-btn");
  moreTextBtn.addEventListener("click", () => {
    content.classList.toggle("moreText-active");
    if (moreTextBtn.innerHTML == "Läs mer") {
      moreTextBtn.innerHTML = "Läs mindre";
    } else {
      moreTextBtn.innerHTML = "Läs mer";
    }
  });
}
showMoreText();
