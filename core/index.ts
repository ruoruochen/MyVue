import { IVueOptions } from "./../types/index";
import { observe } from "./observer";
import { Compiler } from "./compiler";

export function Vue(this: any, options?: IVueOptions) {
  this._init(options);
}

// 源码通过Mixin将模块区分，将各个模块功能插入Vue.prototype上。
// 在此省略Mixin,直接写方法,我们不做抽象。我们只需知道这个设计思路，应用到项目上就可以了。
let uid = 0;

Vue.prototype._init = function (options?: IVueOptions) {
  let vm = this;
  vm._uid = uid++;
  vm._self = vm;
  this.data = options?.data;
  this.methods = options?.methods;

  // 绑定属性代理，让我们通过this.xx获取数据，而不是this.data.xx
  // Object.keys(this.data).forEach((key) => {
  //   this.proxyKeys(key);
  // });

  // 各种init模块:Lifecycle、State、Event等等，我们先忽略抽象。
  // 监听者监听data的变化

  observe(this.data);

  // 解析DOM节点
  new Compiler(options, vm);
};

Vue.prototype.proxyKeys = (key) => {
  Object.defineProperty(this, key, {
    enumerable: true,
    configurable: true,
    get: function proxyGetter() {
      return this.data[key];
    },
    set: function proxySetter(newVal) {
      this.data[key] = newVal;
    },
  });
};
