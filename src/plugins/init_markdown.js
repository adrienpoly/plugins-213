import { markdown } from "markdown";

const initMarkdown = () => {
  const editor = document.querySelector("#editor");
  const preview = document.querySelector("#preview");
  editor.addEventListener("keyup", (event) => {
    preview.innerHTML = markdown.toHTML(editor.value);
  });
};

export { initMarkdown };
