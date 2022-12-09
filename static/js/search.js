const searchForm = document.querySelector(".search-form");
function handleSearchFormSubmit(e) {
  e.preventDefault();
  let search = document.getElementById("search-input").value.toLowerCase();
  let problem = document.getElementsByClassName("question__item");
  for (let i = 0; i < problem.length; i++) {
    problem_title = problem[i].getElementsByClassName("question__title");
    if (problem_title[0].innerHTML.toLowerCase().includes(search)) {
      problem[i].style.display = "flex";
    } else {
      problem[i].style.display = "none";
    }
  }
}
searchForm.addEventListener("submit", handleSearchFormSubmit);
