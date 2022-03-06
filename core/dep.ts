import Watcher from "./watcher";
import { remove } from "../utils";

let uid = 0; //用于dep技数的

export class Dep {
  static target: Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  // 增加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }

  // 移除订阅者
  removeSub(sub) {
    remove(this.subs, sub);
  }

  // 通知
  notify() {
    console.log(this.subs, "subs");

    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].update();
    }
  }
}

Dep.target = null;
