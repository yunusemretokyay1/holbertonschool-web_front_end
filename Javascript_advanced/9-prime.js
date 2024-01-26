function countPrimeNumbers() {
    let result = 0;

    for (let n = 2; n <= 100; n++) {

        let wasPrime = true;

        for (let factor = 2; factor < n; factor++) {
            if (n / factor % 1 == 0) {
                // n is divisible by factor, so it's not a prime.
                wasPrime = false;
                break;
            }
        }

        if (wasPrime) {
            result++;
        }
    }

    return result;
}

const before = performance.now();
countPrimeNumbers();
const after = performance.now();

const timeUsed = after - before;

console.log('Execution time of printing countPrimeNumbers was ' + timeUsed + ' milliseconds.');