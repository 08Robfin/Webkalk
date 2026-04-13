export function fibonacci(n) {
    if (n <= 2) return 1
    let a = 1, b = 1
    for (let i = 3; i <= n; i++) {
        const neste = a + b
        a = b
        b = neste
    }
    return b
}
