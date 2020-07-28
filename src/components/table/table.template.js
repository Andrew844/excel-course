const CODES = {
  A: 65,
  Z: 91
};

function toCell(_, idx) {
  return `
    <div class="cell" data-col=${idx} contenteditable></div>
  `;
}

function toColumn(col, idx) {
  return `
    <div class="column" data-resize='col' data-type="resizible" data-col=${idx}>
      ${col}
      <div class="col-resize" data-resize='col'></div>
    </div>
  `;
}

function createRow(idx, content) {
  const resizer = idx ? "<div class='row-resize' data-resize='row'></div>" : "";
  return `
    <div class="row" data-resize='row' data-type="resizible">
      <div class="row-info">
        ${idx ? idx : ""}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const cols = new Array(colsCount)
      .fill("")
      .map(toChar)
      .map(toColumn)
      .join("");
  const cells = new Array(colsCount)
      .fill("")
      .map(toCell)
      .join("");

  rows.push(createRow(null, cols));

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(i, cells));
  }

  return rows.join("");
}
