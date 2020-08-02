import {storage} from "@core/utils";

function toHTML(tableRecord = "") {
  const {title, openedDate} = storage(tableRecord);
  const id = tableRecord.split(":")[1];
  return `
    <li class="db__record">
      <a href="#excel/${id}">${title}</a>
      <strong>
        ${new Date(openedDate).toLocaleDateString()}
        ${new Date(openedDate).toLocaleTimeString()}
      </strong>
    </li>
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes("excel")) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return "<p>Пока что вы не создали ни одной таблицы</p>";
  }

  return `
    <div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
    </div>
    
    <ul class="db__list">
      ${keys.map(toHTML).join("")}
    </ul>
    
  `;
}
