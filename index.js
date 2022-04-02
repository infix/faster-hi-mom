import intl from "./intl.js";

const cache = {};

export function hiMom(motherName, motherLang = "en") {
  if (typeof intl[motherLang] !== "object") {
    throw new Error("Language not yet supported, but hi mom anyway!");
  }

  const { name, defaultMessage, message } = intl[motherLang];

  if (!motherName) {
    return defaultMessage;
  }

  const key = `${message}-${name}`;

  if (cache[key]) {
    return cache[key];
  }

  const result = message.replace("{}", motherName || name);
  cache[key] = result;
  return result;
}

export function hiMoms(mothers) {
  if (typeof mothers == "string") {
    return hiMom(mothers);
  } else if (mothers instanceof Array) {
    return mothers.map(mother => hiMom(mother?.name, mother?.lang)).join(" ");
  }

  throw new Error("Mother type not supported, but hi mom anyway!");
}
