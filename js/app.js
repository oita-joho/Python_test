let currentLesson = 0;

function createLessonButtons() {
  const lessonList = document.getElementById("lessonList");
  lessonList.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "lesson-button";
    button.textContent = lesson.title;
    button.addEventListener("click", () => selectLesson(index));
    lessonList.appendChild(button);
  });
}

function selectLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];

  document.querySelectorAll(".lesson-button").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });

  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonDescription").textContent = lesson.description;
  document.getElementById("lessonExample").textContent = toDisplayCode(lesson.example);
  document.getElementById("lessonMeaning").textContent = lesson.meaning;
  document.getElementById("code").value = toDisplayCode(lesson.example);
  document.getElementById("output").textContent =
    "「実行」を押すと、ここに結果が表示されます。";
  document.getElementById("status").textContent = pyodide
    ? "コードを書き換えて実行できます。"
    : "Pythonを読み込んでいます。";

  updateLineNumbers();
}

function resetCode() {
  document.getElementById("code").value =
    toDisplayCode(lessons[currentLesson].example);
  document.getElementById("status").textContent = "例のコードに戻しました。";
  document.getElementById("output").textContent =
    "「実行」を押すと、ここに結果が表示されます。";
  updateLineNumbers();
}

function clearCode() {
  const code = document.getElementById("code");
  code.value = "";
  document.getElementById("status").textContent = "入力欄を空にしました。";
  document.getElementById("output").textContent = "";
  updateLineNumbers();
  code.focus();
}

function setupButtons() {
  document.getElementById("runButton").addEventListener("click", runPython);
  document.getElementById("resetButton").addEventListener("click", resetCode);
  document.getElementById("clearButton").addEventListener("click", clearCode);
}

window.addEventListener("DOMContentLoaded", () => {
  createLessonButtons();
  setupEditor();
  setupButtons();
  selectLesson(0);
  preparePython();
});
