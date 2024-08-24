// if,else -> nuhtsul shalgah
// tentsuu bnu ih bnu baga bnug shalgana
var age=16;
//>,<,>=,<=,==,!=
if(age>=18){
	console.log("ta nasand hursen baina")
}else{
	console.log("ta nasand hureegui baina");
}
var number=13;
var number1=15;
if(number<number1){
	console.log("ih baina");
}
else{
	console.log("baga baina");
}
var too=3; // 5%2=1,4%2=0
var too2=4;
if(too%2==1){
	console.log("sondgoi too");
}else{
	console.log("tegsh too ");
}
var too3=-2;
var too4=2;
if(too3<0){
	console.log("surug too");
}
else{
	console.log("eyreg too");
}
// && -> and/bas || -> or/esvel
var nas=25;
var huis="emegtei";
if(nas>17 && huis=="emegtei"){
	console.log("nasand hursen bas emegtei");
}else if(nas<17 && huis=="emegtei"){
	console.log("nasand hureegui bas emegtei");
}else{
	console.log("nasand hureegui bas emegtei bish");
}
var neg=16
var hoyr=10
var gurav=13
if(neg>hoyr && neg>gurav){
	console.log(neg+" hamgiin ih too ni")
}else if(hoyr>gurav && hoyr>neg){
	console.log(hoyr+" hamgiin ih too ni baina");
}else if(hoyr<gurav && hoyr<neg){
	console.log(gurav+" hamgiin ih too ni baina");
}
else{
	console.log(" buh too tentsuu baina");
}
// || -> or/esvel
// 35 5 esvl 2t huvaagdahuu
var num=35;
if(num%5==0 || num%2==0){
	console.log(num+"too 5 esvel 2t huvaagdana")
}else{
	console.log(num+"alind ch huvaagdahgui")
}
// garaas dun 0-100/ oruulahad hargalzah unelgeeg gargaj ireh 
var num1=78
if(num1<60 && num1>=0){
	console.log("F");
}else if(59<num1 &&num1<70){
	console.log("D");
}else if(69<num1 && num1<80){
	console.log("C");
}else if(79<num1 && num1<90){
	console.log("B");
}else if(89<num1 && num1<100){
	console.log("A");
}
else{
	console.log("tiim dun baihgui");
}
alert("ta tanihgui humuustei hamt neg uruund serlee.Shar");
alert("haalga ongoij bagtai humuus orj irlee");
alert("ta buhen end togloom toglohoor songogdson herev ylvav mash ih hemjeenii mungu hojih bolno.");
alert("niit 3 togloom baigaa");
alert("togloom bolgoniig ehlehiin umnu zarlana.2");
alert("ted 2 songolt uguv");
var songolt=prompt("harih/togloh");
if (songolt=="harih" || songolt=="Harih"){
	alert("ted taniig buudaj allaa.");
}else if (songolt=="togloh" || songolt=="Togloh");{
	alert("ehnii togloom");
	alert("umnu chini 4 haalga baina 1 haalga ni l ayulgui haalga");
	alert("ta ali haalgiig ni songoh ve");
}var neg=prompt("shar/ulaan/har/nogoon");
		if(neg=="shar"){
			alert("ta amid uldlee");
			alert("daraagiin togloom bol buu songoh");
			alert("end 2 buu baina ta neg buu songood uuriiguu buudaj sumgui baival ylna");
			var hoyr=prompt("ehnii buu/hoyr dahi buu/");
				if(hoyr=="ehnii buu"){
					alert("ta uhlee");
				}else if(hoyr=="hoyr dahi buu"){
					alert("ta yllaa");
					alert("suuliin togloom bol");
					alert("bid tanias 3 asuult asuugaad bugded ni zuv hariulval ylna");
					alert("ehnii asuult:Delhiin hamgiin tom uls bol Hytad");
					var gurav=prompt("tiim/ugui");
						if(gurav=="tiim"){
							alert("ta uhlee");
						}else if(gurav=="ugui"){
							alert("ta yllaa");
							alert("daraagiin asuult:delhiin hamgiin undur barilga bol Burj-Halif");
						}else{
							alert("tiim songolt baihgui");
						}
						var duruv=prompt("tiim/ugui");
							if(duruv=="tiim"){
								alert("ta yllaa");
								alert("daraagiin asuult:delhiin hamgiin bayn uls bol Katar") 
									var tav=prompt("tiim/ugui")
									if(tav=="tiim"){
										alert("ta yllaa");
										alert("bayr hurgey");
									}else if(tav=="ugui"){
										alert("ta uhlee")
									}else{
										alert("tiim songolt baihgui");
									}
							}else if(duruv=="ugui"){
								alert("ta uhlee");
							}else{
								alert("tiim songolt baihgui");
							}
				}else{
					alert("tiim songolt baihgui");
				}
		}else if (neg=="ulaan"){
			alert("ta uhlee");
		}else if(neg=="har"){
			alert("ta uhlee");
		}else if(neg=="nogoon"){
			alert("ta uhlee");
}else{
	alert("tiim songolt baihgui")
}