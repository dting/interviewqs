function mFactorsOfN(n, m, prefix = []) {
  if (m === 1) {
    return [prefix.concat(n)];
  }
  const result = [];
  for (let i = prefix[prefix.length - 1] || 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(...mFactorsOfN(n / i, m - 1, prefix.concat(i)));
    }
  }
  return result;
}
