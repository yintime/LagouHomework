 /* jshint esversion: 6 */ 
const gameBoard = document.getElementById('game-board');
const GRID_SIZE = 4;//这里对应html文件里的设定，需要同时修改html 或者一开始DIV就用JS生成
const ColorPool = ['red','yellow','blue','green'];
const colorCount = [0,0,0,0];//四种颜色的计数器，用于确保不出现最后无法匹配的情况
let locked = false;//点击事件锁变量，用来防止过快点击
let lastGrid = null;

//随机在版面上分配各种颜色的色块但通过noShow遮盖颜色
//点击一个块，去除noShow显示颜色，并记录
//再点击另一个块，去除noShow显示颜色，如过这个色块的颜色与上一个相同
//则同时移除两个色块
//不一致，则两个色块1秒后再增加noShow
//当gameBoard.children.length===0时，游戏结束

//这里就是一个对象（dom对象）工厂
//遍历grid的同时生成dom对象实例
for (let i=1;i<=GRID_SIZE;i++){
  for(let j=1;j<=GRID_SIZE;j++){
    const Element = document.createElement('div');
    Element.style.gridRowStart = i;
    Element.style.gridColumnStart = j;
    Element.classList.add(randomColor());
    Element.classList.add('noShow');
    const newElement = gameBoard.appendChild(Element);
    newElement.addEventListener("click",clicked);
  }
}



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
          checkWin();
        }, 1000);
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
  //保证每种颜色至多4块，所以16个格子的情况下，必定能全部消除
  while (colorCount[num] >= GRID_SIZE){
    num = Math.floor((Math.random()*ColorPool.length));
  }
  colorCount[num]++;
  return ColorPool[num];
}
//流程打包
function checkWin(){
  if (gameBoard.children.length==0){
    setTimeout(alert('游戏结束'),2000);
  }
}

