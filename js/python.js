let pyodide;


async function preparePython() {
  const runButton = document.getElementById("runButton");
  const status = document.getElementById("status");
  const output = document.getElementById("output");

  try {
    pyodide = await loadPyodide();

    pyodide.setStdin({
      stdin: () => {
        const value = window.prompt("Pythonへの入力");
        return value === null ? "" : value;
      }
    });

    runButton.disabled = false;
    runButton.textContent = "実行";
    status.textContent = "Pythonの準備ができました。";
    output.textContent = "「実行」を押すと、ここに結果が表示されます。";
  } catch (error) {
    status.textContent = "Pythonの読み込みに失敗しました。";
    output.textContent = String(error);
  }
}

async function runPython() {
  const displayCode = document.getElementById("code").value;
  const code = toPythonCode(displayCode);
  const output = document.getElementById("output");
  const status = document.getElementById("status");
  const runButton = document.getElementById("runButton");

  if (!pyodide) {
    status.textContent = "Pythonを読み込んでいます。";
    return;
  }

  if (code.trim() === "") {
    status.textContent = "コードが入力されていません。";
    output.textContent = "";
    return;
  }

  runButton.disabled = true;
  runButton.textContent = "実行中";
  status.textContent = "プログラムを実行しています。";
  output.textContent = "";

  try {
    await pyodide.loadPackagesFromImports(code);
    pyodide.globals.set("student_code", code);

    const result = await pyodide.runPythonAsync(`
import io
import contextlib
import traceback

_output_buffer = io.StringIO()
_execution_globals = {"__name__": "__main__"}

try:
    with contextlib.redirect_stdout(_output_buffer):
        with contextlib.redirect_stderr(_output_buffer):
            exec(student_code, _execution_globals)
except SystemExit:
    pass
except Exception:
    traceback.print_exc(file=_output_buffer)

_output_buffer.getvalue()
    `);

    const resultText = String(result);
    output.textContent = resultText === ""
      ? "プログラムは実行されましたが、表示結果はありません。"
      : resultText;
    status.textContent = "実行が完了しました。";

    if (result && typeof result.destroy === "function") {
      result.destroy();
    }
  } catch (error) {
    status.textContent = "エラーが発生しました。";
    output.textContent = String(error);
  } finally {
    runButton.disabled = false;
    runButton.textContent = "実行";
  }
}
