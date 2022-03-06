import { Dep } from "./dep";

export default class Watcher {
  vm: any;
  exp: string;
  cb: Function;
  value: any;
  // 初始化时将自身加入Dep中
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get(); //强行调用get，将自身加入Dep中
  }

  // 更新函数
  update() {
    this.run();
  }

  run() {
    //最新值
    let value = this.vm.data[this.exp];
    //旧值
    let oldVal = this.value;
    if (value !== oldVal) {
      //更新旧值
      this.value = value;
      // 执行更新函数
      this.cb.call(this.vm, value, oldVal);
    }
  }

  get() {
    Dep.target = this;
    const value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }
}
