let d, e, g, h, j, k;
let calc={
	saitTen: [
    	[0],
    	[2, 1],
    	[4, 1.5],
    	[7, 2]
	],
	saitDiz: [
		[0],
    	[3, 0.5],
    	[5, 1],
    	[8, 1.5]
	],
	saitAdapt: [
		[0],
		[2, 1],
		[4, 2],
		[7, 3]
	],
	run(){
		let cena = parseInt(d) + parseInt(g) + parseInt(j);
		console.log(cena);
		let time = parseInt(e) + parseInt(h) + parseInt(k);
		
	}
}	

	function saitId(){
        let a=document.getElementById('sait').value;
        /*console.log(a);*/ 
        let d = calc.saitTen[a][0];
        let e = calc.saitTen[a][1];
        /*console.log(d);
        console.log(e);*/
		return;
	}
	function dizId(){
        let b =document.getElementById('dizSait').value;
        console.log(b); 
        let g=calc.saitDiz[b][0];
        let h=calc.saitDiz[b][1];
        /*console.log(g);
        console.log(h);*/
		return;
	}
	function adaptId(){
        let c=document.getElementById('adapt').value;
        console.log(c); 
        let j=calc.saitAdapt[c][0];
        let k=calc.saitAdapt[c][1];
        /*console.log(j);
        console.log(k);*/
		return;
	}
function f(){
	calc.run();
	console.log(calc.run.cena);
	console.log(calc.run.time);
}
saitId();
dizId();
adaptId();
f();

/*let d, e, g, h, j, k;
let cena = d+g+j;
let time = e+h+k;

function saitId(){
        let a=document.getElementById('sait').value;
        /*console.log(a); 
        let d=saitTen[a][0];
        let e=saitTen[a][1];
        console.log(d);
        console.log(e);
}
function dizId(){
        let b=document.getElementById('dizSait').value;
        /*console.log(b); 
        let g=saitDiz[b][0];
        let h=saitDiz[b][1];
        console.log(g);
        console.log(h);
}
function adaptId(){
        let c=document.getElementById('adapt').value;
        /*console.log(c); 
        let j=saitAdapt[c][0];
        let k=saitAdapt[c][1];
        console.log(j);
        console.log(k);
}

function f(){
   
}

*/
/*let d = saitTen[a];
        console.log(d);
let i = saitDiz[b];
    console.log(i);
let e = saitAdapt[c];
    console.log(e);*/

/*let ten = prompt ("Выбери стиль сайта 1-Сайт визитка 2-Сайт блог 3-многостраничный сайт");
    console.log(ten);
let diz = prompt ("Выбери дизайн сайта 1-универсальный 2-с макета psd 3-уникальный");
    console.log(diz);
let ad = prompt ("Выбери адаптацию сайта 1-пк 2-мобилый 3-пк и мобильный");
    console.log(ad);
function get(i){
    if (ten <= 3){    
    let i = ten;
    alert(i);
        }
}*/
/*alert(ten);
alert(diz);
alert(ad);*/