/* eslint-disable @typescript-eslint/no-explicit-any */
const handler = {
  set(
    target: Record<string, any>,
    key: string,
    value: Record<string, any> | string | number | boolean,
  ) {
    return Reflect.set(target, key, value)
  },
  get(target: Record<string, any>, key: string) {
    return Reflect.get(target, key)
  },
}

const proxy = (obj: Record<string, any>) => {
  return new Proxy(obj, handler)
}

export { handler, proxy }
