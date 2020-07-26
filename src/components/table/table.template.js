const CODES = {
  A: 65,
  Z: 91
};

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function toColumn(col) {
  return `
    <div class="column">
      ${col}
    </div>
  `;
}

function createRow(idx, content) {
  return `
    <div class="row">
      <div class="row-info">${idx ? idx : ""}</div>
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
