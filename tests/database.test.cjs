const assert=require('node:assert/strict');const {pricing}=require('../banco/pricing.cjs');const {normalizeItems,hash,verify}=require('../banco/db.cjs');
(async()=>{
 assert.equal(pricing(6490,true,'BEMVINDO10').total,5841);
 assert.equal(pricing(6490,false,'BEMVINDO10').shipping,2490);
 assert.equal(pricing(25000,false,'').shipping,0);
 assert.equal(pricing(25000,false,'SPORT5').shipping,2490);
 assert.equal(pricing(10000,false,'SPORT5').discount,500);
 assert.equal(pricing(9999,false,'SPORT5').discount,0);
 assert.deepEqual(normalizeItems([{id:25,size:'P',qty:1},{id:25,size:'P',qty:2}]),[{id:25,size:'P',qty:3}]);
 assert.throws(()=>normalizeItems([{id:999,size:'P',qty:1}]));
 assert.throws(()=>normalizeItems([{id:25,size:'P',qty:-1}]));
 assert.throws(()=>normalizeItems([]));
 const a=await hash('senha-teste-123'),b=await hash('senha-teste-123');assert.notEqual(a,b);assert.ok(await verify('senha-teste-123',a));assert.ok(!await verify('senha-errada',a));
 console.log('Banco: 13 verificações locais aprovadas (preços, validação, hash). MySQL real não testado.');
})().catch(e=>{console.error(e);process.exitCode=1});
