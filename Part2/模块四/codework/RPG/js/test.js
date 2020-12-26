/* jshint esversion: 6 */
//导入模块
import {
  Goblin
} from "./monster.js";
import {
  Fighter,
  WhiteWizard
} from "./class.js";


let log = document.getElementById("log");

const monster1 = document.getElementById("monster1");
//把怪物放进一个数组，便于遍历
let monsters = [];
//通过类实例化一个Goblin
let monsterA = new Goblin("A");
monsters.push(monsterA);

//let monsterB = new Goblin("B");
//let monsterC = new Goblin("C");
//let monsterD = new Goblin("D");
//把英雄也放进一个数组，便于遍历
let heroes = [];
//通过类实例化一个对象，加入heroes数组
let heroA = new Fighter("鲁内斯", 20, 10, 3);
heroes.push(heroA);
//其实截止到上面为止，抽象类的逻辑去定义类>实例化对象基本就是面向对象的大部分内容，下面主要是游戏逻辑的东西
//严谨的RPG游戏逻辑比较复杂，我这边只简单写写，能写到哪里是哪里了
//let heroB = new Fighter("阿克", 20, 10, 3);
//let heroC = new WhiteWizard("蕾菲娅", 10, 5, 1);
//let heroD = new WhiteWizard("因格滋", 10, 5, 1);
monster1.src = "./img/" + monsterA.class + ".gif";
// monster2.src="./img/"+monsterB.class+".gif";
// monster3.src="./img/"+monsterC.class+".gif";
// monster4.src="./img/"+monsterD.class+".gif";
hero1.src = "./img/" + heroA.class + ".gif";
// hero2.src="./img/"+heroB.class+".gif";
// hero3.src="./img/"+heroC.class+".gif";
// hero4.src="./img/"+heroD.class+".gif";

const hero1Name = document.getElementById("hero1Name");
hero1Name.textContent = heroA.name;
const hero1Target = document.getElementById("hero1Target");
for (let i = 0; i < monsters.length; i++) {
  hero1Target.appendChild(document.createElement("option")).innerText = monsters[i].name;
}
console.dir(hero1Target.selectedIndex);

const hero1Action = document.getElementById("hero1Action");
//回合执行
let round = 1;

function startRound() {
  if (monsters.length > 0 && heroes.length > 0) {
    log.innerText = "第" + round + "回合\n";
    //简化逻辑，英雄总是先行动
    switch (hero1Action.value) {
      case "attack":
        log.innerText += heroA.name + " 攻击了 " + monsters[hero1Target.selectedIndex].name + "\n";
        //下面是一个实例化对象使用了类中的方法
        heroA.attack(monsters[hero1Target.selectedIndex]);
        log.innerText += "造成了" + (heroA.atk - monsters[hero1Target.selectedIndex].def) + "点伤害\n";
        //当怪物hp小于0时移出monsters数组
        if (monsters[hero1Target.selectedIndex].hp <= 0) {
          log.innerText += monsters[hero1Target.selectedIndex].name + "倒下了\n";
          monsters.splice(hero1Target.selectedIndex, 1);
        }
        //monsters数组为空时，没有活的怪物，战斗胜利
        if (monsters.length === 0)
          log.innerText += "战斗胜利\n";
        break;
      case "wait":
        log.innerText += heroA.name + " 待机\n";
        break;
      default:
        break;
    }
  }else if(heroes.length === 0){
    log.innerText="目前队伍中没有勇者";
  }else{
    log.innerText="目前这里没有怪物";
  }

  if (monsters.length > 0 && heroes.length > 0) {
    //先直接怪物反击heroA
    log.innerText += monsterA.name + " 攻击了 " + heroA.name + "\n";
    //下面也是实例化对象调用了类中的方法
    monsterA.attack(heroA);
    log.innerText += "造成了" + (monsterA.atk - heroA.def) + "点伤害\n";
    if(heroA.hp<=0) heroA.hp=0;
    if(heroA.hp>0)
      log.innerText += heroA.name + "还有" + heroA.hp + "HP\n";
    //如果要问怪物为什么不显示剩余血量，怪物不显示血量不是很符合正常逻辑吗
    //包括一些游戏设定中，主角甚至需要一些额外技能才能查看自己的HP
    //当hero hp小于0时移出monsters数组
    if(heroA.hp===0){
      log.innerText+=heroA.name+"倒下了\n";
      heroes.splice(0,1);
      if (heroes==0){
        log.innerText+="你被怪物团灭了\n";
      }
    }
  }
  round++;
}

const startButton = document.getElementById("startRound").addEventListener("click", startRound);
console.log(startButton);