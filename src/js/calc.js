"use strict";
let d, e, g, h, j, k;
var  calc = {
    saitTen : [
        [0],
        [10, 1],
        [15, 1.5],
        [20, 2]
    ],
    saitDiz : [
        [0],
        [5, 0.5],
        [10, 1],
        [15, 1.5]
    ],
    saitAdapt : [
        [0],
        [3, 1],
        [6, 2],
        [9, 3]
    ]
}
function saitId(){
        let a=document.getElementById('sait').value;
        d=calc.saitTen[a][0];
        e=calc.saitTen[a][1];
        if (a == 0) {
            alert("выбери ТИП САЙТА");
        };
    return;
}
function dizId(){
        let b=document.getElementById('dizSait').value;
        g=calc.saitDiz[b][0];
        h=calc.saitDiz[b][1];
        if (b == 0 ) {
            alert("выбери ДИЗАИН");
        };
    return;
}
function adaptId(){
        let c=document.getElementById('adapt').value;
        j=calc.saitAdapt[c][0];
        k=calc.saitAdapt[c][1];
        if (c == 0 ) {
            alert("выбери АДАПТИВНОСТЬ");
        };
    return;
}


function f(saitId, dizId, adaptId){
    alert("цена : " + (d+g+j) + "$" + " и займет : " + (e+h+k) + " дней" );
}
