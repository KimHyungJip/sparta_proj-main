const modal = document.querySelector(".modal");
const questionAdd = document.querySelector(".question-add");
const commentAdd = document.querySelector(".comment-add");

const questionSubmit = document.querySelector(
  ".question-add-form input[type=submit]"
);
const questionCancel = document.querySelector(
  ".question-add-form input[type='button']"
);

const handleQuestionAdd = () => {
  modal.classList.toggle("show");
};

const handleCommentAdd = () => {
  modal.classList.toggle("show");
};

if (questionAdd) {
  questionAdd.addEventListener("click", handleQuestionAdd);
}

if (commentAdd) {
  commentAdd.addEventListener("click", handleCommentAdd);
}
questionCancel.addEventListener("click", handleQuestionAdd);
