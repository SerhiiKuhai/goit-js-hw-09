function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n);var i=n("7Y9D8");function l(e,r){return new Promise(((t,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?t({position:e,delay:r}):o({position:e,delay:r})}),r)}))}document.querySelector(".form").addEventListener("submit",(function(r){r.preventDefault();const t=r.currentTarget.delay.valueAsNumber,o=r.currentTarget.step.valueAsNumber,n=r.currentTarget.amount.valueAsNumber;for(let r=0;r<n;r+=1){l(r+1,t+o*r).then((({position:r,delay:t})=>{console.log(`✅ Fulfilled promise ${r} in ${t}ms`),e(i).Notify.success(`✅ Fulfilled promise ${r} in ${t}ms`)})).catch((({position:r,delay:t})=>{console.log(`❌ Rejected promise ${r} in ${t}ms`),e(i).Notify.failure(`❌ Rejected promise ${r} in ${t}ms`)}))}r.currentTarget.reset()}));
//# sourceMappingURL=03-promises.ec20692d.js.map