/* jshint esversion: 6 */ 
//2020.12.28修改之前用新数组记录是不是双数的方法有点蠢
//现在换成乱序取值填充一个数组，一次填充同一个值2次，最后乱序一次
//生成颜色直接从这个数组里面取
//按理说前端也只是抓取服务器后台数据才对，乱序生成本来就应该在后端完成的。
//包括工厂没用对象方式，因为数据本身没有提前生成。
//2020.12.29 第三版 把GRID_SIZE与CSS关联
//由于布局也是通过JS控制，所以游戏封装成可以通过一个以GRID_SIZE为参数的函数对象
//游戏结束后，会自动以GRID_SIZ+2自动重置游戏
const gameBoard = document.getElementById('game-board');
let GRID_SIZE = 2;
const ColorPool = ['red','yellow','blue','green'];
//const colorCount = [0,0,0,0];//四种颜色的计数器，用于确保不出现最后无法匹配的情况，自第二版已弃用
let locked = false;//点击事件锁变量，用来防止过快点击
let lastGrid = null;

//随机在版面上分配各种颜色的色块但通过noShow遮盖颜色
//点击一个块，去除noShow显示颜色，并记录到lastGrid变量中
//再点击另一个块，去除noShow显示颜色，如过这个色块的颜色与上一个相同
//则同时移除两个色块
//不一致，则两个色块1秒后再增加noShow
//当gameBoard.children.length===0时，游戏结束
startNewGame(GRID_SIZE);

/* gameBoard.style = "grid-template-columns:repeat( "+ GRID_SIZE +",1fr);";
gameBoard.style.cssText += "grid-template-rows:repeat( "+ GRID_SIZE +",1fr);";
//我也不知道第二句为什么必须是对cssText+=才行，直接像上面一行一样赋值的话，会是覆盖效果？
let colorList = randomColorList(GRID_SIZE);
//这里就是一个对象（dom对象）工厂
//遍历grid的同时生成dom对象实例
//因为第一版是元素生成的时候通过随机赋值来确定颜色的，第二版实现了数据先生成
for (let i=1;i<=GRID_SIZE;i++){
  for(let j=1;j<=GRID_SIZE;j++){
    const Element = document.createElement('div');
    Element.style.gridRowStart = i;
    Element.style.gridColumnStart = j;
    Element.classList.add(colorList[GRID_SIZE*(i-1)+j-1]);
    Element.classList.add('noShow');
    const newElement = gameBoard.appendChild(Element);
    newElement.addEventListener("click",clicked);
  }
} */



function clicked() {
  if(!locked){
    if(lastGrid == null){
      lastGrid = this;
      this.classList.remove('noShow');
    }else{
      //在已经翻开一块的情况下
      this.classList.remove('noShow');
      if(this.className==lastGrid.className&&this!==lastGrid){
        //两块颜色一致，但不能是自己本身
        locked = true;
        setTimeout(() => {
          this.remove();
          lastGrid.remove();
          lastGrid = null;
          locked = false;
        }, 1000);
        setTimeout(() => {
          checkWin();
        }, 1500);
      }else{
        //两块颜色不一致
        self = this;
        locked = true;
        setTimeout(() => {
          self.classList.add('noShow');
          lastGrid.classList.add('noShow');
          lastGrid = null;
          locked = false;
        }, 1000);
      }
    }
  }
}
//drawRandomColor();
//console.log(gameBoard.children.length);



//工具函数写这里
//从ColorPool中随机返回一个值
function randomColor() {
  let num = Math.floor((Math.random()*ColorPool.length));
  return ColorPool[num];
}
//洗牌算法
function shuffle(arr) {
  for (let i=arr.length-1; i>=0; i--) {
      let rIndex = Math.floor(Math.random()*(i+1));
      // 打印交换值
      // console.log(i, rIndex);
      let temp = arr[rIndex];
      arr[rIndex] = arr[i];
      arr[i] = temp;
  }
  return arr;
}

//乱序生成颜色列表
function randomColorList(GRID_SIZE){
  let List=[];
  for (let i = 0 ; i < GRID_SIZE*GRID_SIZE/2; i++){
    let tempColor = randomColor();
    List.push(tempColor);
    List.push(tempColor);
  }
  List = shuffle(List);
  return List;
}
//流程打包
function checkWin(){
  if (gameBoard.children.length==0){
    alert('游戏结束');
    startNewGame(GRID_SIZE+=2);
  }
}

function startNewGame(GRID_SIZE){
  gameBoard.style = "grid-template-columns:repeat( "+ GRID_SIZE +",1fr);";
  gameBoard.style.cssText += "grid-template-rows:repeat( "+ GRID_SIZE +",1fr);";
  let colorList = randomColorList(GRID_SIZE);
  for (let i=1;i<=GRID_SIZE;i++){
    for(let j=1;j<=GRID_SIZE;j++){
      const Element = document.createElement('div');
      Element.style.gridRowStart = i;
      Element.style.gridColumnStart = j;
      Element.classList.add(colorList[GRID_SIZE*(i-1)+j-1]);
      Element.classList.add('noShow');
      const newElement = gameBoard.appendChild(Element);
      newElement.addEventListener("click",clicked);
    }
  }
}

