const SPACE_MARK = "□";
 
function toDisplayCode(text) {
  return text.replaceAll(" ", SPACE_MARK);
}

function toPythonCode(text) {
  return text.replaceAll(SPACE_MARK, " ");
}

function updateLineNumbers() {
  const code = document.getElementById("code");
  const lineNumbers = document.getElementById("lineNumbers");
  const lineCount = code.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
}

function syncScroll() {
  document.getElementById("lineNumbers").scrollTop =
    document.getElementById("code").scrollTop;
}

function insertText(editor, text) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;

  editor.value =
    editor.value.substring(0, start) +
    text +
    editor.value.substring(end);

  editor.selectionStart = editor.selectionEnd = start + text.length;
  updateLineNumbers();
}

function setupEditor() {
  const codeEditor = document.getElementById("code");

  codeEditor.addEventListener("input", updateLineNumbers);
  codeEditor.addEventListener("scroll", syncScroll);

  codeEditor.addEventListener("paste", function (event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text");
    insertText(this, toDisplayCode(pastedText));
  });

  codeEditor.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      event.preventDefault();
      insertText(this, SPACE_MARK);
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      insertText(this, SPACE_MARK.repeat(4));
      return;
    }

    if (event.ctrlKey && event.key === "Enter") {
      event.preventDefault();
      runPython();
    }
  });
}
