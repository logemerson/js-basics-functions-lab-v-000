function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(origin, destination) {
  if (origin > destination){
    return (origin - destination)*264
  } else{
    return (destination - origin)*264
  }
}

function calculatesFarePrice(origin, destination) {
  let distanceFeet = distanceTravelledInFeet(origin, destination);
  if (distanceFeet < 400) {
    return 0;
  }
  if (distanceFeet >= 400 && distanceFeet < 2000) {
    return distanceFeet*0.02;
  }
}