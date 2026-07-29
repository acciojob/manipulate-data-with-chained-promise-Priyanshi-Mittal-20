//your JS code here. If required.
let arr=[1,2,3,4]
let promise=new Promise((res,rej)=>{
	setTimeout(()=>{
		let odd=arr.filter(num=>num%2!=0)
		let div1=document.createElement("div")
		div1.setAttribute("id","output")
		div1.innerText=odd
		document.body.append(div1)
		setTimeout(()=>{
		let even=arr.filter(num=>{
			if(num%2==0)
			{
				return num*2
		})
			let div2=document.createElement("div")
			div2.setAttribute("id","output")
			div2.innerText=even
			document.body.append(div2)
	},2000)
	res("Promise Resolved")
	},1000)
}).then(data=>console.log(data))
.catch(err=>console.log(err))