/*jshint esversion: 6 */
function QA01() {
    //参数：一个整数，返回一个由一个不包含其本身但包含1在内的所有其他约束的数组
    function divisors(integer) {
        let divisors = [1];//一个数的约数必然包括1及其本身。所以创建的时候就直接放个1，本身根据需求就不放了
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
            {if (integer % i === 0) divisors.push(i);}
        return divisors;
    }

    function getSum(total, num){
        return total + Math.round(num);
    }
    //下面这个是题目要求的函数，参数一个整数，如果是完美数返回true，不是则返回false
    function isPrefectNumber(integer){
        return integer == divisors(integer).reduce(getSum,0);
    }
    let num = document.getElementById("QA01Number").value;
    alert(isPrefectNumber(num));
}

function QA02() {
    //divisors复用
    //参数：一个整数，返回一个由一个不包含其本身但包含1在内的所有其他约束的数组
    function divisors(integer) {
        let divisors = [1];//一个数的约数必然包括1及其本身。所以创建的时候就直接放个1，本身根据需求就不放了
        for (var i = 2; i <= Math.floor(integer / 2); ++i)//除了本身以外其他的约数必定在其本身的1/2以下
            {if (integer % i === 0) divisors.push(i);}
        return divisors;
    }
    function getSum(total, num){
        return total + Math.round(num);
    }
    //判断盈数的封装函数，参数一个整数，如果是盈数返回true，不是则返回false
    function isAbundantNumber(integer){
        return integer < divisors(integer).reduce(getSum,0);
    }
    //实际执行部分。循环判断，将满足条件的数打印在控制台中
    for(i=1;i<=100;i++){
        if (isAbundantNumber(i)) console.log(i);
    }
}

function QA03() {
    let num = document.getElementById("QA03Number").value;
    function getFactorialSum(num){
        let i,temp = 1,sum = 0;
        for(i = 1;i<=num;i++){
            temp = i*temp; //第i项的值只需要在前一项基础上乘以i即可
            sum += temp;//将第i向加入总数中
        }
        return sum;
    }
    alert(getFactorialSum(num));
}

function QA04(){
    //递归阶乘
    function factorial(n){
        if(n <= 1) return 1;
        return n*factorial(n-1);
    }
    function isPetunia(n){
        return n == factorial(n/100)+factorial(n/10%10)+factorial(n%10);
    }
    for(i=100;i<1000;i++){
        if (isPetunia(i)) console.log(i);
    }
}

function QA05(){
    function getDivisorsSum(integer){
        let sum = 0;
        for (let i = 1; i <= Math.floor(integer / 2); i++) {
            if (integer % i == 0) {
                sum += i;
            }
        }
        return sum;
    }
    //返回在limit以内，integer的亲密数数组
    function intimacy(integer,limit){
        let intimacy =[];
        for (let n = 1;n <= limit; n++)
        if (getDivisorsSum(integer) == n && getDivisorsSum(n) == integer)
            intimacy.push(n);
        return intimacy;
    }
    

    for(let i=1;i <= 2000;i++){
        let result = intimacy(i,2000);
        if (result.length>0)
        console.log(i+"在2000以内的亲密数有"+"："+result);
    }
}
    
function QA06() {
//函数的功能：判断一个数是不是素数
//函数的名字：isPrime
//函数的参数：一个待判断的数
//函数的返回值：true/false
    function isPrime(num){
        let flag = true;
        for(let j=2;j<num;j++){
            if(num % j ==0){
                flag = false;
            }
    }
        return flag;
    }

//函数的功能：判断一个偶数能否拆分为两个素数的和
//函数的名字：isGoldbach
//函数的参数:一个待判断的数
//函数的返回值：true/false
function isGoldbach(num){
    var flag = false;
    for(var i=1;i<num;i++){
        if(isPrime(i) && isPrime(num - i)){
            flag = true;
            break;
        }else{
            continue;
        }
    }
    return flag;
}


for (var i=2;i<=10000;i+=2){//遍历2-10000的所有偶数，去判断每一个偶数是否满足哥德巴赫猜想
    if(isGoldbach(i)){
        console.log(i +"满足哥德巴赫猜想");
    }else{
        console.log(i + "不满足哥德巴赫猜想");
    }
}
}

function QA07() {
    let text = document.getElementById("QA07Text").value;
    function rev(char){
        return char.split("").reverse().join("");
    }
    alert("反转后的字符串:"+rev(text));
    
}

function QA08() {
    let text = document.getElementById("QA08Text").value;
    function rev(char){
        return char.split(" ").reverse().join(" ");
    }
    console.log("反转后的字符串:"+rev(text));
    
}

function QA09() {
    let char = document.getElementById("QA09Text").value;
    let n = document.getElementById("QA09Number").value;
    function rightchange(char,n){
        n = n % char.length;//确保循环
        return char.substr(char.length-n)+char.substr(0,char.length-n);
    }
    console.log(rightchange(char,n));
}

function QA10(){
    function repeatString(str,n) {
        return new Array(n+1).join(str);
    }
    function maxr(str){
        let char = [];//存储最大连续的字符(可能是多个字符数量都一样，所以用数组)
        let num = 1;//存储最大连续的数量
        let tempNum = 1;//临时计数器
        for(let i = 0; i < str.length; i++ ){
            if(str[i] == str[i+1]){
                tempNum += 1;
                if (tempNum > num ){
                    char = [];//因为已经大于num，所以需要清空
                    char.push(str[i]);//在数组中装入str[i]
                    num = tempNum;}
                else if (tempNum == num && !char.includes(str[i]))
                    char.push(str[i]);
            }
            else{
                //第i个字和第i+1个字不相等的时候 重置tempNum为1
                tempNum = 1;
            }
        }
        //console.log(char,num);
            if (char.length == 0) console.log("没有重复");
            else
            for(let i = 0;i<char.length;i++)
                console.log(repeatString(char[i],num));
    }
    let str = document.getElementById("QA10Text").value;
    maxr(str);
}

function QA11(){
    //由于题目对数据结构描述不具体，所以按照以下逻辑写
    //一个随机数组包含十个数据，统计大于等于平均数的数据个数
    let numList = [];
    for (i = 0;i<10;i++){
        numList[i] = Math.floor(Math.random()*100)
    }
    console.log(numList);
    
    //reduce求和（平均）
    let sum = numList.reduce(function(x,y){
        return x+y; });

    let average = sum/numList.length;
    console.log("average:"+average);
    
    //filter过滤大于平均的数据
    let aboveAverage = numList.filter(function(x){return x >= average;});
    
    console.log(aboveAverage.length);
}

function QA12(){
    let str = document.getElementById("QA12Text").value;
    function toBigFirst(str) {
        let newString = [];
        let nextFlag = true;//默认首字母大写
        for ( let i = 0; i< str.length; i++){
            //如果nextFlag是true，则把当前字符大写，不是则保持原样
            if (nextFlag) newString.push(str[i].toUpperCase());
            else newString.push(str[i]);
            nextFlag = false;
            if (str[i] == ' '){nextFlag = true;}//如果当前是空格，则下一个字符需要大写
        }
        return newString.join("");
    }
    console.log(toBigFirst(str));
}

function QA13() {
    //随机生成10个0-100的随机数填充到numList
    let numList = [];
    for (let i = 0;i<10;i++){
        numList[i] = Math.floor(Math.random()*100);
    }
    console.log(numList);
    let min=numList[0],minIndex=[],max=numList[0],maxIndex=[]; //如果需要考虑重复值并且都记录下标则需要使用数组
    for (let i=0;i<numList.length;i++){
        if (numList[i]==max) {maxIndex.push(i);}//等于最大值，下表进数组
        if (numList[i]>max) {max=numList[i];maxIndex=[];maxIndex.push(i);}//大于最大值，更新最大值，并清空index数组后再记录
        if (numList[i]==min) {minIndex.push(i);}
        if (numList[i]<min) {min=numList[i];minIndex=[];minIndex.push(i);}
    }
        console.log("最大值："+max,maxIndex);
        console.log("最小值："+min,minIndex);
}

function QA14() {
    //随机生成10个0-100的随机数填充到numList
    let numList = [];
    for (let i = 0;i<10;i++){
        numList[i] = Math.floor(Math.random()*100);
    }
    console.log(numList);
    //join方法连接成一个字符串。
    console.log(numList.join("|"));
}

function QA15() {
    //随机生成10个0-49的随机数填充到numList,0的概率是51%
    let numList = [];
    for (let i = 0;i<10;i++){
        let num = Math.floor(Math.random()*100);
        if (num>=50) numList.push(0);
        else numList.push(num);
    }
    console.log(numList);
    //filter过滤不为0的（回调函数使用箭头函数）
    let noZeroList = numList.filter((x)=>{ return x != 0;});
    console.log(noZeroList);
}

function QA16() {
    function unique(arr) {
        //ES6 Set对象自动对数组去重 返回Set对象
        //通过from方法，将Set对象转为数组
        return Array.from(new Set(arr));
    }
    //随机生成100个0-10的随机数填充到numList
    let numList = [];
    for (let i = 0;i<100;i++){
        numList[i] = Math.floor(Math.random()*10);
    }
    console.log(numList);
    console.log(unique(numList));
}

function QA17() {
    //升序排序 从小到大
    function upSort(Array) {
        return Array.sort((x,y) => {
            //1代表 x在后 -1代表 x在前 0代表保持
            //真时：大数在后 假时 小数（等数）在前
            return x>y?1:-1;
        });
    }
    //降序排序 从大到小
    function downSort(Array) {
        return Array.sort((x,y) => {
            //1代表 x在后 -1代表 x在前 0代表保持
            //真时：小数在后 假时 大数（等数）在前
            return x<y?1:-1;
        });
    }

    //随机生成10个0-10的随机数填充到numList
    let numList = [];
    for (let i = 0;i<10;i++){
        numList[i] = Math.floor(Math.random()*100);
    }
    console.log("原始："+numList);
    console.log("从小到大："+upSort(numList));
    console.log("从大到小："+downSort(numList));
}

function QA18(){
    //随机生成100个0-10的随机数填充到numList
    let numList = [];
    for (let i = 0;i<100;i++){
        numList[i] = Math.floor(Math.random()*10);
    }
    console.log("测试样本："+numList);

    //numList里面的值作为key，出现次数作为value
    function array2dict(Array){
        let key=[];
        let value=[];
        let pointer;
        let obj = {};
        //遍历Array，将添加没有的键或者在对应的value中加1
        for(let i=0;i<Array.length;i++){
            pointer = key.indexOf(Array[i]);
            if (pointer == -1){
                key.push(Array[i]);
                value.push(1);
            }
            else
            {
                value[pointer] +=1;
            }
        }
        //将两个数值合并成K-V
        for(let i=0;i<key.length;i++){
            obj[key[i]] = value[i];
        }
        return obj;
    }
    console.log(array2dict(numList));
}

function QA19(){
    for(let i=1;i<=9;i++){
        for(let j=i;j<=9;j++){//2层循环跳过重复的部分
            console.log(i+"*"+j+"="+i*j);
        }
    }
}

function QA20(){
    //随机生成10个0-100的随机数填充到numList
    let numList = [];
    for (let i = 0;i<10;i++){
        numList[i] = Math.floor(Math.random()*100);
    }
    console.log("测试样本："+numList);

    let buy = 0;
    let sell = 0;
    let profit = 0;
    for(let i=0;i<numList.length-1;i++){//循环指针1，只需要遍历到前一位
        for(let j=i+1;j<numList.length;j++){//循环指针2：i+1，计算利润，如果大于之前的记录就更新数据
            if (numList[j]-numList[i]>profit){
                buy=i;
                sell=j;
                profit = numList[j]-numList[i];
            }
        }
    }
    console.log('第'+(buy+1)+'天买,第'+(sell+1)+'天卖，赚：'+profit);

}