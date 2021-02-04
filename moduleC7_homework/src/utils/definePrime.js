export function definePrime(num){
	let isPrime, result;
	isPrime = true;

	if (num > 1 && num <= 1000){
		for(let i = 2; i < num; i++){
			if(num % i === 0){
				isPrime = false;
			}
		}
	 
		result = isPrime
			? `Number ${num} - is primal`
			: `Number ${num} - is not primal`;
	} else if (num > 1000){
		result = `invalid input`
	}
	return result;
}