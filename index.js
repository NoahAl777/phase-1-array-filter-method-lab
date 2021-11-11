function findMatching(names, matchCase) {
  const matchingNames = names.filter(names => names.toUpperCase() === matchCase.toUpperCase());
  return !!matchingNames ? matchingNames : []
}

function fuzzyMatch(names, matchCase) {
  const matchingNames = names.filter(names => names.startsWith(matchCase));
  return !!matchingNames ? matchingNames : []
}

const matchName = (driver, matchCase) => {
  const matchingObjects = driver.filter(driver => driver.name === matchCase);
  return matchingObjects;
}