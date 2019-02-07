// imports
import { initSortable } from "./plugins/init_sortable"; // <-- add this
import { initMarkdown } from "./plugins/init_markdown";
import { initSelect2 } from "./plugins/init_select2";
import { fetchMovies, updateResults } from "./movies";

// Inits
initSelect2();
initMarkdown();
initSortable(); // <-- add this

// API calls
fetchMovies("harry potter");

// Add event addEventListener
const form = document.querySelector("#search-form");
form.addEventListener("submit", updateResults);
