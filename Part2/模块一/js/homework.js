function Q8(){
    var i = 100;
    i++;
    j = i++;
    y = ++j;
    console.log(j);
    console.log(y);
}

function QA9(){
    alert((324*(23+214)/(568-129))-11*(235-24));
}

function QA10(){
    var beforeTex = document.getElementById("beforeTax");
    if (beforeTex.value>0)
        alert("公积金数额="+beforeTex.value*0.1*2);
    else
        alert("请输入一个大于0的数");
}

function QA11(){
    alert(Math.pow((23+Math.pow(5,7))/45,2));
}

function QA12(){
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    if  (radius>0 && height>0)
        alert("体积V="+Math.PI*Math.pow(radius,2)*height);
    else
        alert("请检查数据合法性！(半径和高必须大于0)");
}

function QA13(){
    var day = document.getElementById("day").value;
    console.log(day);
    switch (Math.abs(day%7)) {
        case 0:
            alert("星期二");
            break;
        case 1:
            alert("星期三");
            break;
        case 2:
            alert("星期四");
            break;
        case 3:
            alert("星期五");
            break;
        case 4:
            alert("星期六");
            break;
        case 5:
            alert("星期天");
            break;
        case 6:
            alert("星期一");
            break;
        default:
            alert("请确认输入的合法性");
            break;
    }
}

function QA14(){
    var num=document.getElementById("threeBitNumber").value;
    alert(num+"的各个位数之和为"+(num%10+Math.floor(num/10)%10+Math.floor(num/100)));
}

function QA15(){
    var num = document.getElementById("QA15Number").value;
    if(num%5==0)
    {
        //能被5整除 接下来判断能不能被6整除
        if (num%6==0) {
            alert("这个数同时能被5和6整除");
        }
        else{
            alert("这个数能被5整除，但是不能被6整除");
        }
    }
    else{
        //不能被5整除 接下来判断能不能被6整除
        if (num%6==0) {
            alert("这个数能被6整除，但是不能被5整除");
        }
        else{
            alert("这个数既不能被5整除，也不能被6整除");
        }
    }
}

function QA16(){
    num1 = document.getElementById("QA16Number1").value;
    num2 = document.getElementById("QA16Number2").value;
    if ((num1%2)==(num2%2)) {
        alert("这两个数字奇偶性一致");
    }
    else{
        alert("这两个数字奇偶性不一致");
    }
}

function QA17() {
    function isLeap(year){
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    //这里没有考虑公元的前的规则是和公元后不一样的
    year = document.getElementById("QA17Year").value;
    isLeap(year)?alert(year+"年是闰年"):alert(year+"年不是闰年")
}
    
function QA18() {
    for(var m = 1,n = 2,i=1; m + n < 25; m++){
        n += 3;// n=n+3;
        console.log(m);
        console.log("调试信息:上面是第"+m+"次循环结束时m的值,循环结束时n="+n);
        m+n<25?console.log('m+n='+(m+n)+'<25，循环继续'):console.log('m+n='+(m+n)+'>=25，循环即将退出')
    }
}

function QA19() {
    for(var i = 30,n=1 ; i > 5 ; i -= 7,n++){
        console.log(i--);
        console.log("第"+n+"次循环结束");
        i>5?console.log(i+">5，循环继续"):console.log(i+"<=5,循环即将退出");
    }
}


function QA20() {
    num = document.getElementById("QA20Number").value;
    alert(num*(Number(num)+ Number(1))/2);
}

function QA21() {
    num = document.getElementById("QA21Number").value;
    function factorial(n){
        return n<2?1:n*factorial(n-1);
    }
    alert(factorial(num));
}

function QA22() {
    num = document.getElementById("QA22Number").value;
    function factorial2(n){
        return n<3?1.5:(Number(n)+ Number(1))/n+factorial2(n-1);
    }
    alert(factorial2(num));
}

function QA23() {
    num = document.getElementById("QA23Number").value;
    function divisors(integer) {
        console.log(1);//一个数的约数必然包括1及其本身。
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
            {if (integer % i === 0) console.log(i);}
        if (integer>1) console.log(Number(integer));//一个数的约数必然包括1及其本身。
    }
    divisors(num);
}

function QA24() {
    var numlist = new Array();
    for (var index = 1000; index < 10000; index++) {
        // var k_number = Math.floor(index/1000);
        // var h_number = Math.floor(index/100%10);
        // var t_number = Math.floor(index/10%10);
        // var number = index%10;
        if (Math.pow(Math.floor(index/1000),4)
        + Math.pow(Math.floor(index/100%10),4)
        + Math.pow(Math.floor(index/10%10),4)
        + Math.pow(index%10,4) == index)
        numlist.push(index);
    }
    alert("四位数的水仙花数有"+numlist);
}

function QA25() {
    
    function divisors(integer) {
        integers.push(1);//一个数的约数必然包括1及其本身。
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
            {if (integer % i === 0) integers.push(i);}
            //根据需求这里直接忽略数字本身
    }
    
    function getSum(total, num) {
        return total + Math.round(num);
    }

    for (var index = 1; index < 10001; index++) {
        var integers = new Array();
        divisors(index);
        if (index==integers.reduce(getSum, 0)) console.log(index);
        // console.log(index+'次'+integers.reduce(getSum, 0));
    }
}

function QA26(){
    num = document.getElementById("QA26Number").value;
    function hasDivisor(integer) {
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
        {if (integer % i === 0) return true;}//只要存在可以整除的就返回true，是一个倍数（不是质数）
        return false;
    }
    hasDivisor(num)?alert(num+"不是一个质数"):alert(num+"是一个质数");
}

function QA27(){
    function hasDivisor(integer) {
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
        {if (integer % i === 0) return true;}//只要存在可以整除的就返回true，是一个倍数（不是质数）
        return false;
    }

    for(num = 1;num<=10000;num++){
        if (!hasDivisor(num)) console.log(num+"是一个质数");//不是倍数，才是质数，所以这里要取反
    }
}

function QA28(){
    for(var x=0;x<101;x++){
        for(var y=0;y<101-x;y++){
            for(var z=0;z<101-x-y;z++){
                if(3*x+2*y+z==200) console.log("苹果"+x+"个,鸭梨"+y+"个,桃子"+z+"个。");
            }
        }
    }
}

function QA29(){
    name = document.getElementById("QA29Number").value;
    if (name == "jt") alert("金团网");
    else if (name == "ejt") alert("金团相相贷");
    else if (name == "ejin") alert("网上综合金融体验馆");
    else alert("金团网络典当");
}

function QA32(){

    //for循环
    var sum = 0;
    for(i=1;i<101;i++){
        sum +=i;
    }
    alert("1+2+3+4+5+...+100 的值为"+sum);


    /* //while循环
    var i = 1, sum = 0;
    while(i<=100) {
        sum +=i++;
    }
    alert("1+2+3+4+5+...+100 的值为"+sum);
     */

/*     //do while循环
    var i = 1, sum = 0;
    do{
        sum +=i++;
    }
    while(i<=100);
    alert("1+2+3+4+5+...+100 的值为"+sum);
     */
}

function QA33() {
    var height = document.getElementById("QA33Height").value;
    var weight = document.getElementById("QA33Weight").value;
    var ideal = (height-108)*2;
    var ideal_min = ideal- 10;
    var ideal_max = ideal + 10;
    if (height <= 108) alert("对不起，题目给的算法无法考虑您的情况");
    else if (weight>ideal_max) {
        alert("您的体重已经超出理想值"+ideal+"斤10斤以上，属于超重");
    } else if ((weight<ideal_min)) {
        alert("您的体重已经低于理想值"+ideal+"斤10斤以上，属于偏瘦");
    } else {
        alert("您的体重在理想值"+ideal+"斤10斤以内，属于标准");
    }
}

function QA34() {
    //switch写法的另一种方式？不太明白这题的意思，或者说不太明白出题者想考核的知识点
    var grade = prompt("请输入分数");
    switch (parseInt(grade / 10)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert("你的成绩等级为不及格，继续加油哦！");break;
        case 6:
        case 7:
        case 8:
            alert("你的成绩等级为良好");break;
        default:
            alert("你的成绩等级为优秀");
        }
}

function QA34_if() {
    var grade = prompt("请输入分数");
    if (parseInt(grade / 10)>=9) alert("你的成绩等级为优秀");
    else if (parseInt(grade / 10)>=6) alert("你的成绩等级为良好");
    else alert("你的成绩等级为不及格，继续加油哦！")
}


function QA35() {
    var month = 0;
    var year = 0;
    function inputMonth(){
        month = Number(prompt("请输入月份(必须是1-12的整数)"));
    }
    function inputYear(){
        year = Number(prompt("请输入年份(必须是大于0整数)"));
        //不存在公元0年，讨论公历前的公历月份问题也是没有必要的，如非要讨论计算规则也是不一样的，需要另外补充
    }
    function isLeap(year){
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    var monthList = Array(1,2,3,4,5,6,7,8,9,10,11,12);
    var monthDay = Array(31,28,31,30,31,30,31,31,30,31,30,31);
    do {
        inputMonth();
    } while (!(monthList.includes(month)));
    if (month == 2) {
        do {
            inputYear();
        } while (!(Number.isInteger(year)&&year>0));
    }
    if (isLeap(year) && month == 2) alert("公元"+year + "年的2月是29天（闰年）");
    if (!(isLeap(year)) && month == 2) alert("公元"+year + "年的2月是28天（不是闰年）");
    if (month != 2) alert("公历"+ month + "月有"+monthDay[month-1]+"天");
}
