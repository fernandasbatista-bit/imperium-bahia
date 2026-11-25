/* ByteMind: motor de consulta local, sem dependências. */
(function(root){
'use strict';
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const brl=n=>Number(n).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const tokens=q=>norm(q).match(/[a-z0-9]+/g)||[];
const stop=new Set('a o os as de da do das dos um uma uns umas para por com e em no na nos nas quero queria gostaria me mostre mostrar tem tenho voces voce vc qual quais quanto custa preco produto produtos loja site comprar encontrar ver preciso pode posso melhor mais menos ate abaixo acima entre reais rs favor tipo algum alguma gostaria'.split(' '));
const groups=[['Calçados',/\b(tenis|calcados?|sapatos?)\b/],['Vestuário',/\b(roupas?|vestuario|camisetas?|camisas?|regatas?|leggings?|calcas?|tops?|termicas?)\b/],['Acessórios',/\b(acessorios?|mochilas?|bolsas?)\b/],['Luta',/\b(luta|jiu|muay|kimono|rashguard|combate)\b/]];
const types=[[/\b(camisetas?|camisas?)\b/,/camiseta|camisa/],[/\b(regatas?)\b/,/regata/],[/\b(leggings?)\b/,/legging/],[/\b(shorts?|bermudas?)\b/,/short|bermuda/],[/\b(mochilas?)\b/,/mochila/],[/\b(tops?)\b/,/\btop\b/],[/\b(termicas?)\b/,/termic/],[/\b(kimonos?)\b/,/kimono/]];
function createAssistant(){
 let last=[],lastBrand=null,lastCategory=null,lastType=null,lastLimit=null;
 function reset(){last=[];lastBrand=lastCategory=lastType=lastLimit=null;}
 function answer(raw,ctx){
  const q=norm(raw).trim(), ps=ctx.products||[], brands=[...new Set(ps.flatMap(p=>[p.brand,p.retailer]).filter(Boolean))];
  const result=(text,items=[],actions=[])=>({text,ids:items.map(p=>p.id),actions});
  const pricing=ctx.pricing||{};
  if(!q)return result('Digite sua dúvida para eu ajudar.');
  if(/^(oi|ola|e ai|bom dia|boa tarde|boa noite|tudo bem)[!.? ]*$/.test(q))return result('Olá! Sou o ByteMind, consultor virtual da IMPÉRIUM BAHIA. Posso comparar produtos, montar seleções por orçamento, consultar seu carrinho e explicar as regras da loja.',[],['catalogo','colecoes']);
  if(/\b(cupom|cupons|codigo promocional)\b/.test(q))return result('BEMVINDO10: 10% na primeira compra identificada. SPORT5: 5% para subtotal a partir de R$ 100. Apenas um cupom por pedido. Aplique o código no carrinho. Promoções demonstrativas.',[],['carrinho']);
  if(/\b(frete|entrega|entregas|prazo|cep|envio)\b/.test(q)){const extra=pricing.subtotal>0?` No carrinho atual: ${pricing.first?'primeira compra identificada, frete grátis':pricing.shipping===0?'meta de frete grátis atingida':`faltam ${brl(Math.max(0,250-pricing.afterDiscount))} após descontos para a meta`}.`:'';return result('Primeira compra identificada por e-mail: frete grátis. Nas demais, frete grátis a partir de R$ 250 após descontos; abaixo disso o frete simulado é R$ 24,90. Prazos reais ainda não estão integrados.'+extra,[],['carrinho']);}
  if(/\b(carrinho|subtotal|meu total|total da compra)\b/.test(q)){return result(pricing.subtotal>0?`Seu carrinho: subtotal ${brl(pricing.subtotal)}, desconto ${brl(pricing.discount)}, frete ${brl(pricing.shipping)} e total estimado ${brl(pricing.total)}.`:'Seu carrinho está vazio.',[],['carrinho','catalogo']);}
  if(/\b(pagamento|pagar|pix|cartao|checkout|parcelamento|parcelas)\b/.test(q))return result('O checkout é demonstrativo: registra um pedido neste navegador, sem cobrança real. Pix, cartão e parcelamento dependem da futura integração comercial.',[],['carrinho']);
  if(/\b(pedido|pedidos|rastrear|rastreio)\b/.test(q))return result(ctx.orderCount==null?'Entre na sua conta demonstrativa para consultar informações locais. Ainda não há rastreamento real.':`Há ${ctx.orderCount} pedido(s) demonstrativo(s) registrados neste navegador para sua conta. Não existe rastreamento ou envio real.`,[],['conta']);
  if(/\b(troca|trocas|devolucao|reembolso|garantia)\b/.test(q))return result('A política comercial de trocas, devoluções e garantias ainda precisa ser publicada. Este piloto não realiza vendas reais; não vou inventar prazos ou condições.');
  if(/\b(loja fisica|endereco|localizacao|onde fica)\b/.test(q))return result('A loja física está prevista para Rua Carlos de Souza Nazaré, São Paulo – SP. Ainda não há número, data de inauguração ou horário confirmados.',[],['loja']);
  if(/\b(avaliar|avaliacao|avaliacoes|observacoes|feedback|sugestoes)\b/.test(q))return result('Após confirmar um pedido demonstrativo, aparece uma avaliação de 1 a 5 estrelas com observações opcionais. A opinião fica salva apenas neste navegador.');
  if(/\b(cadastro|cadastrar|login|senha|minha conta)\b/.test(q))return result('Você pode usar a área de conta para simular cadastro e login. Não use senhas reais neste protótipo: a autenticação comercial segura ainda precisa ser implementada.',[],['conta']);
  if(/\b(3d|360|realidade aumentada|modelo tridimensional)\b/.test(q))return result('No momento, a loja prioriza fotos e referências visuais dos produtos. A vitrine principal 3D foi removida para deixar o site mais limpo.',[],['catalogo']);
  if(/\b(estoque|disponibilidade|disponivel)\b/.test(q)&&!brands.some(b=>q.includes(norm(b))))return result('Os produtos exibidos estão no catálogo demonstrativo, mas não há controle de estoque real. Não posso confirmar disponibilidade para entrega.');
  if(/\b(historia|objetivo|sobre a loja|bytemind|projeto)\b/.test(q))return result('A IMPÉRIUM BAHIA é a evolução do piloto de e-commerce ByteMind. Nossa proposta é reunir moda esportiva, identidade baiana, informações claras e uma experiência de compra prática. O projeto ainda é demonstrativo.');
  if(/\b(colecoes|estacoes|verao|outono|inverno|primavera)\b/.test(q)){let season=Object.keys(ctx.seasons||{}).find(s=>q.includes(s));let picks=season?ps.filter(p=>ctx.seasons[season].ids.includes(p.id)):[];return result(season?`Seleção própria de ${season}: ${picks.length} itens disponíveis no catálogo. Não é uma coleção oficial das fabricantes.`:'Explore as seleções de verão, outono, inverno e primavera, com filtro por marca.',picks.slice(0,5),['colecoes']);}
  if(/\b(quais marcas|marcas disponiveis|lista de marcas)\b/.test(q))return result(`Marcas e vitrines com produtos cadastrados: ${brands.join(', ')}.`,[],['marcas']);
  const compare=/\b(comparar|compare|comparacao|diferenca|versus|vs)\b/.test(q);
  const follow=/\b(e (o|a|os|as)|mais barato|mais cara|dess[ae]s?|desses|essas|esses|del[ae]s?|deles|outr[oa]s?|qual deles|mesma marca)\b/.test(q);
  const named=brands.filter(b=>q.includes(norm(b)));
  const category=groups.find(([,r])=>r.test(q))?.[0];
  const type=types.find(([r])=>r.test(q))?.[1];
  const budgetMatch=q.match(/(?:ate|abaixo de|menos de|no maximo|orcamento de|r\$)\s*(?:r\$\s*)?(\d+(?:[.,]\d{1,2})?)/);
  const limit=budgetMatch?Number(budgetMatch[1].replace(',','.')):null;
  const sku=ps.filter(p=>p.sku&&q.includes(norm(p.sku)));
  let pool=ps.filter(p=>(!named.length||named.some(b=>p.brand===b||p.retailer===b))&&(!category||p.category===category)&&(!type||type.test(norm(p.name)))&&(limit==null||p.price<=limit));
  if(sku.length)pool=sku;
  if(follow&&!named.length&&!category&&!type&&last.length){pool=ps.filter(p=>last.includes(p.id)&&(limit==null||p.price<=limit));}
  if(!named.length&&!category&&!type&&!sku.length&&!follow&&limit==null){
   const words=tokens(q).filter(w=>!stop.has(w)&&w.length>=3);
   const scored=pool.map(p=>({p,score:words.reduce((a,w)=>a+(norm(p.name+' '+p.brand+' '+p.desc).includes(w)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
   if(scored.length)pool=scored.map(x=>x.p);else if(/\b(kit|academia|treino|corrida|recomendacao|recomende|equipamento)\b/.test(q)){const dept=(ctx.departments||[]).find(d=>q.includes(d.id))|| (ctx.departments||[]).find(d=>d.id==='musculacao');pool=dept?pool.filter(p=>dept.ids.includes(p.id)):pool;}else if(!/\b(catalogo|ofertas|promocoes|desconto|barat[oa]|car[oa])\b/.test(q))return result('Não encontrei uma resposta segura no catálogo ou nas regras da loja. Tente uma marca, tipo de produto, orçamento, frete ou cupom.',[],['catalogo']);
  }
  if(/\b(ofertas?|promocoes?|desconto)\b/.test(q))pool=pool.filter(p=>p.old>p.price);
  if(/\b(barat[oa]s?|menor preco|economizar)\b/.test(q)||limit!=null)pool.sort((a,b)=>a.price-b.price);
  if(/\b(car[oa]s?|maior preco)\b/.test(q))pool.sort((a,b)=>b.price-a.price);
  if(!pool.length)return result('Não encontrei itens que atendam a esses critérios no catálogo visível. Experimente outra marca, categoria ou orçamento.',[],['catalogo']);
  last=pool.map(p=>p.id);lastBrand=named[0]||null;lastCategory=category||null;lastType=type||null;lastLimit=limit;
  const picks=pool.slice(0,compare?4:5);
  if(/\b(tamanho|numeracao|medida|grade)\b/.test(q))return result('Confira a grade cadastrada nos cards abaixo. As medidas reais variam por fabricante; não há tabela oficial completa no piloto.',picks);
  if(compare){const sorted=[...picks].sort((a,b)=>a.price-b.price);return result(`Comparei ${picks.length} opções cadastradas. ${sorted[0].name} tem o menor preço entre elas (${brl(sorted[0].price)}). Os preços são demonstrativos e as diferenças técnicas devem ser conferidas no fabricante.`,picks);}
  return result(`Encontrei ${pool.length} opção(ões) no catálogo${limit!=null?' até '+brl(limit):''}. Veja ${picks.length===1?'o produto':'os primeiros '+picks.length+' produtos'} abaixo. Preços demonstrativos; fotos de referência.`,picks,['catalogo']);
 }
 return {answer,reset};
}
// Recomendação por conteúdo: considera categoria, marca, termos e faixa de preço.
function recommend(product, products, limit=3){
 if(!product||!Array.isArray(products))return [];
 const words=new Set(tokens(product.name).filter(w=>w.length>2&&!stop.has(w)));
 return products.filter(p=>p.id!==product.id&&p.category===product.category).map(p=>{
   const overlap=new Set(tokens(p.name).filter(w=>words.has(w))).size;
   const priceProximity=Math.max(0,1-Math.abs(p.price-product.price)/Math.max(1,product.price));
   const score=(p.brand===product.brand?2:0)+overlap*3+priceProximity;
   return {product:p,score};
 }).sort((a,b)=>b.score-a.score||a.product.price-b.product.price||a.product.id-b.product.id).slice(0,limit).map(x=>x.product);
}
const api={createAssistant,norm,brl,recommend};if(typeof module==='object'&&module.exports)module.exports=api;else root.ByteMind=api;
})(typeof globalThis!=='undefined'?globalThis:this);
