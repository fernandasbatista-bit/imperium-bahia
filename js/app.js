// IMPÉRIUM BAHIA — interações de demonstração em JavaScript puro.
const $ = s => document.querySelector(s);
const money = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const products = [
{id:1,name:"Tênis Pro Runner X3",category:"Calçados",price:429.90,old:499.90,emoji:"👟",image:"https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=85"],tag:"MAIS VENDIDO",tone:"#e4e9ed",rating:"4,9",desc:"Amortecimento responsivo e ajuste confortável para corrida e treino. Foto ilustrativa.",sizes:["38","39","40","41","42","43","44"],sizeLabel:"Numeração"},
{id:2,name:"Tênis Training Pulse",category:"Calçados",price:319.90,emoji:"🥾",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=85"],tag:"NOVO",tone:"#e8e5df",rating:"4,8",desc:"Estabilidade e conforto para treinos de academia. Foto ilustrativa.",sizes:["37","38","39","40","41","42","43"],sizeLabel:"Numeração"},
{id:3,name:"Camisa Térmica Dry-Fit",category:"Vestuário",price:119.90,old:149.90,emoji:"👕",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85"],tag:"-20%",tone:"#e2e9e4",rating:"4,7",desc:"Tecido leve, respirável e de secagem rápida. Foto ilustrativa.",sizes:["PP","P","M","G","GG","XG"],sizeLabel:"Tamanho"},
{id:4,name:"Shorts Performance Flex",category:"Vestuário",price:89.90,emoji:"🩳",image:"https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"],tone:"#e6e4ec",rating:"4,8",desc:"Liberdade de movimento para academia e atividades ao ar livre. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:5,name:"Kimono Trançado Jiu-Jitsu Pro",category:"Luta",price:389.90,old:449.90,emoji:"🥋",image:"https://maxmyer.com.au/cdn/shop/files/hayabusa-lightweight-gi-black-front.jpg?v=1753962393&width=1200",gallery:["https://maxmyer.com.au/cdn/shop/files/hayabusa-lightweight-gi-black-front.jpg?v=1753962393&width=1200","https://fujisports.eu/cdn/shop/products/7003_5_f405fc90-f362-43f8-8f39-db82c1edc59b_1600x1600.jpg?v=1750269144","https://maxmyer.com.au/cdn/shop/files/hayabusa-lightweight-gi-black-front.jpg?v=1753962393&width=1200"],tag:"DESTAQUE",tone:"#e6e8ed",rating:"4,9",desc:"Kimono trançado para prática de jiu-jitsu. Foto de referência; confira a tabela da marca.",sizes:["A0","A1","A2","A3","A4"],sizeLabel:"Grade do kimono"},
{id:6,name:"Rashguard de Compressão",category:"Luta",price:159.90,emoji:"🥊",image:"https://fr.venum.com/cdn/shop/files/21ece5ec2872a4b11b74a35f032b4661c8814347_VENUM_05904_109_G_2.jpg?v=1750672794",gallery:["https://fr.venum.com/cdn/shop/files/21ece5ec2872a4b11b74a35f032b4661c8814347_VENUM_05904_109_G_2.jpg?v=1750672794","https://www.xmartial.com/cdn/shop/files/xmartial-premium-black-bjj-rash-guard-1186436901.jpg?v=1774464965&width=500","https://fr.venum.com/cdn/shop/files/21ece5ec2872a4b11b74a35f032b4661c8814347_VENUM_05904_109_G_2.jpg?v=1750672794"],tag:"NOVO",tone:"#eee3e1",rating:"4,8",desc:"Peça de compressão com mobilidade para grappling e treino. Foto de referência.",sizes:["P","M","G","GG","XG"],sizeLabel:"Tamanho"},
{id:7,name:"Shorts Muay Thai Impact",category:"Luta",price:139.90,old:169.90,emoji:"🥊",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"],tag:"-18%",tone:"#eee5dc",rating:"4,7",desc:"Modelagem voltada à mobilidade durante os treinos. Foto ilustrativa de treino.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:8,name:"Smartwatch Active Fit",category:"Tecnologia",price:549.90,old:629.90,emoji:"⌚",image:"https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119",gallery:["https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119","https://cdn.prod.website-files.com/6435ca773f6f7b3dbd5819bc/672b1e8ebc8029b4e6a46440_Coros_Pace_Pro_Blue_02.webp","https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119"],tag:"OFERTA",tone:"#e4e1ed",rating:"4,9",desc:"Acompanhe atividades, tempo e métricas de treino. Foto de referência.",sizes:[]},
{id:9,name:"Fone Sport Bluetooth",category:"Tecnologia",price:189.90,emoji:"🎧",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85"],tone:"#e1e8eb",rating:"4,6",desc:"Áudio sem fio para acompanhar seus treinos. Foto ilustrativa de fone.",sizes:[]},
{id:10,name:"Garrafa Térmica 750ml",category:"Acessórios",price:69.90,old:89.90,emoji:"🧴",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85"],tone:"#e5ebe5",rating:"4,8",desc:"Hidratação prática para sua rotina. Foto ilustrativa de garrafa.",sizes:[]},
{id:11,name:"Luvas de Treino Grip",category:"Acessórios",price:79.90,emoji:"🧤",image:"https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=1200&q=85"],tone:"#e9e4e1",rating:"4,7",desc:"Aderência e conforto para exercícios. Foto ilustrativa.",sizes:["P","M","G"],sizeLabel:"Tamanho"},
{id:12,name:"Corda de Pular Speed",category:"Acessórios",price:59.90,emoji:"➰",image:"https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=85"],tone:"#e4e4eb",rating:"4,6",desc:"Ajustável para aquecimento e condicionamento. Foto ilustrativa.",sizes:[]}
,
{id:13,name:"Regata Dry-Fit Training",category:"Vestuário",price:79.90,old:99.90,emoji:"👕",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"],tag:"NOVO",tone:"#e8e8ed",rating:"4,8",desc:"Regata leve para musculação, corrida e treinos funcionais. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:14,name:"Jaqueta Corta-Vento Sprint",category:"Vestuário",price:229.90,old:269.90,emoji:"🧥",image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1200&q=85"],tag:"DESTAQUE",tone:"#e6e8eb",rating:"4,7",desc:"Camada externa para treinos ao ar livre. Foto ilustrativa.",sizes:["P","M","G","GG","XG"],sizeLabel:"Tamanho"},
{id:15,name:"Calça Legging Performance",category:"Vestuário",price:149.90,emoji:"🩱",image:"https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"],tone:"#e7e5eb",rating:"4,8",desc:"Legging esportiva para mobilidade e conforto. Foto ilustrativa.",sizes:["PP","P","M","G","GG"],sizeLabel:"Tamanho"},
{id:16,name:"Moletom Esportivo Urban",category:"Vestuário",price:189.90,old:219.90,emoji:"🧥",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1200&q=85"],tone:"#e5e5e8",rating:"4,6",desc:"Moletom casual para aquecimento e uso diário. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:17,name:"Top Esportivo Training",category:"Vestuário",price:109.90,emoji:"🎽",image:"https://images.unsplash.com/photo-1579758629938-03607ccdb7a7?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1579758629938-03607ccdb7a7?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"],tone:"#e8e3e7",rating:"4,8",desc:"Top esportivo para atividades físicas. Consulte as medidas da marca.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:18,name:"Calça Jogger Training",category:"Vestuário",price:159.90,emoji:"👖",image:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"],tone:"#e5e5e8",rating:"4,7",desc:"Calça jogger para aquecimento e rotina esportiva. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:19,name:"Shorts Muay Thai Classic",category:"Luta",price:129.90,emoji:"🥊",image:"https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85"],tag:"LUTA",tone:"#e8e3df",rating:"4,8",desc:"Shorts de referência para treino de muay thai. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:20,name:"Bandagem Elástica para Luta",category:"Luta",price:39.90,emoji:"🥊",image:"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85"],tone:"#e9e4e3",rating:"4,7",desc:"Bandagem para compor os equipamentos de treino. Foto ilustrativa.",sizes:["2,5 m","3 m","4 m","5 m"],sizeLabel:"Comprimento"},
{id:21,name:"Protetor Bucal Esportivo",category:"Luta",price:49.90,emoji:"🦷",image:"https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=85"],tone:"#e5e8e8",rating:"4,6",desc:"Acessório esportivo de proteção. Verifique as instruções do fabricante.",sizes:["Único"],sizeLabel:"Tamanho"},
{id:22,name:"Mochila Esportiva 25L",category:"Acessórios",price:179.90,old:209.90,emoji:"🎒",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA",tone:"#e2e5e8",rating:"4,9",desc:"Mochila para transportar roupas e acessórios de treino. Foto ilustrativa.",sizes:[]},
{id:23,name:"Meia Esportiva Cano Médio",category:"Acessórios",price:34.90,emoji:"🧦",image:"https://images.unsplash.com/photo-1586350977771-b3b0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1586350977771-b3b0?auto=format&fit=crop&w=1200&q=85"],tone:"#e8e8e8",rating:"4,6",desc:"Meia para corrida e academia. Foto ilustrativa.",sizes:["34–38","39–43","44–46"],sizeLabel:"Numeração"},
{id:24,name:"Óculos Esportivo Run",category:"Acessórios",price:139.90,emoji:"🕶️",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85"],tone:"#e6e8eb",rating:"4,7",desc:"Óculos esportivo de referência para atividades ao ar livre. Foto ilustrativa.",sizes:[]}

,
{id:25,name:"Camiseta Nike Dri-FIT Legend",brand:"Nike",category:"Vestuário",price:64.90,old:89.90,marketPrice:69.99,emoji:"👕",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA NIKE",tone:"#e6e8ed",rating:"4,8",desc:"Camiseta de treino inspirada na linha Dri-FIT. Fotos de referência; confira o modelo e a composição com o fabricante.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:26,name:"Camiseta adi365 Running Essentials",brand:"adidas",category:"Vestuário",price:129.90,old:159.90,marketPrice:149.99,emoji:"👕",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"],tag:"PREÇO ESPECIAL",tone:"#e9e9ec",rating:"4,8",desc:"Referência de camiseta leve da linha de corrida adidas adi365. Imagens ilustrativas.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:27,name:"Camiseta de Compressão HeatGear",brand:"Under Armour",category:"Vestuário",price:109.90,old:139.90,marketPrice:119.98,emoji:"🖤",image:"https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1000&q=85",gallery:["assets/images/camiseta-compressao-enviada.png","https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85"],tag:"TOP COMPRESSÃO",tone:"#e5e6e9",rating:"4,8",desc:"Peça de compressão inspirada na linha HeatGear. A imagem enviada é uma referência visual de camiseta preta de compressão.",sizes:["P","M","G","GG","XG"],sizeLabel:"Tamanho"},
{id:28,name:"Rashguard Technical Basic",brand:"Venum",category:"Luta",price:179.90,old:219.90,marketPrice:199.90,emoji:"🥋",image:"https://fr.venum.com/cdn/shop/files/21ece5ec2872a4b11b74a35f032b4661c8814347_VENUM_05904_109_G_2.jpg?v=1750672794",gallery:["https://fr.venum.com/cdn/shop/files/21ece5ec2872a4b11b74a35f032b4661c8814347_VENUM_05904_109_G_2.jpg?v=1750672794","https://porradafightwear.com/cdn/shop/files/porrada-fightwear-bjj-mma-purple-belt-ranked-rash-guard-fight-shorts_5b5630a1-65ef-4156-95f1-2c3a3c962b40_1800x1800.jpg?v=1746879029"],tag:"OFERTA LUTA",tone:"#e5e5e8",rating:"4,9",desc:"Rashguard de referência Venum para treino de grappling e MMA. Confira estampa e grade no fabricante.",sizes:["P","M","G","GG","XG"],sizeLabel:"Tamanho"},
{id:29,name:"Legging Puma Training",brand:"PUMA",category:"Vestuário",price:119.90,old:149.90,marketPrice:129.99,emoji:"🩱",image:"https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA PUMA",tone:"#e9e7ed",rating:"4,7",desc:"Legging esportiva inspirada na linha de treino PUMA. Foto de referência; consulte composição e medidas.",sizes:["PP","P","M","G","GG"],sizeLabel:"Tamanho"},
{id:30,name:"Kit 2 Camisetas Dry Fit",brand:"Max Titanium",category:"Vestuário",price:54.90,old:69.90,marketPrice:61.00,emoji:"👕",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"],tag:"PREÇO ECONÔMICO",tone:"#e8e8e8",rating:"4,7",desc:"Kit econômico de camisetas dry fit para treino. Imagens ilustrativas; confirme quantidade e composição.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:31,name:"Regata adidas Training 3-Stripes",brand:"adidas",category:"Vestuário",price:89.90,old:109.90,marketPrice:99.99,emoji:"👕",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA ADIDAS",tone:"#e8e9ed",rating:"4,7",desc:"Regata de treino inspirada na linha adidas Performance. Foto ilustrativa.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:32,name:"Shorts Muay Thai Classic",brand:"Venum",category:"Luta",price:189.90,old:229.90,marketPrice:417.41,emoji:"🥊",image:"https://dz.fairtex.com/cdn/shop/files/BS1901-3.png?v=1781601250",gallery:["https://dz.fairtex.com/cdn/shop/files/BS1901-3.png?v=1781601250","https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA COMBATE",tone:"#e8e5e2",rating:"4,8",desc:"Shorts de luta inspirado em modelos clássicos de Muay Thai. Fotos de referência; confirme a marca e o modelo exato.",sizes:["P","M","G","GG"],sizeLabel:"Tamanho"},
{id:33,name:"Kimono Jiu-Jitsu Basic",brand:"Keiko",category:"Luta",price:549.90,old:599.90,marketPrice:629.95,emoji:"🥋",image:"https://www.kingz.com/cdn/shop/files/DSC07346_2048x2048.jpg?v=1715196979",gallery:["https://www.kingz.com/cdn/shop/files/DSC07346_2048x2048.jpg?v=1715196979","https://maxmyer.com.au/cdn/shop/files/hayabusa-lightweight-gi-black-front.jpg?v=1753962393&width=1200"],tag:"KIT TATAME",tone:"#e6e8ed",rating:"4,8",desc:"Kimono de Jiu-Jitsu em faixa de preço intermediária. Fotos ilustrativas de modelos similares; confira fabricante, tecido e gramatura.",sizes:["A0","A1","A2","A3","A4"],sizeLabel:"Grade do kimono"},
{id:34,name:"Smart Band Active",brand:"Xiaomi",category:"Tecnologia",price:149.90,old:179.90,marketPrice:167.00,emoji:"⌚",image:"https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119",gallery:["https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119","https://b2b.innpro.pl/data/include/cms/Mibro/Watch-X1-black/2.jpg"],tag:"OFERTA TECH",tone:"#e5e6eb",rating:"4,7",desc:"Pulseira inteligente de referência para acompanhar atividades. Confirme modelo, compatibilidade e recursos.",sizes:[]},
{id:35,name:"Fone Endurance Run Bluetooth",brand:"JBL",category:"Tecnologia",price:219.90,old:259.90,marketPrice:239.00,emoji:"🎧",image:"https://www.gotunez.com/cdn/shop/articles/best_earbuds_for_running.jpg?v=1770269880",gallery:["https://www.gotunez.com/cdn/shop/articles/best_earbuds_for_running.jpg?v=1770269880","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA JBL",tone:"#e5e8ec",rating:"4,7",desc:"Fone esportivo Bluetooth inspirado na linha JBL Endurance. Imagens de referência; confira resistência e autonomia do modelo.",sizes:[]},
{id:36,name:"Mochila Esportiva Training",brand:"Fila",category:"Acessórios",price:279.90,old:319.90,marketPrice:351.49,emoji:"🎒",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",gallery:["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=85"],tag:"OFERTA ACESSÓRIO",tone:"#e7e8eb",rating:"4,6",desc:"Mochila esportiva para transportar itens de treino. Foto ilustrativa; confira litragem e compartimentos.",sizes:[]}
,
{"id": 37, "name": "Camiseta Essential Running", "brand": "Olympikus", "category": "Vestuário", "price": 69.9, "old": 89.9, "emoji": "👕", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta essential running da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 38, "name": "Camiseta Road Graphic", "brand": "ASICS", "category": "Vestuário", "price": 169.9, "old": 229.99, "emoji": "👕", "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta road graphic da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 39, "name": "Camiseta Dry Fit Elite", "brand": "Mizuno", "category": "Vestuário", "price": 44.9, "old": 59.9, "emoji": "👕", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"], "tag": "OFERTA ESPECIAL", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta dry fit elite da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 40, "name": "Camiseta Match Training", "brand": "Fila", "category": "Vestuário", "price": 79.9, "old": 99.9, "emoji": "👕", "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta match training da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 41, "name": "Top Training Sem Costura", "brand": "Lupo", "category": "Vestuário", "price": 59.9, "old": 79.9, "emoji": "👚", "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de top training sem costura da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 42, "name": "Legging Fitness Sem Costura", "brand": "Selene", "category": "Vestuário", "price": 89.9, "old": 119.9, "emoji": "👖", "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85"], "tag": "OFERTA ESPECIAL", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de legging fitness sem costura da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 43, "name": "Camiseta Esportiva Dry", "brand": "Penalty", "category": "Vestuário", "price": 49.9, "old": 69.9, "emoji": "👕", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta esportiva dry da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 44, "name": "Shorts Training Academia", "brand": "Domyos", "category": "Vestuário", "price": 49.9, "old": 64.9, "emoji": "🩳", "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de shorts training academia da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 45, "name": "Camiseta Running Respirável", "brand": "Kiprun", "category": "Vestuário", "price": 69.9, "old": 89.9, "emoji": "🏃", "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"], "tag": "OFERTA ESPECIAL", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta running respirável da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 46, "name": "Tênis Running Comfort", "brand": "New Balance", "category": "Calçados", "price": 329.9, "old": 399.9, "emoji": "👟", "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de tênis running comfort da categoria calçados. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["37", "38", "39", "40", "41", "42", "43"], "sizeLabel": "Tamanho"},
{"id": 47, "name": "Tênis Corrida Training", "brand": "Olympikus", "category": "Calçados", "price": 219.9, "old": 279.9, "emoji": "👟", "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de tênis corrida training da categoria calçados. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["37", "38", "39", "40", "41", "42", "43"], "sizeLabel": "Tamanho"},
{"id": 48, "name": "Tênis Wave Treino", "brand": "Mizuno", "category": "Calçados", "price": 349.9, "old": 429.9, "emoji": "👟", "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"], "tag": "OFERTA ESPECIAL", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de tênis wave treino da categoria calçados. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["37", "38", "39", "40", "41", "42", "43"], "sizeLabel": "Tamanho"},
{"id": 49, "name": "Kimono Jiu-Jitsu Training", "brand": "Koral", "category": "Luta", "price": 429.9, "old": 499.9, "emoji": "🥋", "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de kimono jiu-jitsu training da categoria luta. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["A0", "A1", "A2", "A3"], "sizeLabel": "Tamanho"},
{"id": 50, "name": "Rashguard BJJ Training", "brand": "Kingz", "category": "Luta", "price": 139.9, "old": 179.9, "emoji": "🥋", "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de rashguard bjj training da categoria luta. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": [], "sizeLabel": "Tamanho"},
{"id": 51, "name": "Camiseta Térmica Manga Longa", "brand": "Lupo", "category": "Vestuário", "price": 119.9, "old": 149.9, "emoji": "👕", "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85"], "tag": "OFERTA ESPECIAL", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de camiseta térmica manga longa da categoria vestuário. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": ["P", "M", "G", "GG"], "sizeLabel": "Tamanho"},
{"id": 52, "name": "Mochila Esportiva 20L", "brand": "Quechua", "category": "Acessórios", "price": 89.9, "old": 119.9, "emoji": "🎒", "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85", "gallery": ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85"], "tag": "NOVA MARCA", "tone": "#e9eaf0", "rating": "4,7", "desc": "Referência ilustrativa de mochila esportiva 20l da categoria acessórios. Imagem genérica; confirmar modelo exato e licença de uso antes de vender.", "sizes": [], "sizeLabel": "Tamanho"},
{"id":53,"name":"Camiseta Masculina de Treino Essential Domyos Preta","brand":"Domyos","category":"Vestuário","price":89.99,"rating":"4,8","desc":"Camiseta de treino Domyos Essential preta. Tecido leve e respirável para fitness e musculação. Referência Decathlon 8871331.","sizes":["P","M","G","GG","XG"],"tag":"MODELO REAL","retailer":"Decathlon","sku":"8871331","officialUrl":"https://www.decathlon.com.br/camiseta-masculina-de-treino-essential-domyos-preto-8871331-domyos/p","image":"","gallery":[],"tone":"#e8e9ee","emoji":"","sizeLabel":"Tamanho","photoStatus":"illustration"},
{"id":54,"name":"Camiseta Masculina de Corrida Run Dry 500 Kiprun Preta","brand":"Kiprun","category":"Vestuário","price":99.99,"rating":"4,8","desc":"Camiseta de corrida Kiprun Run Dry 500 preta, de secagem rápida e tecido leve. Referência Decathlon 8861547.","sizes":["P","M","G","GG","XG"],"tag":"MODELO REAL","retailer":"Decathlon","sku":"8861547","officialUrl":"https://www.decathlon.com.br/camiseta-masculina-de-corrida-run-500-dry-preta-8861547-kiprun/p","image":"","gallery":[],"tone":"#e8e9ee","emoji":"","sizeLabel":"Tamanho","photoStatus":"illustration"},
{"id":55,"name":"Mochila de Trilha 10L NH100 Quechua Preta","brand":"Quechua","category":"Acessórios","price":59.99,"rating":"4,8","desc":"Mochila de trilha Quechua NH100 preta com capacidade de 10 litros, indicada para caminhadas. Referência Decathlon 8775634.","sizes":[],"tag":"MODELO REAL","retailer":"Decathlon","sku":"8775634","officialUrl":"https://www.decathlon.com.br/mochila-de-trilha-10l-arpenaz-100-preta-preto-8775634-quechua/p","image":"","gallery":[],"tone":"#e8e9ee","emoji":"","sizeLabel":"Tamanho","photoStatus":"illustration"}
];
// Fotos de referência reais: URLs externas de fabricantes/lojas e Unsplash.
// A foto enviada pelo usuário foi mantida como referência principal da camiseta de compressão.
const productPhotoRefs = {
  1: ["https://cdn.sport-shop.pl/p/v1/big/af6fcfbf3c80c48c3dadf34b219e3bc2.jpg"],
  2: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85"],
  3: ["assets/images/camiseta-compressao-enviada.png","https://okdiario.com/img/2023/11/02/camiseta-termica-de-futbol-manga-larga-adulto-kipsta-keepdry-500-negra-1536x1536.jpg","https://chkokko.com/cdn/shop/files/1_4_0880578a-aea2-4ac6-9d8a-77663c8f0d4f.png?v=1778567132&width=1946"],
  4: ["https://www.casablank.ma/cdn/shop/collections/pose2_7bcb6a1a-ac10-4936-99ad-66423a4bf3bc.png?v=1769182889"],
  5: ["https://www.kingz.com/cdn/shop/files/DSC07346_2048x2048.jpg?v=1715196979","https://maxmyer.com.au/cdn/shop/files/hayabusa-lightweight-gi-black-front.jpg?v=1753962393&width=1200"],
  6: ["https://porradafightwear.com/cdn/shop/files/porrada-fightwear-bjj-mma-purple-belt-ranked-rash-guard-fight-shorts_5b5630a1-65ef-4156-95f1-2c3a3c962b40_1800x1800.jpg?v=1746879029","https://senteathletics.com/cdn/shop/files/20.png?v=1736733945&width=1500"],
  7: ["https://dz.fairtex.com/cdn/shop/files/BS1901-3.png?v=1781601250"],
  8: ["https://www.mibrofit.com/cdn/shop/files/MibroSmartWatchGSActive2_5_1500x.jpg?v=1750040119","https://b2b.innpro.pl/data/include/cms/Mibro/Watch-X1-black/2.jpg"],
  9: ["https://www.gotunez.com/cdn/shop/articles/best_earbuds_for_running.jpg?v=1770269880","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85"],
  10: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85"],
  11: ["https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=1200&q=85"],
  12: ["https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=1200&q=85"],
  13: ["https://www.casablank.ma/cdn/shop/collections/pose2_7bcb6a1a-ac10-4936-99ad-66423a4bf3bc.png?v=1769182889"],
  14: ["https://shop.runawayshoes.net/images/1575/36_2430_1694038998743.jpg","https://www.bfgcdn.com/600_600_90/128-0372/nike-womens-shield-running-jacket-running-jacket-detail-9.jpg"],
  15: ["https://www.casablank.ma/cdn/shop/collections/pose2_7bcb6a1a-ac10-4936-99ad-66423a4bf3bc.png?v=1769182889","https://images.unsplash.com/photo-1506629905607-d9a6a5f5d6e0?auto=format&fit=crop&w=1200&q=85"],
  16: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85"],
  17: ["https://www.casablank.ma/cdn/shop/collections/pose2_7bcb6a1a-ac10-4936-99ad-66423a4bf3bc.png?v=1769182889","https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"],
  18: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=85"],
  19: ["https://dz.fairtex.com/cdn/shop/files/BS1901-3.png?v=1781601250"],
  20: ["https://cdn.shopify.com/s/files/1/1099/4438/products/Kambososhandwraps.jpg?v=1768258461"],
  21: ["https://www.opro.com/cdn/shop/files/IC0946.jpg?v=1753435807&width=1500"],
  22: ["https://sg.xexymix.com/cdn/shop/files/1608_bk_02.jpg?v=1768442568&width=1445","https://cdn.shopify.com/s/files/1/0021/0940/7313/files/BLOG_CONTENT_0_copy.webp?v=1742388720"],
  23: ["https://feetures.co.uk/cdn/shop/files/1_3d22d9c6-41d4-432a-bc72-f62eb6bd43c2_1200x1200.jpg?v=1768571846"],
  24: ["https://cdn11.bigcommerce.com/s-pf7re1klnb/images/stencil/original/products/35212/993666/831876Autre_visuel__01400.1771420801.jpg"],
  37: ["assets/images/olympikus-camiseta-running.png","assets/images/olympikus-camiseta-running.png"],
  47: ["assets/images/olympikus-tenis-running.png","assets/images/olympikus-tenis-running.png"],

};
products.forEach(product => {
  const photos = productPhotoRefs[product.id];
  if (photos?.length) {
    product.image = photos[0];
    product.gallery = photos.length > 1 ? photos : [photos[0], photos[0]];
  }
});

// Fotos licenciadas: configure somente arquivos obtidos com permissão comercial
// e correspondentes ao SKU/cor do item. Consulte FOTOS_LICENCIADAS.md.
const licensedProductPhotos = {
  // 25: {src:"assets/images/produtos/nike-dri-fit-legend-sku-cor.jpg",sku:"SKU-EXATO",license:"autorizacao-fornecedor"}
};
// Fotografias enviadas pelo usuário, com associação visual por tipo de peça.
// Não pressupõem correspondência de SKU nem liberação comercial do fabricante.
const photosProvidedByUser = {
  29: "assets/images/marcas/PUMA/29-legging-preta-referencia.jpg",
  32: "assets/images/marcas/Venum/32-shorts-muay-thai-branco-referencia.jpg",
  5: "assets/images/marcas/Kimonos/05-kimono-jiu-jitsu-referencia.jpg",
  25: "assets/images/nike-camiseta-branca.jpg",
  26: "assets/images/marcas/adidas/26-camiseta-running-referencia.jpg",
  31: "assets/images/marcas/adidas/31-regata-training-referencia.jpg",
  53: "assets/images/marcas/Decathlon/53-camiseta-domyos-preta-referencia.jpg",
  36: "assets/images/marcas/Fila/36-mochila-training.jpg",
  37: "assets/images/olympikus-camiseta-running.png",
  38: "assets/images/marcas/ASICS/38-camiseta-road-graphic.jpg",
  39: "assets/images/marcas/Mizuno/39-camiseta-dry-fit.jpg",
  40: "assets/images/marcas/Fila/40-camiseta-match-training.jpg",
  41: "assets/images/marcas/Lupo/41-top-sem-costura.jpg",
  42: "assets/images/marcas/Selene/42-legging-sem-costura.jpg",
  47: "assets/images/olympikus-tenis-running.png",
  48: "assets/images/marcas/Mizuno/48-tenis-wave.jpg",
  51: "assets/images/marcas/Lupo/51-camiseta-termica-longa.jpg"
};
// Catálogo fotográfico: não associar imagens de outros fabricantes a produtos de marca.
// Uma foto só é exibida quando a correspondência visual foi confirmada.
const officialPages={
  25:"https://www.nike.com.br/camiseta-dri-fit-nike-legend-masculina-023723.html?cor=7T",
  26:"https://www.adidas.com.br/camiseta-adi365-running-essentials/KB5966.html",
  28:null
};
products.forEach(p=>{
  const licensed = licensedProductPhotos[p.id];
  const userPhoto = photosProvidedByUser[p.id];
  p.userPhoto = Boolean(userPhoto);
  p.verifiedPhoto = p.id===3 || p.userPhoto || Boolean(licensed?.src && licensed?.sku && licensed?.license);
  p.officialUrl = p.officialUrl || officialPages[p.id] || null;
  if(userPhoto){p.image=userPhoto;p.gallery=[userPhoto];}
  if(licensed?.src && licensed?.sku && licensed?.license){p.image=licensed.src;p.gallery=[licensed.src];}
  if(!p.verifiedPhoto){p.image="";p.gallery=[];}
});
// Vitrine revisada: exibir apenas produtos de MARCA com foto própria cadastrada.
// Ilustrações genéricas em SVG não entram na vitrine pública.
// O catálogo original permanece no histórico do projeto; outros itens podem voltar
// quando receberem fotos correspondentes ao produto anunciado.
const hiddenProducts = products.filter(p => !(p.brand && p.verifiedPhoto && p.image));
const visibleProducts = products.filter(p => p.brand && p.verifiedPhoto && p.image);
products.splice(0, products.length, ...visibleProducts);
const brandLogos = {'adidas':'assets/images/logos/adidas.png','ASICS':'assets/images/logos/asics.png','Decathlon':'assets/images/logos/decathlon.png','Fila':'assets/images/logos/fila.png','Lupo':'assets/images/logos/lupo.png','Mizuno':'assets/images/logos/mizuno.png','Nike':'assets/images/logos/nike.png','Olympikus':'assets/images/logos/olympikus.png','Penalty':'assets/images/logos/penalty.png','PUMA':'assets/images/logos/puma.png','Selene':'assets/images/logos/selene.png','Venum':'assets/images/logos/venum.png'};
function brandLogo(name, cssClass="brand-logo", fallback=false){const src=brandLogos[name];return src?`<img class="${cssClass}" src="${src}" alt="Logo ${name}" loading="lazy">`:fallback?`<span class="${cssClass}-text">${name}</span>`:"";}
let brandNames=[...new Set([...products.map(p=>p.brand).filter(Boolean), ...(products.some(p=>p.retailer==="Decathlon")?["Decathlon"]:[])])].sort((a,b)=>a.localeCompare(b,'pt-BR'));
let selectedBrand="Todas";
function productPhoto(p,extraClass=""){
  const art=`assets/images/ilustracoes/${String(p.id).padStart(2,"0")}.svg`;
  const src=p.verifiedPhoto && p.image ? p.image : art;
  const alt=p.userPhoto?`Foto enviada como referência para ${p.name}`:p.verifiedPhoto?`Imagem cadastrada de ${p.name}`:`Ilustração fictícia de ${p.name}, não corresponde necessariamente ao produto real`;
  const label=p.userPhoto?"FOTO DE REFERÊNCIA":p.verifiedPhoto?"IMAGEM CADASTRADA":"IMAGEM ILUSTRATIVA";
  const type=p.userPhoto?"is-user-photo":p.verifiedPhoto?"is-product-photo":"is-illustration";
  return `<div class="illustrated-photo ${type} ${extraClass}"><img src="${src}" alt="${alt}" loading="lazy"><span class="illustration-label">${label}</span></div>`;
}

function renderBrandBar(){
 const el=$("#brandSelector");if(!el)return;
 el.innerHTML=`<button class="brand-tile ${selectedBrand==='Todas'?'selected':''}" data-brand="Todas"><span class="brand-word">TODAS</span><small>Ver catálogo</small></button>`+brandNames.map(b=>`<button class="brand-tile ${selectedBrand===b?'selected':''}" data-brand="${b}" aria-label="Filtrar produtos de ${b}">${brandLogo(b,"brand-logo",true)}<span class="brand-tile-name">${b}</span></button>`).join("");
}
const lookbookBrands=[
  {name:"Olympikus",topic:"roupas esportivas corrida Olympikus"},
  {name:"ASICS",topic:"ASICS running apparel roupa corrida"},
  {name:"Mizuno",topic:"Mizuno sportswear roupas esportivas"},
  {name:"Fila",topic:"Fila sportswear roupas fitness"},
  {name:"Lupo",topic:"Lupo Sport roupa fitness"},
  {name:"Selene",topic:"Selene fitness leggings top"},
  {name:"Penalty",topic:"Penalty roupa esportiva treino"},
  {name:"Decathlon",topic:"Decathlon Domyos Kiprun roupas treino"},
  {name:"Nike",topic:"Nike training sportswear"},
  {name:"adidas",topic:"adidas running training apparel"},
  {name:"Venum",topic:"Venum rashguard muay thai clothing"},
  {name:"PUMA",topic:"Puma fitness sportswear"}
];
function renderLookbook(){
 const host=$("#lookbookGrid");if(!host)return;
 host.innerHTML=lookbookBrands.filter(b=>brandNames.includes(b.name)).map((b,i)=>`<article class="lookbook-tile"><div class="lookbook-visual lookbook-color-${i%6}">${brandLogo(b.name,"lookbook-logo")||`<span class="lookbook-brand">${b.name}</span>`}</div><div class="lookbook-content"><strong>${b.name}</strong><p>Referências de looks e modelos esportivos.</p><a href="https://www.pinterest.com/search/pins/?q=${encodeURIComponent(b.topic)}" target="_blank" rel="noopener noreferrer">Ver inspirações no Pinterest ↗</a><button data-brand="${b.name}">Ver produtos da marca</button></div></article>`).join("");
}
function selectBrand(b){selectedBrand=b;category="Todos";searchTerm="";$("#searchInput").value="";renderBrandBar();renderProducts();$("#catalogo").scrollIntoView({behavior:"smooth"});}

let category="Todos",searchTerm="",cart=JSON.parse(localStorage.getItem("bmSportCartV2")||"[]"),favorites=JSON.parse(localStorage.getItem("bmSportFavs")||"[]"),selectedProduct=null,selectedSize=null,toastTimer;
const availableProductIds = new Set(products.map(p=>p.id));
cart = cart.filter(x=>availableProductIds.has(x.id));
favorites = favorites.filter(id=>availableProductIds.has(id));
function toast(text){$("#toast").textContent=text;$("#toast").classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("#toast").classList.remove("show"),2400)}
function productCard(p){const topBrand=p.brand||p.retailer;return `<article class="product-card"><div class="product-art photo-art" style="--tone:${p.tone}">${topBrand?`<span class="product-photo-brand-text">${topBrand}</span>`:""}${p.tag?`<span class="product-tag ${p.old?'sale':''}">${p.tag}</span>`:""}<button class="favorite ${favorites.includes(p.id)?"on":""}" data-fav="${p.id}" aria-label="Favoritar">${favorites.includes(p.id)?"♥":"♡"}</button>${productPhoto(p)}</div><div class="product-info"><span class="product-cat">${p.category}</span>${p.brand?`<span class="brand-chip">${brandLogo(p.brand,"chip-logo")}<span>${p.brand}</span></span>`:""}<h3>${p.name}</h3>${p.officialUrl?`<a class="official-photo-link" href="${p.officialUrl}" target="_blank" rel="noopener noreferrer">VER FOTOS DO MODELO NO FABRICANTE ↗</a>`:""}<div class="stars">★★★★★ <span>${p.rating} • avaliação</span></div><div class="price-line"><b class="price">${money(p.price)}</b>${p.old?`<s class="old-price">${money(p.old)}</s>`:""}</div>${p.marketPrice?`<small class="market-reference">Referência de mercado: ${money(p.marketPrice)}</small>`:""}<small class="installment">ou 10x de ${money(p.price/10)} sem juros</small><div class="card-actions"><button class="add-btn" data-detail="${p.id}">${p.sizes.length?"ESCOLHER TAMANHO":"VER PRODUTO"}</button><button class="view-btn" data-view="${p.id}" aria-label="Visualizar produto">VISUALIZAR</button></div></div></article>`}
function renderProducts(){let list=products.filter(p=>(selectedBrand==="Todas"||p.brand===selectedBrand||(selectedBrand==="Decathlon"&&p.retailer==="Decathlon"))&&(category==="Todos"||(category==="Promoções"?!!p.old:p.category===category))&&(p.name+" "+p.category+" "+p.desc+" "+(p.brand||"")+" "+(p.retailer||"")).toLowerCase().includes(searchTerm.toLowerCase()));let sort=$("#sortSelect").value;if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));$("#productGrid").innerHTML=list.map(productCard).join("");$("#noResults").hidden=!!list.length;$("#resultCount").textContent=`${list.length} produtos`}
function setCategory(c){category=c;selectedBrand="Todas";renderBrandBar();document.querySelectorAll("[data-category]").forEach(b=>b.classList.toggle("selected",b.classList.contains("category-pills")&&b.dataset.category===c));document.querySelectorAll("#mainNav [data-category]").forEach(b=>b.classList.toggle("active",b.dataset.category===c));renderProducts();$("#catalogo").scrollIntoView({behavior:"smooth"})}


/* Curadoria própria de estações: apenas IDs existentes do catálogo.
   Não representa campanhas ou coleções oficiais dos fabricantes. */
const seasonCatalog = {
  verao:{title:"Verão em movimento",description:"Roupas respiráveis, shorts e acessórios para dias quentes.",ids:[25,26,31,32,37,38,40,43,44,45,53,54,29,42]},
  outono:{title:"Outono com estilo",description:"Camadas versáteis, calçados e itens para acompanhar a rotina.",ids:[27,29,36,37,39,40,41,46,47,48,51,52,55]},
  inverno:{title:"Inverno sem parar",description:"Opções térmicas, compressão e peças para treinar no frio.",ids:[27,51,14,16,17,22,28,33,41,46,48,49]},
  primavera:{title:"Primavera cheia de energia",description:"Cores, conforto e movimento para renovar o treino.",ids:[25,26,29,30,31,37,38,39,40,41,42,43,45,47,48,53]}
};
let chosenSeason="verao";
function renderSeasonCollections(){
 const cfg=seasonCatalog[chosenSeason];
 if(!cfg)return;
 const selectedBrandValue=document.querySelector("#seasonBrand").value;
 const items=cfg.ids.map(id=>products.find(p=>p.id===id)).filter(Boolean);
 const brands=[...new Set(items.map(p=>p.brand||p.retailer||"IMPÉRIUM BAHIA"))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
 const brandSelect=document.querySelector("#seasonBrand");
 const safeBrand=brands.includes(selectedBrandValue)?selectedBrandValue:"Todas";
 brandSelect.innerHTML='<option value="Todas">Todas as marcas</option>'+brands.map(b=>`<option value="${b}">${b}</option>`).join("");
 brandSelect.value=safeBrand;
 const filtered=items.filter(p=>safeBrand==="Todas"||(p.brand||p.retailer||"IMPÉRIUM BAHIA")===safeBrand);
 document.querySelector("#seasonCaption").textContent=cfg.title;
 document.querySelector("#seasonDescription").textContent=cfg.description;
 document.querySelectorAll("[data-season]").forEach(btn=>{const active=btn.dataset.season===chosenSeason;btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));});
 document.querySelector("#seasonProducts").innerHTML=filtered.length?filtered.map(p=>`
 <article class="season-product">
  <div class="season-product-media">${productPhoto(p)}<span class="season-product-brand-text">${p.brand||p.retailer||"IMPÉRIUM BAHIA"}</span></div>
  <div class="season-product-body"><span>${p.category}</span><h3>${p.name}</h3><strong>${money(p.price)}</strong>
   <button type="button" data-detail="${p.id}" aria-label="Ver detalhes de ${p.name}">Ver produto <span aria-hidden="true">↗</span></button>
  </div>
 </article>`).join(""):'<p class="season-empty">Ainda não há produtos dessa marca nesta seleção.</p>';
}
const seasonTabsElement=document.querySelector("#seasonTabs");
if(seasonTabsElement){
 seasonTabsElement.addEventListener("click",event=>{const btn=event.target.closest("[data-season]");if(!btn)return;chosenSeason=btn.dataset.season;document.querySelector("#seasonBrand").value="Todas";renderSeasonCollections();});
 document.querySelector("#seasonBrand").addEventListener("change",renderSeasonCollections);
 renderSeasonCollections();
}

const departmentConfig=[
 {id:"luta",title:"Luta",subtitle:"Equipamentos para Jiu-Jitsu, Muay Thai e treino de combate.",emoji:"🥋",ids:[49,50,28,32,33,5,6,7,19,20,21]},
 {id:"corrida",title:"Corrida",subtitle:"Conforto e acessórios para acompanhar seu ritmo.",emoji:"🏃",ids:[37,38,45,46,25,26,1,3,13,14,22,23,24,10]},
 {id:"musculacao",title:"Musculação",subtitle:"Peças e acessórios para sua rotina de academia.",emoji:"🏋️",ids:[41,42,43,44,27,29,30,31,2,4,11,12,13,15,17,18]},
 {id:"tenis",title:"Tênis para esportes",subtitle:"Calçados para corrida, treino e atividades do dia a dia.",emoji:"👟",ids:[46,47,48,1,2]},
 {id:"roupas",title:"Roupas para esportes",subtitle:"Camisetas, compressão, jaquetas e peças fitness.",emoji:"👕",ids:[37,38,39,40,41,42,43,44,45,51,25,26,27,29,30,31,3,4,13,14,15,16,17,18,19]}
];
function renderDepartments(){
 const host=$("#departmentSections"); if(!host)return;
 host.innerHTML=departmentConfig.map(d=>{
  const picks=d.ids.map(id=>products.find(p=>p.id===id)).filter(Boolean).slice(0,4);
  if(!picks.length)return "";
  return `<section class="department-section" id="dept-${d.id}"><div class="department-top"><div><span class="recommend-label">✦ SELEÇÃO RECOMENDADA</span><h3>${d.emoji} ${d.title}</h3><p>${d.subtitle}</p></div><button data-department="${d.id}">VER CATEGORIA →</button></div><div class="department-products">${picks.map(productCard).join("")}</div></section>`;
 }).join("");
}
function dailyPromotion(){
 const discounted=products.filter(p=>p.old);
 const day=Math.floor(Date.now()/86400000);
 const item=discounted[day%discounted.length];
 if(!item){$("#dailyOfferText").textContent="Confira o catálogo de produtos.";return;}
 const discount=Math.round((1-item.price/item.old)*100);
 $("#dailyOfferText").textContent=`${item.name} com ${discount}% de desconto. Oferta demonstrativa do dia.`;
 $("#dailyOfferDate").textContent=`Oferta rotativa • ${new Date().toLocaleDateString("pt-BR")}`;
}
const SHIPPING_MIN=250, SHIPPING_DEMO=24.90;
let activeCoupon=localStorage.getItem("bmSportCoupon")||"";
// O servidor é a fonte de verdade da sessão e do histórico. Não armazene senhas no navegador.
let dbUser=null,dbOrderCount=null,dbConnected=false,checkoutQuote=null,checkoutBusy=false;
const initialCatalog=products.map(p=>({...p}));
for(const key of ['bmSportUsers','bmSportCurrentUser','bmSportOrders','imperiumBahiaReviews'])localStorage.removeItem(key);
async function dbApi(route,data){
 const response=await fetch('/api/db/'+route,{method:data===undefined?'GET':'POST',headers:data===undefined?{}:{'Content-Type':'application/json'},credentials:'same-origin',body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(12000)});
 let result;try{result=await response.json()}catch{throw new Error('Abra o site por npm start e confira o servidor MySQL.');}
 if(!response.ok)throw new Error(result.error||'Não foi possível concluir.');return result;
}
function currentEmail(){return dbUser?.email||''}
function isFirstOrder(email){return !!dbUser&&email===dbUser.email&&dbOrderCount===0}
function updateDbAccount(result){dbUser=result.user;dbOrderCount=result.orderCount;updateAccount();}
async function syncDbCatalog(){
 try{const items=await dbApi('catalog');const map=new Map(items.map(x=>[x.id,x]));
 const merged=initialCatalog.filter(p=>map.has(p.id)).map(p=>{const r=map.get(p.id);const price=r.price;return {...p,price,old:p.old>price?p.old:null,stock:r.stock};});
 products.splice(0,products.length,...merged);brandNames=[...new Set([...products.map(p=>p.brand),...(products.some(p=>p.retailer==='Decathlon')?['Decathlon']:[])])].sort((a,b)=>a.localeCompare(b,'pt-BR'));
 cart=cart.filter(x=>products.some(p=>p.id===x.id&&p.stock[x.size]>=x.qty));favorites=favorites.filter(id=>products.some(p=>p.id===id));
 if(selectedBrand!=='Todas'&&!brandNames.includes(selectedBrand))selectedBrand='Todas';
 dbConnected=true;$('#dbStatus').textContent='MySQL conectado • catálogo sincronizado';
 renderBrandBar();renderProducts();renderDepartments();renderSeasonCollections();renderLookbook();renderSmartCards();dailyPromotion();persistCart();
 return true;
 }catch(e){dbConnected=false;$('#dbStatus').textContent='MySQL desconectado • vitrine de demonstração, sem pedidos';return false;}
}
async function initializeDatabase(){if(await syncDbCatalog()){try{updateDbAccount(await dbApi('me'));}catch(e){toast(e.message);}}}

function getPricing(email=currentEmail()){
 const subtotal=Math.round(cart.reduce((v,x)=>{const p=products.find(p=>p.id===x.id);return v+(p?p.price*x.qty:0)},0)*100)/100;
 const first=isFirstOrder(email);
 let rate=0;
 if(activeCoupon==="BEMVINDO10"&&first)rate=.10;
 if(activeCoupon==="SPORT5"&&subtotal>=100)rate=.05;
 const discount=Math.round(subtotal*rate*100)/100;
 const afterDiscount=Math.max(0,Math.round((subtotal-discount)*100)/100);
 const shipping=!cart.length||first||afterDiscount>=SHIPPING_MIN?0:SHIPPING_DEMO;
 return {subtotal,discount,afterDiscount,shipping,total:Math.round((afterDiscount+shipping)*100)/100,first,rate};
}
function refreshShipping(email=currentEmail()){
 const p=getPricing(email),meter=$("#shippingProgress"),message=$("#shippingMessage");if(!meter)return;
 const missing=Math.max(0,Math.round((SHIPPING_MIN-p.afterDiscount)*100)/100);
 meter.style.width=(p.first?100:Math.min(100,p.afterDiscount/SHIPPING_MIN*100))+"%";
 message.textContent=p.first?"🎁 Primeira compra: frete grátis!":missing===0?"🚚 Você desbloqueou frete grátis!":`🚚 Faltam ${money(missing)} para frete grátis`;
 $("#cartDiscount").textContent=p.discount?`− ${money(p.discount)}`:money(0);
 $("#cartShipping").textContent=p.shipping===0?"Grátis":money(p.shipping);
 $("#cartSubtotal").textContent=money(p.total);
 $("#cartTotalLabel").textContent=`Subtotal ${money(p.subtotal)} • total estimado (frete padrão ilustrativo: ${money(SHIPPING_DEMO)}).`;
 $("#couponFeedback").textContent=activeCoupon?`Cupom ${activeCoupon} ${p.rate?"aplicado":"não elegível neste pedido"}.`:"Cupons: BEMVINDO10 (1ª compra) ou SPORT5 (a partir de R$ 100).";
}
function persistCart(){localStorage.setItem("bmSportCartV2",JSON.stringify(cart));$("#cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);renderCart()}
function addToCart(id,size){let p=products.find(x=>x.id===id);if(!p)return;let existing=cart.find(x=>x.id===id&&x.size===(size||""));if(p.stock&&(p.stock[size||""]||0)<(existing?.qty||0)+1){toast("Quantidade indisponível em estoque.");return;}if(existing)existing.qty++;else cart.push({id,qty:1,size:size||""});persistCart();toast(`${p.name} adicionado ao carrinho!`);closeModal("productModal")}
function renderCart(){let total=0;$("#cartContent").innerHTML=cart.length?cart.map(x=>{let p=products.find(z=>z.id===x.id);total+=p.price*x.qty;return `<div class="cart-row"><span class="cart-thumb">${p.verifiedPhoto&&p.image?`<img src="${p.image}" alt="">`:p.emoji}</span><div><b>${p.name}</b><small>${money(p.price)} ${x.size?`• <span class="size-label">${p.sizeLabel}: ${x.size}</span>`:""}</small><div class="qty-controls"><button data-qty="${p.id}" data-size="${x.size}" data-delta="-1">−</button>${x.qty}<button data-qty="${p.id}" data-size="${x.size}" data-delta="1">+</button></div><button class="remove-item" data-remove="${p.id}" data-size="${x.size}">Remover</button></div><b>${money(p.price*x.qty)}</b></div>`}).join(""):'<p class="no-results">Seu carrinho está vazio. Bora escolher seu próximo equipamento! ⚡</p>';refreshShipping();$("#drawerCount").textContent=`(${cart.reduce((s,x)=>s+x.qty,0)} itens)`}
function openCart(){$("#cartDrawer").classList.add("open");$("#overlay").hidden=false}
function closeCart(){$("#cartDrawer").classList.remove("open");if(!document.querySelector(".modal.open"))$("#overlay").hidden=true}
function openModal(id){$("#"+id).classList.add("open");$("#overlay").hidden=false}
function closeModal(id){$("#"+id).classList.remove("open");if(!document.querySelector(".modal.open")&&!$("#cartDrawer").classList.contains("open"))$("#overlay").hidden=true}
function openProduct(id){
 selectedProduct=products.find(p=>p.id===id);selectedSize=null;let p=selectedProduct;if(!p){toast("Produto não disponível no catálogo.");return;}
 const gallery=p.verifiedPhoto?(p.gallery?.length?p.gallery:[p.image]):[];
 $("#productDetail").innerHTML=`<div class="detail-layout"><div class="detail-visual"><div class="detail-art photo-detail" style="--tone:${p.tone}">${p.verifiedPhoto?`<img id="detailMainImage" src="${p.image}" alt="${p.name}">`:productPhoto(p)}</div><div class="gallery-strip">${gallery.map((src,i)=>`<button class="gallery-thumb ${i===0?"active":""}" data-gallery-index="${i}" aria-label="Imagem ${i+1}"><img src="${src}" alt="Ângulo ${i+1}"></button>`).join("")}</div><button id="open360" class="view360-btn">⟳ VISUALIZAR EM 360°</button><small class="gallery-note">As fotos enviadas são referências visuais e podem não representar o SKU exato. Ilustrações não são fotografias oficiais.</small></div><div class="detail-info"><span class="eyebrow dark">${p.category.toUpperCase()}</span><h2>${p.name}</h2>${p.officialUrl?`<a class="official-photo-link" href="${p.officialUrl}" target="_blank" rel="noopener noreferrer">Ver fotos do modelo no fabricante ↗</a>`:`<span class="photo-verification-note">Imagem fictícia ilustrativa — confira modelo, cor e detalhes antes de comprar</span>`}${p.brand?`<span class="brand-chip detail-brand">${p.brand}</span>`:""}<div class="stars">★★★★★ <span>${p.rating} • avaliação</span></div><div class="detail-price">${money(p.price)}</div>${p.marketPrice?`<small class="market-reference detail-market">Referência de mercado consultada: ${money(p.marketPrice)}. Valores podem variar por loja, região e data.</small>`:""}<p>${p.desc}</p>${p.sizes.length?`<div class="size-title">ESCOLHA ${p.sizeLabel.toUpperCase()}</div><div class="size-options">${p.sizes.map(s=>`<button data-size-choice="${s}" ${p.stock&&!(p.stock[s]>0)?"disabled":""}>${s}</button>`).join("")}</div><div class="size-help">Confira a tabela de medidas do fabricante. A modelagem pode variar entre marcas.</div>`:`<div class="size-help">Este produto não possui seleção de tamanho.</div>`}<button id="detailAdd" class="btn btn-red detail-add">ADICIONAR AO CARRINHO →</button><small id="sizeError" class="form-message"></small></div></div>`;
 const recommended=ByteMind.recommend(p,products);
 const rec=document.createElement('section');rec.className='bm-product-recommendations';
 const heading=document.createElement('h3');heading.textContent='Recomendados pelo ByteMind';rec.append(heading);
 const explain=document.createElement('p');explain.textContent='Sugestões por similaridade de categoria, marca, nome e preço. Calculadas a partir do catálogo atual.';rec.append(explain);
 const grid=document.createElement('div');grid.className='bm-rec-grid';
 for(const candidate of recommended){const item=document.createElement('article');const img=document.createElement('img');img.src=candidate.image;img.alt=candidate.name;img.loading='lazy';item.append(img);const label=document.createElement('strong');label.textContent=candidate.brand+' • '+candidate.name;item.append(label);const price=document.createElement('span');price.textContent=money(candidate.price);item.append(price);const b=document.createElement('button');b.type='button';b.className='btn btn-red';b.textContent='Ver produto';b.dataset.detail=candidate.id;item.append(b);grid.append(item);}
 if(!recommended.length){const empty=document.createElement('p');empty.textContent='Ainda não há outros produtos semelhantes nesta categoria.';rec.append(empty);}else rec.append(grid);
 $('#productDetail').append(rec);
 openModal("productModal");
 $("#productDetail").querySelectorAll("[data-size-choice]").forEach(b=>b.onclick=()=>{selectedSize=b.dataset.sizeChoice;$("#productDetail").querySelectorAll("[data-size-choice]").forEach(x=>x.classList.toggle("selected",x===b));$("#sizeError").textContent=""});
 $("#productDetail").querySelectorAll("[data-gallery-index]").forEach(b=>b.onclick=()=>{$("#detailMainImage").src=gallery[+b.dataset.galleryIndex];$("#productDetail").querySelectorAll(".gallery-thumb").forEach(x=>x.classList.toggle("active",x===b))});
 $("#open360").onclick=()=>open360Viewer(p);
 $("#detailAdd").onclick=()=>{if(p.sizes.length&&!selectedSize){$("#sizeError").textContent="Selecione um tamanho antes de adicionar.";return}addToCart(p.id,selectedSize)};
}
function open360Viewer(product){
 const images=product.verifiedPhoto?(product.gallery?.length?product.gallery:[product.image]):[];if(!images.length){toast("Fotos exatas ainda não verificadas para este produto.");return;}let index=0,dragging=false,startX=0;
 const hasModel=!!product.model3d;
 const modal=document.createElement("section");modal.className="viewer360-modal";modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");
 modal.innerHTML=`<div class="viewer360-panel"><button class="viewer360-close" aria-label="Fechar">×</button><div class="viewer360-heading"><span class="eyebrow">IMPÉRIUM BAHIA • PRODUCT STUDIO</span><h2>Visualize seu produto</h2><p>${product.name}</p></div><div class="viewer360-tabs"><button class="active" data-view-tab="photos">Fotos reais / referências</button><button data-view-tab="model">Modelo 3D</button></div><div class="viewer360-stage" data-view-panel="photos"><button class="viewer360-arrow prev" aria-label="Ângulo anterior">‹</button><img class="viewer360-image" src="${images[0]}" alt="Foto de referência de ${product.name}"><button class="viewer360-arrow next" aria-label="Próximo ângulo">›</button><span class="viewer360-degree">1 / ${images.length}</span></div><div class="viewer360-controls" data-view-panel="photos"><span>USE AS SETAS OU ARRASTE A FOTO</span><input class="viewer360-range" type="range" min="0" max="${images.length-1}" value="0" step="1" aria-label="Selecionar foto"><span class="viewer360-count">Foto 1 de ${images.length}</span></div><div class="viewer360-model-stage" data-view-panel="model">${hasModel?`<model-viewer src="${product.model3d}" camera-controls auto-rotate shadow-intensity="1" exposure="1" alt="Modelo 3D de ${product.name}"></model-viewer>`:`<div class="model-empty"><div><b>Modelo 3D ainda não cadastrado</b>Este produto já possui a área preparada para receber um arquivo .glb ou .gltf real.<br>Por enquanto, veja as fotos de referência na outra aba.<br><small>Não exibimos um modelo genérico fingindo ser este produto.</small></div></div>`}</div><p class="viewer360-disclaimer">As fotos são referências visuais e podem não representar todas as variações do item. A rotação 3D real depende de um arquivo .glb/.gltf específico do produto.</p></div>`;
 document.body.appendChild(modal);
 const image=modal.querySelector(".viewer360-image"),range=modal.querySelector(".viewer360-range"),count=modal.querySelector(".viewer360-count"),degree=modal.querySelector(".viewer360-degree");
 function show(i){index=(i+images.length)%images.length;image.src=images[index];range.value=index;count.textContent=`Foto ${index+1} de ${images.length}`;degree.textContent=`${index+1} / ${images.length}`}
 modal.querySelectorAll("[data-view-tab]").forEach(btn=>btn.onclick=()=>{modal.querySelectorAll("[data-view-tab]").forEach(x=>x.classList.toggle("active",x===btn));modal.querySelectorAll("[data-view-panel]").forEach(x=>x.classList.toggle("hidden",x.dataset.viewPanel!==btn.dataset.viewTab));modal.querySelector(".viewer360-model-stage").classList.toggle("active",btn.dataset.viewTab==="model")});
 modal.querySelector(".prev").onclick=()=>show(index-1);modal.querySelector(".next").onclick=()=>show(index+1);range.oninput=()=>show(+range.value);
 image.addEventListener("pointerdown",e=>{dragging=true;startX=e.clientX;image.setPointerCapture(e.pointerId)});
 image.addEventListener("pointerup",e=>{if(!dragging)return;let delta=e.clientX-startX;dragging=false;if(Math.abs(delta)>18)show(index+(delta<0?1:-1))});
 image.addEventListener("pointercancel",()=>dragging=false);
 function close(){modal.remove();document.removeEventListener("keydown",onKey)}
 function onKey(e){if(e.key==="Escape")close();if(e.key==="ArrowRight")show(index+1);if(e.key==="ArrowLeft")show(index-1)}
 modal.querySelector(".viewer360-close").onclick=close;modal.addEventListener("click",e=>{if(e.target===modal)close()});document.addEventListener("keydown",onKey);
}
function switchTab(tab){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));$("#loginForm").hidden=tab!=="login";$("#registerForm").hidden=tab!=="register";$("#accountTitle").textContent=tab==="login"?"Entre no jogo.":"Crie sua conta."}
function updateAccount(){$("#accountLabel").textContent=dbUser?dbUser.name.split(" ")[0]:"Entrar / Cadastrar";if($("#shippingProgress"))refreshShipping();}
async function openAccount(){if(dbUser){if(confirm(`Você está conectado como ${dbUser.name}. Deseja sair da conta?`)){try{updateDbAccount(await dbApi('logout',{}));toast('Você saiu da conta.');}catch(e){toast(e.message)}}return;}switchTab('login');$('#loginMessage').textContent='';$('#registerMessage').textContent='';openModal('accountModal');}
async function openCheckout(){if(!cart.length){toast('Seu carrinho está vazio.');return;}if(!dbConnected&&!(await syncDbCatalog())){toast('Conecte o MySQL antes de finalizar.');return;}if(!dbUser){closeCart();toast('Entre na conta para concluir a compra.');openAccount();return;}
 $('#checkoutName').value=dbUser.name;$('#checkoutEmail').value=dbUser.email;closeCart();openModal('checkoutModal');await updateCheckoutSummary();}
async function updateCheckoutSummary(){checkoutQuote=null;const btn=$('#checkoutForm button[type="submit"]')||$('#checkoutForm button.btn');btn.disabled=true;$('#checkoutSummary').textContent='Consultando preços e estoque no MySQL…';
 try{const p=await dbApi('quote',{items:cart,coupon:activeCoupon});checkoutQuote=p;$('#checkoutSummary').textContent=`Subtotal: ${money(p.subtotal)} • desconto: ${money(p.discount)} • frete: ${p.shipping===0?'grátis':money(p.shipping)} • total: ${money(p.total)}. ${p.first?'Primeira compra com frete grátis.':'Frete grátis a partir de R$ 250 após desconto.'}`;btn.disabled=false;}
 catch(e){$('#checkoutSummary').textContent=e.message;}}
const byteMind = ByteMind.createAssistant();
function chatMessage(text,who){const el=document.createElement("div");el.className="bubble "+who;el.textContent=text;$("#chatMessages").append(el);$("#chatMessages").scrollTop=$("#chatMessages").scrollHeight;return el;}
function chatContext(){const email=currentEmail();return {products,pricing:getPricing(),orderCount:dbOrderCount,seasons:seasonCatalog,departments:departmentConfig};}
function renderChatAnswer(answer){
 const el=chatMessage(answer.text,"bot");
 for(const id of answer.ids){const p=products.find(x=>x.id===id);if(!p)continue;
  const card=document.createElement('div');card.className='bm-result';
  const img=document.createElement('img');img.src=p.image;img.alt=p.name;img.loading='lazy';card.append(img);
  const info=document.createElement('div');const name=document.createElement('strong');name.textContent=p.name;info.append(name);
  const detail=document.createElement('small');detail.textContent=`${p.brand} • ${money(p.price)}${p.sizes?.length?' • '+p.sizes.join(', '):''}`;info.append(detail);
  const btn=document.createElement('button');btn.type='button';btn.textContent='Ver produto →';btn.addEventListener('click',()=>{closeChat();openProduct(id)});info.append(btn);card.append(info);el.append(card);
 }
 const actions={catalogo:'Ver catálogo',colecoes:'Ver coleções',marcas:'Ver marcas',carrinho:'Abrir carrinho',conta:'Minha conta',loja:'Loja física'};
 if(answer.actions.length){const row=document.createElement('div');row.className='bm-actions';for(const a of answer.actions){const btn=document.createElement('button');btn.type='button';btn.textContent=actions[a];btn.onclick=()=>{closeChat();if(a==='carrinho')openCart();else if(a==='conta')openAccount();else if(a==='catalogo'){searchTerm='';$('#searchInput').value='';setCategory('Todos');}else document.getElementById(a==='loja'?'loja-fisica':a)?.scrollIntoView({behavior:'smooth',block:'start'});};row.append(btn);}el.append(row);}
 $('#chatMessages').scrollTop=$('#chatMessages').scrollHeight;
}
let bmBusy=false,bmGeneration=0;
async function sendChat(text){text=text.trim();if(!text||bmBusy)return;chatMessage(text,"user");$("#chatInput").value="";const base=byteMind.answer(text,chatContext());
 // Only use the optional model for unmatched questions, never for prices/account facts.
 if($('#bmAiEnabled')?.checked && base.text.startsWith('Não encontrei uma resposta segura') && !/@|\b\d{5,}\b|senha|cpf|telefone|endereço/i.test(text)){
  const generation=bmGeneration;bmBusy=true;const pending=chatMessage('Interpretando sua pergunta com IA local…','bot');try{const res=await fetch('/api/bytemind/interpret',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:text}),signal:AbortSignal.timeout(17000)});const data=await res.json();if(generation!==bmGeneration)return;pending.remove();renderChatAnswer(res.ok&&data.query?byteMind.answer(data.query,chatContext()):base);}catch{if(generation===bmGeneration){pending.remove();renderChatAnswer(base);}}finally{bmBusy=false;}return;
 }
 renderChatAnswer(base);
 if(dbUser&&$('#bmSaveChat')?.checked&&!/@|\b\d{5,}\b|senha|cpf|telefone|endereço/i.test(text))dbApi('interactions',{consent:true,question:text.slice(0,500),answer:base.text.slice(0,3000),ids:base.ids}).catch(()=>toast('A interação não pôde ser registrada.'));
 // A geração é opcional e não substitui os resultados determinísticos.
 if($('#bmAiEnabled')?.checked && base.ids.length && !/@|\b\d{5,}\b|senha|cpf|telefone|endereço/i.test(text)){
  const generation=bmGeneration;bmBusy=true;const pending=chatMessage('Preparando uma explicação adicional com IA…','bot');
  try{const facts=products.filter(p=>base.ids.includes(p.id)).map(p=>({name:p.name,brand:p.brand,category:p.category,price:p.price,sizes:p.sizes}));
   const res=await fetch('/api/bytemind/explain',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:text,facts}),signal:AbortSignal.timeout(17000)});
   const data=await res.json();if(generation!==bmGeneration)return;pending.remove();if(res.ok&&data.explanation)chatMessage('Complemento gerado por IA (confira os dados nos cards acima): '+data.explanation,'bot');
  }catch{if(generation===bmGeneration)pending.remove();}finally{bmBusy=false;}
 }
}
if(location.protocol==='http:'||location.protocol==='https:')fetch('/api/bytemind/status').then(r=>r.ok?r.json():null).then(data=>{if(data?.enabled)$('#bmAiOption').hidden=false;}).catch(()=>{});

$('#clearChat').addEventListener('click',()=>{bmGeneration++;byteMind.reset();$('#chatMessages').replaceChildren();chatMessage('Conversa reiniciada. Como posso ajudar?', 'bot');});
function openChat(){$("#chatWindow").classList.add("open");$("#chatInput").focus()}
function closeChat(){$("#chatWindow").classList.remove("open")}

document.addEventListener("click",e=>{
 let detail=e.target.closest("[data-detail],[data-view]");if(detail)openProduct(+(detail.dataset.detail||detail.dataset.view));
 let fav=e.target.closest("[data-fav]");if(fav){let id=+fav.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("bmSportFavs",JSON.stringify(favorites));renderProducts();toast(favorites.includes(id)?"Produto salvo nos favoritos.":"Produto removido dos favoritos.")}
 let cat=e.target.closest("[data-category]");if(cat)setCategory(cat.dataset.category);let brand=e.target.closest("[data-brand]");if(brand)selectBrand(brand.dataset.brand);
 let dept=e.target.closest("[data-department]");if(dept){let cfg=departmentConfig.find(x=>x.id===dept.dataset.department);if(cfg){category=cfg.id==="tenis"?"Calçados":cfg.id==="roupas"?"Vestuário":cfg.id==="corrida"?"Todos":cfg.id==="musculacao"?"Vestuário":"Luta";renderProducts();$("#catalogo").scrollIntoView({behavior:"smooth"});}}
 let qty=e.target.closest("[data-qty]");if(qty){let item=cart.find(x=>x.id===+qty.dataset.qty&&x.size===qty.dataset.size);if(item){const p=products.find(p=>p.id===item.id);if(+qty.dataset.delta>0&&(item.qty>=99||(p?.stock&&item.qty>=p.stock[item.size]))){toast("Limite de estoque atingido.");return;}item.qty+=+qty.dataset.delta;if(item.qty<1)cart=cart.filter(x=>x!==item);persistCart()}}
 let remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(x=>!(x.id===+remove.dataset.remove&&x.size===remove.dataset.size));persistCart()}
 let close=e.target.closest("[data-close]");if(close)closeModal(close.dataset.close);
});
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();searchTerm=$("#searchInput").value;renderProducts();$("#catalogo").scrollIntoView({behavior:"smooth"})});
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value;renderProducts()});$("#sortSelect").addEventListener("change",renderProducts);
$("#cartBtn").onclick=openCart;$("#closeCart").onclick=closeCart;$("#continueShopping").onclick=closeCart;$("#overlay").onclick=()=>{closeCart();document.querySelectorAll(".modal.open").forEach(m=>closeModal(m.id))};
$("#accountBtn").onclick=openAccount;document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));
async function authenticate(kind,e){e.preventDefault();const form=e.currentTarget,btn=form.querySelector('button[type="submit"]')||form.querySelector('button.btn'),msg=$('#'+kind+'Message');if(btn?.disabled)return;if(btn)btn.disabled=true;msg.textContent='Conectando ao MySQL…';msg.classList.remove('success');
 try{const password=$('#'+kind+'Password').value,email=$('#'+kind+'Email').value.trim();const data={email,password};if(kind==='register'){if(password!==$('#confirmPassword').value)throw new Error('As senhas não coincidem.');data.name=$('#registerName').value.trim();}
 const result=await dbApi(kind,data);updateDbAccount(result);await syncDbCatalog();form.reset();msg.textContent='Conta conectada!';msg.classList.add('success');closeModal('accountModal');toast('Conta conectada ao banco de dados.');}catch(err){msg.textContent=err.message;}finally{if(btn)btn.disabled=false;}}
$('#registerForm').addEventListener('submit',e=>authenticate('register',e));
$('#loginForm').addEventListener('submit',e=>authenticate('login',e));
$("#couponForm").addEventListener("submit",e=>{e.preventDefault();const code=$("#couponInput").value.trim().toUpperCase();if(!["BEMVINDO10","SPORT5"].includes(code)){activeCoupon="";localStorage.removeItem("bmSportCoupon");refreshShipping();toast("Cupom inválido. Confira os códigos disponíveis.");return;}activeCoupon=code;localStorage.setItem("bmSportCoupon",code);refreshShipping();const p=getPricing();toast(p.rate?"Cupom aplicado ao pedido!":"Cupom salvo. Confira as condições de uso.");});
$('#checkoutBtn').onclick=openCheckout;
$('#checkoutForm').addEventListener('submit',async e=>{e.preventDefault();if(checkoutBusy||!checkoutQuote)return;checkoutBusy=true;const btn=e.currentTarget.querySelector('button.btn');btn.disabled=true;
 try{const order=await dbApi('orders',{items:cart,coupon:activeCoupon,expectedTotal:Math.round(checkoutQuote.total*100)});dbOrderCount=(dbOrderCount??0)+1;cart=[];activeCoupon='';localStorage.removeItem('bmSportCoupon');persistCart();closeModal('checkoutModal');toast(`Pedido #${order.id} registrado no MySQL. Sem pagamento real.`);showReviewPrompt(order.id);syncDbCatalog();}
 catch(err){toast(err.message);await updateCheckoutSummary();}finally{checkoutBusy=false;}});
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();let emails=JSON.parse(localStorage.getItem("bmSportNewsletter")||"[]"),email=$("#newsletterEmail").value.toLowerCase();if(!emails.includes(email))emails.push(email);localStorage.setItem("bmSportNewsletter",JSON.stringify(emails));$("#newsletterStatus").textContent="Inscrição demonstrativa realizada. Valeu!";e.currentTarget.reset()});
$("#chatLauncher").onclick=openChat;$("#closeChat").onclick=closeChat;$("#heroAssistant").onclick=()=>{openChat();sendChat("Me ajude a escolher um equipamento esportivo.")};$("#recommendBtn").onclick=()=>{openChat();sendChat("Me ajude a montar um kit de treino.")};$("#chatForm").addEventListener("submit",e=>{e.preventDefault();sendChat($("#chatInput").value)});document.querySelectorAll("[data-prompt]").forEach(b=>b.onclick=()=>sendChat(b.dataset.prompt));
function renderSmartCards(){$("#recommendations").innerHTML=[37,38,29,42].map(id=>products.find(p=>p.id===id)).filter(Boolean).map(p=>`<div class="smart-card"><span class="smart-photo"><img src="${p.image}" alt="${p.name}" loading="lazy"></span><div><b>${p.name}</b><small>${money(p.price)} • complete seu kit</small><button data-detail="${p.id}">VER PRODUTO +</button></div></div>`).join("");}
renderSmartCards();
updateAccount();persistCart();renderBrandBar();renderProducts();renderDepartments();dailyPromotion();
$("#copyWelcome").addEventListener("click",()=>{if(navigator.clipboard?.writeText){navigator.clipboard.writeText("BEMVINDO10").then(()=>toast("Cupom BEMVINDO10 copiado!")).catch(()=>toast("Use o cupom BEMVINDO10 na simulação."));}else toast("Use o cupom BEMVINDO10 na simulação.");});

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",renderLookbook);else renderLookbook();



// Avaliação solicitada após finalizar um pedido demonstrativo.
// Avaliações são persistidas no MySQL após pedido autenticado.
let reviewOrderId=null;
function showReviewPrompt(orderId){
 reviewOrderId=orderId;
 const form=document.getElementById('reviewForm');
 if(!form)return;
 form.reset();
 syncReviewStars();
 openModal('reviewModal');
 setTimeout(()=>form.querySelector('input[name="siteRating"]')?.focus(),30);
}
function syncReviewStars(){
 const chosen=Number(document.querySelector('#reviewForm input[name="siteRating"]:checked')?.value||0);
 document.querySelectorAll('#reviewForm .review-stars label').forEach(label=>{
  label.classList.toggle('selected',Number(label.querySelector('input').value)<=chosen);
 });
}
document.querySelectorAll('#reviewForm input[name="siteRating"]').forEach(input=>input.addEventListener('change',syncReviewStars));
document.getElementById('reviewForm')?.addEventListener('submit',async event=>{
 event.preventDefault();const form=event.currentTarget,btn=form.querySelector('button[type="submit"]')||form.querySelector('button.btn');if(btn?.disabled)return;
 const rating=Number(document.querySelector('#reviewForm input[name="siteRating"]:checked')?.value||0);if(rating<1||rating>5){toast('Selecione uma nota de 1 a 5 estrelas.');return;}
 const notes=document.getElementById('reviewNotes').value.trim().slice(0,1000);if(btn)btn.disabled=true;
 try{await dbApi('reviews',{orderId:reviewOrderId,rating,notes});toast('Obrigado! Avaliação registrada no MySQL.');closeModal('reviewModal');reviewOrderId=null;}
 catch(error){toast(error.message);}finally{if(btn)btn.disabled=false;}
});
document.getElementById('skipReview')?.addEventListener('click',()=>{closeModal('reviewModal');reviewOrderId=null;});

// Tela de boas-vindas exclusiva. A loja só é apresentada depois da escolha.
(() => {
 const gate=document.getElementById('entryGate');
 const shell=document.getElementById('siteShell');
 if(!gate || !shell)return;
 function showStore(destination){
   gate.hidden=true;
   shell.hidden=false;
   document.body.classList.add('store-open');
   window.scrollTo({top:0,behavior:'instant'});
   // As categorias usam a lógica central de filtros já existente.
   if(['Todos','Calçados','Vestuário','Acessórios'].includes(destination)){
     searchTerm="";$("#searchInput").value="";setCategory(destination);
   }else if(destination==='colecoes'){
     document.getElementById('colecoes')?.scrollIntoView({behavior:'smooth',block:'start'});
   }else if(destination==='marcas'){
     document.getElementById('marcas')?.scrollIntoView({behavior:'smooth',block:'start'});
   }
 }
 function showGate(){
   document.querySelectorAll('.modal.open').forEach(m=>closeModal(m.id));
   closeCart();closeChat();
   shell.hidden=true;
   gate.hidden=false;
   document.body.classList.remove('store-open');
   window.scrollTo({top:0,behavior:'instant'});
 }
 gate.querySelectorAll('[data-entry]').forEach(button=>{
   button.addEventListener('click',()=>showStore(button.dataset.entry));
 });
 document.getElementById('backToEntry')?.addEventListener('click',showGate);
 // A marca da loja funciona como retorno à apresentação inicial.
 shell.querySelectorAll('a.brand[href="#"]').forEach(a=>{
   a.addEventListener('click',e=>{e.preventDefault();showGate();});
 });
 // Garante que o carregamento inicial nunca exponha as seções internas.
 shell.hidden=true;
 gate.hidden=false;
 document.body.classList.remove('store-open');
 window.scrollTo({top:0,behavior:'instant'});
})();

initializeDatabase();
