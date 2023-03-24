function threeSum(arr, target) {
// write your code here
	let closest = 10000;
	for(let i =0; i<arr.length; i++){
		let sum = 0;		
		for(let j = i; j<i+3; j++)
			{
				sum += arr[j];
			}
		if(sum == target)
			return sum;
		else 
			closest = Math.min(closest, sum);			
	}
  return closest;
}

module.exports = threeSum;
