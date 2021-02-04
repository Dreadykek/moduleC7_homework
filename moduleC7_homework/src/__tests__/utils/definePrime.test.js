import {definePrime} from "../../utils/definePrime.js";

xdescribe ("", ()=>{
	const simple = 17;
	const complex = 18;
	it("shuld operate correctly with simple number",()=>{
		expect(definePrime(simple)).toBe(`Number ${simple} - is primal`);
	}),
	it("shuld operate correctly with complex number",()=>{
		expect(definePrime(complex)).toBe(`Number ${complex} - is not primal`);
	}),
	it("shuld operate correctly with invalid number",()=>{
		expect(definePrime(1001)).toBe(`invalid input`);
	})

})