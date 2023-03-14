function carkms() {
    var cdata=document.getElementById("cdata").value;
    console.log(cdata);
    var totalcost=cdata*40;
    var dcost=document.getElementById("costc")
    dcost.innerHTML=`The Cost Of Travel is ${totalcost}`
}

function autokms() {
    var adata=document.getElementById("adata").value;
    console.log(adata);
    var totalcost=adata*30;
    var acost=document.getElementById("costa")
    acost.innerHTML=`The Cost Of Travel is ${totalcost}`
}

function bikekms() {
    var bdata=document.getElementById("bdata").value;
    console.log(bdata);
    var totalcost=bdata*20;
    var bcost=document.getElementById("costb")
    bcost.innerHTML=`The Cost Of Travel is ${totalcost}`
}
var a=10;
