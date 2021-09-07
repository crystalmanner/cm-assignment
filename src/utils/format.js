export function getHoursAndMins(mins) {
  if (mins < 60) {
    return mins + " min(s)";
  }
  const hours = mins / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + "hr(s) " + rminutes + " min(s).";
}
