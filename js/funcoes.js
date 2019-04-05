function insert(num){
 	document.calc.visor.value=document.calc.visor.value+num;


}

function equal(){
	var exp=document.calc.visor.value;
	if(exp){
		document.calc.visor.value=eval(exp);
	}
}
function clean(){
	document.calc.visor.value ="";



}
function back(){
	var exp = document.form.visor.value;
    document.form.visor.value = exp.substring(0,exp.length-1);

}