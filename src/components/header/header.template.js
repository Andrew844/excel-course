import {defaultTitle} from "@/constants";

export function createHeader(title = defaultTitle) {
  const iconsArr = ["delete", "exit_to_app"];
  const buttonsArr = iconsArr
      .map((icon) => {
        return `
          <div class="button">
            <i class="material-icons">${icon}</i>
          </div>
        `;
      })
      .join("");
  return `
      <input type="text" class="input" value="${title}" />
      <div>
        ${buttonsArr}
      </div>
    `;
}
