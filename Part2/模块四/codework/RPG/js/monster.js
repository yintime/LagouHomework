/* jshint esversion: 6 */ 
import { Creature } from "./class.js";

//Monster类，从Creature类继承
class Monster extends Creature{
  constructor(name,hp,atk,def){
    super(name,hp,atk,def);
    this.type = "Monster";
  }
}

//Goblin类 继承自Monster类
export class Goblin extends Monster{
  constructor(name){
    super("哥布林"+name,7,6,6);
    this.class = "Goblin";
  }
}