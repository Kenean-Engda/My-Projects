export function getSecondsFromISO(durationStr) {
  if (!durationStr) return 0;

  let temp = durationStr.replace("PT", "");
  let hours = 0,
    minutes = 0,
    seconds = 0;

  if (temp.includes("H")) {
    const parts = temp.split("H");
    hours = Number(parts[0]);
    temp = parts[1] || "";
  }
  if (temp.includes("M")) {
    const parts = temp.split("M");
    minutes = Number(parts[0]);
    temp = parts[1] || "";
  }
  if (temp.includes("S")) {
    seconds = Number(temp.replace("S", ""));
  }

  return hours * 3600 + minutes * 60 + seconds;
}

export function formatDuration(isoString) {
  if (!isoString) return "";

  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/i;
  const matches = isoString.match(regex);

  if (!matches) return isoString;

  const hours = matches[1] ? `${matches[1]}h ` : "";
  const minutes = matches[2] ? `${matches[2]}m` : "";
  const seconds =
    !matches[1] && !matches[2] && matches[3] ? `${matches[3]}s` : "";

  const formatted = `${hours}${minutes}${seconds}`.trim();
  return formatted || isoString;
}
