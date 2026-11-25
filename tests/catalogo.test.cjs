const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {recommend,createAssistant}=require('../js/bytemind.js');
const source=fs.readFileSync('js/app.js','utf8');const ctx=vm.createContext({});
vm.runInContext(source.slice(0,source.indexOf('const brandLogos ='))+'\nglobalThis.catalog=products;',ctx);
const products=JSON.parse(JSON.stringify(ctx.catalog));
assert.equal(products.length,16);assert.equal(new Set(products.map(p=>p.id)).size,16);
for(const p of products){assert.ok(p.brand&&p.image&&fs.existsSync(p.image),p.name);assert.ok(p.price>0);const r=recommend(p,products);assert.ok(r.length<=3);assert.ok(r.every(x=>x.id!==p.id&&x.category===p.category&&products.some(y=>y.id===x.id)));assert.equal(new Set(r.map(x=>x.id)).size,r.length);}
const a=createAssistant();const ctx2={products};const budget=a.answer('camisetas até R$ 100',ctx2);assert.ok(budget.ids.length);assert.ok(budget.ids.every(id=>products.find(x=>x.id===id).price<=100));assert.deepEqual(a.answer('tênis até R$ 1',ctx2).ids,[]);
assert.deepEqual(recommend(null,products),[]);assert.deepEqual(recommend(products[0],[products[0]]),[]);console.log('Catálogo real: 16 produtos validados; 16 listas de recomendações verificadas; 4 cenários adicionais aprovados.');
