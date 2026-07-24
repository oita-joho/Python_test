let currentLesson = 0;
let displayMode = "meaning";
function renderCodeMeaningTable(rows) {
  const body = document.getElementById("codeMeaningBody");
  body.innerHTML = "";

  rows.forEach((rowData) => {
    const code = rowData[0] ?? "";
    const meaning = rowData[1] ?? "";
    const dncl = rowData[2] ?? "";

    const row = document.createElement("tr");

    if (code === "" && meaning === "" && dncl === "") {
      row.className = "blank-row";
    }

    const codeCell = document.createElement("td");
    const codeText = document.createElement("code");
    codeText.textContent = toDisplayCode(code);
    codeCell.appendChild(codeText);

    const explanationCell = document.createElement("td");

    if (displayMode === "meaning") {
      explanationCell.textContent = meaning;
    } else {
      explanationCell.textContent =
        dncl || "DNCLはまだ登録されていません。";
    }

    row.appendChild(codeCell);
    row.appendChild(explanationCell);
    body.appendChild(row);
  });
}
function changeDisplayMode(mode) {
  displayMode = mode;

  document
    .getElementById("meaningButton")
    .classList.toggle("active", mode === "meaning");

  document
    .getElementById("dnclButton")
    .classList.toggle("active", mode === "dncl");

  document.getElementById("rightColumnTitle").textContent =
    mode === "meaning" ? "コードの意味" : "DNCL";

  document.getElementById("codeMeaningTitle").textContent =
    mode === "meaning"
      ? "コード例とコードの意味"
      : "コード例とDNCL";

  renderCodeMeaningTable(lessons[currentLesson].rows);
}
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
  renderCodeMeaningTable(lesson.rows);
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
  document
    .getElementById("runButton")
    .addEventListener("click", runPython);

  document
    .getElementById("resetButton")
    .addEventListener("click", resetCode);

  document
    .getElementById("clearButton")
    .addEventListener("click", clearCode);

  document
    .getElementById("meaningButton")
    .addEventListener("click", () => changeDisplayMode("meaning"));

  document
    .getElementById("dnclButton")
    .addEventListener("click", () => changeDisplayMode("dncl"));
}

window.addEventListener("DOMContentLoaded", () => {
  createLessonButtons();
  setupEditor();
  setupButtons();
  selectLesson(0);
  preparePython();
});
