function myFunction(date) {
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
  return nextQuarter.getMinutes();
}

function myFunction(date) {
  return (date.getMinutes() >= 0 && date.getMinutes() < 15)
    ? 15 : date.getMinutes() < 30
      ? 30 : date.getMinutes() < 45
        ? 45 : 60;
}