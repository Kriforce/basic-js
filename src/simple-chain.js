import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === null ? "null" : value.toString());
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position - 1 >= this.chain.length ||
      position <= 0
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    position -= 1;
    this.chain = [
      ...this.chain.slice(0, position),
      ...this.chain.slice(position + 1),
    ];
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    const divider = "~~";
    for (let i = 0, len = this.chain.length; i < len; i++) {
      const current = this.chain[i];
      str += `( ${current} )${i + 1 < len ? divider : ""}`;
    }
    this.chain.length = 0;
    return str;
  },
};
