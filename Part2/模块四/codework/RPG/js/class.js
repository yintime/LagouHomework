/* jshint esversion: 6 */ 
//Creature类
export class Creature {
  //生物需要基本属性name名字，hp生命值，atk攻击力，def防御力
  constructor(name,hp,atk,def){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }
  //所有生物具备的基础攻击动作
  //对目标造成攻击方攻击力与目标防御力之间的差值，但不会出现负值
  attack(obj){
    let damage = this.atk-obj.def;
    if(damage >0)
    obj.hp -=(this.atk-obj.def);
  }
}

//在继承Creature类的基础上定义一个Hero类
class Hero extends Creature{
  constructor(name,hp,atk,def){
    super(name,hp,atk,def);
    this.type = "Hero";
  }
}

//在Hero类的基础上定义一个WhiteWizard类
export class WhiteWizard extends Hero{
  constructor(name,hp,atk,def){
    super(name,hp,atk,def);
    this.class="WhiteWizard";
  }
  //WhiteWizard有治愈目标的能力，使用攻击力的值计算回复量
  heal(obj){
    obj.hp += this.atk;
  }
}

//在Hero类的基础上定义一个Fighter类
export class Fighter extends Hero{
  constructor(name,hp,atk,def){
    super(name,hp,atk,def);
    this.class="Fighter";
  }
  //Fighter有重击能力，对目标造成的伤害变成2倍伤害（仅伤害）
  bash(obj){
    let damage = this.atk-obj.def;
    if(damage >0)
    obj.hp -=damage*2;
  }
}