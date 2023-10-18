const cells = document.querySelectorAll("td");
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    cells.forEach(function (cell) {
      cell.classList.remove("highlighted");
    });
    cell.classList.add("highlighted");
    const cellValue = cell.innerHTML;
  });
});

