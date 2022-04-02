import fs from "fs/promises";
import intlMom from "./lang/intlMom.js";

const languages = Object.fromEntries((Object.entries(intlMom).map(([lang, message]) => {
  const re = /{{([\s\S]+)}}/;
  const name = message.match(re)[0].slice(2, -2);

  return [
    lang,
    {
      name,
      defaultMessage: message.replace(/[{|}]/g, ""),
      message: message.replace(/{.*}/, "{}"),
    },
  ];
})));


const intl = JSON.stringify(languages, null, 2);
await fs.writeFile(
  "./intl.js",
  `
const languages = Object.create(${intl})

export default Object.freeze(languages)
`.trim(),
);
