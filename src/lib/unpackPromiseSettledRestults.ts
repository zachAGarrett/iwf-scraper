export default function unpackPromiseSettledResults<T>(
  results: PromiseSettledResult<T>[],
  onFulfilledResult?: (arg0: T, i: number) => any,
  onRejectedResult?: (arg0: any, i: number) => any
) {
  results.forEach((res, i) => {
    if (res.status === "fulfilled") {
      onFulfilledResult && onFulfilledResult(res.value, i);
    } else if (res.status === "rejected") {
      onRejectedResult && onRejectedResult(res.reason, i);
    }
  });
}
