function distanceFromHqInBlocks(origin, destination) {
  if (origin > destination) {
    return origin - destination;
  } else {
    return destination - origin;
  }
}