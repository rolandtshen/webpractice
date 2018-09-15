const countryText = document.querySelector("input");

$(".row").on("mouseover", (event) => {
  if(event.target.tagName === "IMG") {
    countryText.value = event.target.alt;
  }
});

$(".row").on("mouseout", (event) => {
    countryText.value = "";
});
