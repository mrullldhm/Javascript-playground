export const PI = 3.142;

export function circumference(radius) {
  return 2 * PI * radius;
}

export function area(radius) {
  return PI * radius * radius;
}

export function volume(radius) {
  return (4 / 3) * PI * radius * radius * radius;
}
