export function isUndefined(obj: any): obj is undefined {
  return typeof obj === 'undefined';
}

export function isObject(fn: any): fn is object {
  return !isNil(fn) && typeof fn === 'object';
}

export function isNil(val: any): val is null | undefined {
  return isUndefined(val) || val === null;
}
