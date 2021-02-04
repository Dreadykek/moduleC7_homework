import {reverString} from "../../utils/reverString.js";

describe("Check rever for strings", ()=>{
	it("Sould revers the string",()=>{
		expect(reverString("addrd")).toBe("drdda");
	}),
	it("Sould tell that string is null",()=>{
		expect(reverString("")).toBe("String is null");
	}),
	it("Sould revers the string",()=>{
		expect(reverString("aaaaa")).toBe("aaaaa");
	}),
	it("Sould revers the string",()=>{
		expect(reverString("a")).toBe("a");
	}),
	it("Sould revers the string",()=>{
		expect(reverString("adsda")).toBe("adsda");
	})

})