import { IVueOptions } from "./../types/index";
import Watcher from "./watcher";

// 解析匹配正则
// {{}}
const braceReg = /\{\{(.*)\}\}/;

// TODO:研究Compiler源码细致的编译原理
export class Compiler {
  options: IVueOptions;
  vm: any;
  constructor(options, vm) {
    this.options = options;
    this.vm = vm;

    // el可以为选择器或DOM元素
    const el =
      options.el instanceof HTMLElement
        ? options.el
        : document.querySelector(options.el);
    // 解析el
    this.compilerElement(el);
  }

  compilerElement(el) {
    // TODO:是否需要避免回流，如何实现
    const childNodes = el.childNodes;
    // TODO:广度、深度深入了解，这里采用的是广度.
    [].slice.call(childNodes).forEach((node) => {
      const text = node.textContent;
      const value = node.value;

      if (isElementNode(node)) {
        this.compile(node);
      } else if (isTextNode(node) && braceReg.test(text)) {
        // 如果text节点满足{{}}
        this.compilerText(node, braceReg.exec(text)[1].trim());
      }

      if (node.childNodes && node.childNodes.length) {
        // 遍历子节点
        this.compilerElement(node);
      }
    });
  }

  compile(node) {
    let nodeAttrs = node.attributes;

    Array.prototype.forEach.call(nodeAttrs, (attr) => {
      let attrName = attr.name;
      let text = attr.textContent;
      if (this.isDirective(attrName)) {
        let exp = attr.value;
        let dir = attrName.substring(2);
        if (this.isEventDirective(dir)) {
          this.compileEvent(node, this.vm, exp, dir);
        } else if (this.isModelDirective(dir)) {
          this.compileModel(node, this.vm, exp, dir);
        } else if (this.isBindDirective(dir)) {
          this.compileBind(node, this.vm, exp, dir);
        }
      }
    });
  }

  // 解析带{{}}的Text节点
  compilerText(node, exp) {
    let data = this.vm.data[exp]; // 获取替代{{}}的数据
    this.updateText(node, data); // 更新视图

    // 创建订阅者绑定更新函数
    new Watcher(this.vm, exp, (value) => {
      this.updateText(node, value);
    });
  }

  compileEvent(node, vm, exp, dir) {
    const eventType = dir.split(":")[1];
    const cb = vm.methods && vm.methods[exp];
    if (eventType && cb) {
      // 给Dom元素绑定事件回调
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  }

  compileModel(node, vm, exp, dir) {
    let val = vm.data[exp];

    this.updateModel(node, val);
    // 订阅者
    new Watcher(vm, exp, (value) => {
      this.updateModel(node, value);
    });

    // 添加事件回调
    node.addEventListener("input", (e) => {
      let newVal = e.target.value;
      if (val === newVal) {
        return;
      }
      this.vm.data[exp] = newVal;
      val = newVal;
    });
  }

  compileBind(node, vm, exp, dir) {
    let valueName = dir.split(":")[1];
    let val = vm.data[exp];

    this.updateBind(node, valueName, val);
    // 订阅者
    new Watcher(vm, exp, (value) => {
      this.updateBind(node, valueName, value);
    });
  }

  updateText(node, data) {
    node.textContent = typeof data === "undefined" ? "" : data;
  }

  updateModel(node, data) {
    node.value = typeof data === "undefined" ? "" : data;
  }

  updateBind(node, valueName, data) {
    node[valueName] = typeof data === "undefined" ? "" : data;
  }

  isDirective(name) {
    return name.indexOf("v-") === 0;
  }

  isEventDirective(name) {
    return name.indexOf("on:") === 0;
  }

  isModelDirective(name) {
    return name.indexOf("model") === 0;
  }

  isBindDirective(name) {
    return name.indexOf("bind:") === 0;
  }
}

// 判断是否为Text节点
function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}

// 判断为DOM其他节点
function isElementNode(node) {
  return node.nodeType === 1;
}
