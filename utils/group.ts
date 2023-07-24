export default function group<T>(arr: Array<T>, key: keyof T) {
  if (arr === null) {
    return {}
  }

  const result: Record<string, Array<T>> = {}

  for (const item of arr) {
    const propValue = item[key]
    if (!result.hasOwnProperty(String(propValue))) {
      result[String(propValue)] = []
    }

    result[String(propValue)].push(item)
  }

  return result
}
