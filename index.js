function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return origin - 42;
  } else {
    return 42 - street;
  }
}