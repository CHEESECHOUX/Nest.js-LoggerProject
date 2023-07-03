export function isUndefined(obj: any): obj is undefined {
  return typeof obj === 'undefined';
}

export function isObject(fn: any): fn is object {
  return !isNil(fn) && typeof fn === 'object';
}

export function isPlainObject(fn: any): fn is object {
  if (!isObject(fn)) {
    return false;
  }
  const proto = Object.getPrototypeOf(fn); // fn 객체의 프로토타입을 가져온 후 proto 변수에 할당
  if (proto === null) {
    // 만약 fn이 프로토타입 체인이 없는 plain object 라면
    return true;
  }
  const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  // proto 객체가 constructor라는 속성을 가지고 있는지, hasOwnProperty 메서드를 사용해 확인
  return (
    typeof ctor === 'function' &&
    ctor instanceof ctor && // ctor 변수가 자신의 인스턴스인지 확인 (ctor가 실제 생성자 함수인지 검증)
    Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object)
  );
}

export function isNil(val: any): val is null | undefined {
  return isUndefined(val) || val === null;
}

/*
// 프로토타입 체인이 없는 plain object
프로토타입 체인이 없는 plain object는 프로토타입 체인의 끝에 있는 단순한 객체를 의미
이 객체는 다른 객체를 상속하지 않고, 프로토타입 체인의 최상위에 위치한다.
*/
