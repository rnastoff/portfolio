export function formatTools(tools: string[]) {
  return tools.join(" | ");
}

export function getDate() {
  var date = new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0]
    .split("-")
    .join("")
    .slice(2);
}
