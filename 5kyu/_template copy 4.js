// DESCRIPTION
//
//
// Answer:
// const Format = { tags: ['div', 'h1', 'p', 'span'] }

const baseObj = {
  //   message1: "hello",
  //   message2: "everyone",
  //   chain: [1,2,3],

  div(...args) {
    console.log("div:", args);
    return `<div>${args.join("")}</div>`;
  },
  p(...args) {
    console.log("p:", args);
    return `<p>${args.join("")}</p>`;
  },
  span(...args) {
    console.log("span:", args);
    return `<span>${args.join("")}</span>`;
  },
  h1(...args) {
    console.log("h1:", args);
    return `<h1>${args.join("")}</h1>`;
  },
};

const proxy = {
  //   chain: [],

  get(target, prop, receiver) {
    console.log("\ntarget:", target, "\nprop:", prop, "\nreceiver:", receiver);
    //     if (typeof target[prop] === 'object' && target[prop] !== null) {
    //       console.log("special");
    //     }
    //     this.chain.push(prop);
    //     console.log("get chain:", this.chain)
    //     return new Proxy(baseObj[prop], proxy);
    const ooo = {};

    ooo.div = new Proxy(baseObj.div, proxy);
    ooo.p = new Proxy(baseObj.p, proxy);
    ooo.span = new Proxy(baseObj.span, proxy);
    ooo.h1 = new Proxy(baseObj.h1, proxy);

    return baseObj[prop];

    let out = new Proxy(baseObj.div, proxy);
    return out;
    let o = baseObj.div("aaa");
    return o;
    return baseObj[prop]("aaa");
    return target[prop];
  },
  apply: function (target, thisArg, args) {
    console.log(`calling ${target} with args: ${args} thisArg: ${thisArg}`);
    return target(...args);
  },
};
const Format = {};

Format.div = new Proxy(baseObj.div, proxy);
Format.p = new Proxy(baseObj.p, proxy);
Format.span = new Proxy(baseObj.span, proxy);
Format.h1 = new Proxy(baseObj.h1, proxy);
