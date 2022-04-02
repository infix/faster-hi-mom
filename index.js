import intl from "./intl.js";

export function hiMom(motherName, motherLang = "en") {
  if (typeof intl[motherLang] !== "object") {
    throw new Error("Language not yet supported, but hi mom anyway!");
  }

  const { name, defaultMessage, message } = intl[motherLang];

  if (!motherName) {
    return defaultMessage;
  }

  return message.replace("{}", motherName || name);
}

export function hiMoms(mothers) {
  if (typeof mothers == "string") {
    return hiMom(mothers);
  } else if (mothers instanceof Array) {
    return mothers.map(mother => hiMom(mother?.name, mother?.lang)).join(" ");
  }

  throw new Error("Mother type not supported, but hi mom anyway!");
}
