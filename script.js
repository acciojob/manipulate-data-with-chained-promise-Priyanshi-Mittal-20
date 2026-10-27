//your JS code here. If required.
const arr = [1, 2, 3, 4];
const output = document.getElementById("output");

function getArray(){
	return new Promise((resolve)=>{
	setTimeout(()=>{
		let oddArr=arr.filter((elem)=>{
			if(elem%2!=0)
			{
				return elem
			}
		})
		output.innerText=oddArr
	},1000)

	setTimeout(()=>{
		let evenArr=arr.filter((elem)=>{
			if(elem%2==0)
			{
				return elem*2
			}
		})
		output.innerText=evenArr
	},2000)
	})
}