import { Dep } from "./dep";
import { isObject, hasOwn } from "../utils/index";

// Observer类
export class Observer {
  value: any;
  constructor(value) {
    this.value = value;

    // TODO:源码中这里有个特殊逻辑，如果是数组会对Array方法进行改造，observerArray()，否则才会走walk。
    // 此处暂且忽略，以后补上。
    this.walk(this.value);
  }

  // 递归子属性数据劫持
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

// 创建Observer对象的工厂方法
export function observe(value: any, asRootData?: boolean): Observer | void {
  if (!isObject(value)) {
    return;
  }
  let ob: Observer | void;
  //   如果已经创建过observer 直接获取
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}

// 使数据变成可反应式
export function defineReactive(obj, key, value) {
  // 数据劫持、watcher加入Dep、变更通知dep
  const dep = new Dep();
  // 递归子属性进行数据劫持
  observe(value);
  // 数据劫持当前属性
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      // watcher加入Dep
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      if (value === newVal) {
        return;
      }
      console.log(key, value, "Value Change");

      value = newVal;
      // 变化通知dep
      dep.notify();
    },
  });
}
