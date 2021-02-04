export function reverString(string){
	let result="";
	if(string===""){
		return `String is null`;
	} 
	for (let i = string.length - 1; i >= 0; i--){
		result += string[i];
	}
	return result;
}