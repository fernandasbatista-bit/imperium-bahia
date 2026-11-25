'use strict';
function pricing(subtotal, first, coupon){
 if(!Number.isSafeInteger(subtotal)||subtotal<0||subtotal>9999999999)throw new Error('Subtotal inválido');
 const rate=coupon==='BEMVINDO10'&&first?10:coupon==='SPORT5'&&subtotal>=10000?5:0;
 const discount=Math.round(subtotal*rate/100), afterDiscount=subtotal-discount;
 const shipping=first||afterDiscount>=25000?0:2490;
 return {subtotal,discount,afterDiscount,shipping,total:afterDiscount+shipping,first,rate:rate/100,coupon:rate?coupon:null};
}
module.exports={pricing};
