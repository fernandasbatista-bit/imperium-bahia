# Versão 1.1 — Integração MySQL

**Para cadastrar clientes ou finalizar pedidos, use o servidor Node.js e configure o MySQL.** O Live Server permite apenas consultar a vitrine local. Consulte `banco/INSTALACAO.md` e o relatório Word na pasta `docs/`. As notas abaixo descrevem versões históricas e não substituem a configuração atual.

# ByteMind Sport — catálogo expandido

Catálogo com 24 produtos: calçados, camisetas, regatas, jaquetas, leggings, tops, moletons, joggers, kimono, rashguard, shorts de muay thai, bandagens, protetor bucal, smartwatch, fone, mochila, meias, óculos e acessórios.

## Executar
Extraia o ZIP, abra a pasta no VS Code e execute `index.html` com Live Server.

As imagens são referências externas e dependem de internet. Algumas fotos são ilustrativas e podem não corresponder exatamente ao item descrito. O visualizador 360° é multiângulo demonstrativo, não um modelo 3D rotativo real.


## Atualização de imagens do catálogo
- O catálogo agora utiliza fotografias de referência de fabricantes, lojas esportivas e Unsplash para os 24 produtos.
- A foto de camiseta preta enviada pelo usuário foi incluída localmente em `assets/images/camiseta-compressao-enviada.png` como imagem principal de referência da camiseta térmica/de compressão.
- As demais imagens são carregadas por URLs externas e precisam de internet; se algum fornecedor alterar ou bloquear o endereço, a imagem poderá deixar de aparecer.
- As imagens servem como prévia visual do tipo de produto. Elas não garantem que a peça ilustrada seja exatamente o item fictício vendido pela ByteMind Sport.
- Antes de usar o site comercialmente, confirme a licença e a autorização de cada fotografia ou substitua por fotos próprias/licenciadas.

### Referências consultadas
- Chkokko — camiseta masculina de compressão: https://chkokko.com/products/men-s-performance-compression-t-shirt-for-gym-black
- OK Diario — camiseta térmica em modelos: https://okdiario.com/economia/10-mejores-camisetas-termicas-decathlon-cual-que-necesitas-11838706
- Casablank — modelos com activewear: https://www.casablank.ma/collections/women
- Kingz — kimono de Jiu-Jitsu: https://www.kingz.com/products/kore-v2-jiu-jitsu-gi-white-2024-edition
- Porrada Fightwear — rashguard: https://porradafightwear.com/products/premium-ibjjf-ranked-purple-belt-rash-guard
- Fairtex — shorts Muay Thai: https://dz.fairtex.com/products/muay-thai-shorts-bs1901-stealth
- New Balance — jaqueta de corrida: https://shop.runawayshoes.net/product/2677208/new-balance/womens-impact-run-luminous-heat-jacket
- OPRO — protetor bucal: https://www.opro.com/products/cleary-boxing-mouthguard
- Julbo — óculos esportivos: https://www.julbo.com/en_wo/p/evad-2-spectron
- Feetures — meias esportivas: https://feetures.co.uk/products/elite-ultra-light-cushion-quarter-6-pack


## Atualização de layout — novembro de 2026
- Fundo cinza-claro e áreas de conteúdo separadas em cartões brancos.
- Seções recomendadas: Luta, Corrida, Musculação, Tênis para esportes e Roupas para esportes.
- Bloco de oferta diária rotativa (demonstração local) e cupom de primeiro pedido BEMVINDO10.
- Visualizador com abas para fotos e área preparada para modelos 3D `.glb`/`.gltf`.
- Os produtos ainda precisam receber seus próprios arquivos 3D para habilitar a rotação 3D real. Não são usados modelos genéricos como se fossem os produtos anunciados.
- Promoções e cupom são demonstrativos; não existe gateway de pagamento nem aplicação real de desconto nesta versão.


## Catálogo de marcas e comparação de preços — 18/11/2026
Foram acrescentadas 12 referências de produtos/marcas: Nike, adidas, Under Armour, Venum, PUMA, Max Titanium, Keiko, Xiaomi, JBL e Fila.

Os preços de venda ByteMind exibidos no protótipo são valores fictícios definidos para a loja. "Referência de mercado" registra valores observados em páginas de varejistas na pesquisa de 18/11/2026, apenas para comparação ilustrativa. Preços, estoque, descontos e disponibilidade mudam; não há integração de estoque nem atualização automática. Não afirmar que a ByteMind é revendedora autorizada dessas marcas.

### Fontes consultadas
- Nike — roupas de treino: https://www.nike.com.br/nav/esportes/treinoacademia/tipodeproduto/roupas
- Nike — camisetas e compressão: https://www.nike.com.br/nav/categorias/camisetas/categorias/segundapelecompressao/genero/masculino
- adidas — camisetas: https://www.adidas.com.br/camisetas
- adidas — corrida: https://www.adidas.com.br/camisetas-running
- Centauro — vestuário training: https://www.centauro.com.br/nav/categorias/eletroeletronico/categorias/vestuario/linha/training
- Netshoes — fitness e musculação: https://www.netshoes.com.br/fitness-e-musculacao

Imagens são referências visuais e podem não ser fotografias do SKU/marca exatos. Antes de comercializar, substituir por fotos próprias ou autorizadas e confirmar autorização para uso de marcas e imagens.

## Versão campanhas + frete + cupons (18/11/2026)
- 52 produtos demonstrativos, incluindo 16 referências adicionais de marcas esportivas. Fotos externas são ilustrativas, não necessariamente o SKU correto.
- Cupons BEMVINDO10 (10% apenas na primeira compra) e SPORT5 (5% com subtotal mínimo de R$100); não cumulativos.
- Frete grátis na primeira compra por e-mail do checkout; nas seguintes, grátis quando subtotal após desconto >= R$250. Abaixo desse valor, frete demonstrativo fixo de R$24,90.
- Pedido e histórico de primeira compra armazenados apenas no localStorage do navegador; não há validação por servidor, prevenção real de fraude, frete real nem pagamento.
- Em produção, validar cupom, frete e histórico no backend, autenticar usuário, integrar transportadora e tratar regras legais de promoções.
- Preços e descontos da ByteMind são fictícios.

## Atualização de confiança visual
A página agora oferece seleção de marcas por nomes tipográficos e fundo cinza médio-escuro. Fotos não verificadas foram substituídas por sinalização honesta para evitar apresentar outro produto como se fosse o anunciado. Consulte FOTOS_E_MARCAS.md.


## Identidade IMPÉRIUM BAHIA — 18/11/2026
O site foi renomeado para IMPÉRIUM BAHIA. O fundo é cinza médio-escuro. Foi adicionada uma vitrine de inspirações de marcas com links de pesquisa para o Pinterest, e uma referência para fotos de lojas no Pixabay. **As referências não são fotos verificadas dos produtos**. Não se deve copiar imagens do Pinterest para uso comercial sem autorização. Para exibir uma foto no card de venda, confirme modelo, SKU, cor e direitos de uso.


## Ajuste visual do banner inicial — 18/11/2026
- Hero/banner principal trocado por uma composição mais chamativa com três produtos em destaque.
- Removidos os emojis de kimono e relógio.
- Mantida a proposta de imagens fictícias/ilustrativas para o início do site.


## Atualização de imagens da marca Olympikus — 18/11/2026
Foram adicionadas duas imagens fornecidas pelo usuário para reforçar a apresentação da marca Olympikus:
- **Produto 37 — Camiseta Essential Running (Olympikus):**
  `assets/images/olympikus-camiseta-running.png`
- **Produto 47 — Tênis Corrida Training (Olympikus):**
  `assets/images/olympikus-tenis-running.png`

Essas imagens agora são usadas nos cards e na visualização do produto.


## Atualização da vitrine — fotos, marcas e enquadramento (18/11/2026)
- Corrigida a exibição das imagens do usuário nos produtos Olympikus 37 e 47 (antes eram substituídas pelas ilustrações).
- Imagens Olympikus são **referências enviadas pelo usuário**, não confirmação de SKU/modelo exato.
- Cards com enquadramento adaptado para fotografias verticais e ilustrações SVG.
- Etiqueta de marca em destaque diretamente sobre cada card e no texto do produto.
- Para Nike, a ilustração própria correspondente ao produto 25 continua disponível, mas **a foto enviada na mensagem atual não estava acessível como arquivo** e não foi incorporada. Para substituí-la, use `assets/images/produtos/nike-enviada.png` e registre-a no código como foto fornecida pelo usuário após confirmar sua correspondência.
- Outras marcas já possuem ilustrações individuais em `assets/images/ilustracoes/` até obter fotos correspondentes.


## Atualização de imagem da Nike — 18/11/2026
- Produto 25 (Camiseta Nike Dri-FIT Legend) agora usa a imagem enviada pelo usuário: `assets/images/nike-camiseta-branca.jpg`.


## Atualização — 24/11/2026
Removida a seção pública "Galeria de referências enviadas" da página inicial. As fotografias dos produtos e os avisos de imagens ilustrativas foram preservados.


## Fundo fotográfico e loja física
Foto enviada pelo usuário aplicada como fundo com escurecimento para legibilidade. Adicionada seção ao fim do site: endereço previsto Rua Carlos de Souza Nazaré, São Paulo – SP. Não é uma confirmação de estabelecimento em funcionamento.


## Tema visual inspirado na cultura baiana — 24/11/2026
- Hero principal atualizado com fundo da arte baiana enviada pelo usuário.
- Paleta geral do site ajustada para azul, amarelo, laranja e verde inspirados na cultura baiana.
- Botões, seções, destaques e faixas promocionais recoloridos para combinar com a nova identidade.


## Fundo baiano em todo o site e introdução — 24/11/2026
- A arte `assets/images/fundo-baiano.png`, enviada pelo usuário, é agora fundo contínuo em toda a página, inclusive atrás das seções.
- Removida a camada preta opaca e substituídos painéis principais por superfícies claras semitransparentes.
- Criada seção `#quem-somos` para apresentar objetivos e proposta de atendimento da IMPÉRIUM BAHIA.
- O texto descreve objetivos comerciais, não garantias logísticas já implementadas.


## Introdução e coleções por estação — 24/11/2026
- Introdução editorial no estilo da referência enviada: nossa história, painel central **Explore nossas marcas e coleções** e benefícios à direita, com a arte baiana de fundo e texto HTML acessível.
- Seletor interativo para **Verão, Outono, Inverno e Primavera** no bloco `#colecoes`.
- Seleções temáticas feitas a partir dos produtos já existentes, com filtro de marca e botão **Ver produto** que abre o detalhe do item.
- Coleções sazonais são curadoria demonstrativa da IMPÉRIUM BAHIA, não linhas oficiais das marcas.
- Mantidas imagens reais fornecidas e ilustrações identificadas, sem afirmar disponibilidade em estoque ou entrega real.


## Entrada exclusiva — 24/11/2026
A primeira tela agora mostra somente a apresentação da IMPÉRIUM BAHIA. O catálogo fica oculto até o cliente clicar em uma opção. Botões: Marcas e Coleções (abre a seleção por estação), Roupas, Tênis, Acessórios e Ver Todo o Catálogo. Dentro da loja, o botão «← Início» retorna à apresentação, assim como o logotipo no cabeçalho.


## Atualização 24/11/2026 — cards e avaliação
- Cinco modalidades redesenhadas com ícones SVG e cores temáticas baianas, substituindo emojis.
- Modal automático após confirmar pedido **demonstrativo**: nota de 1 a 5 estrelas e campo opcional de observações.
- Avaliações armazenadas em `localStorage["imperiumBahiaReviews"]` no navegador, associadas a um identificador de pedido; nenhum dado é enviado a servidor.
- O cliente pode escolher "Agora não" ou fechar a avaliação.
- Para uso comercial real, implementar backend/autenticação, registro de pedido e canal seguro para feedback.

## Piloto ByteMind
Consulte BYTEMIND_PILOTO.md para executar o novo assistente, rodar os testes, explorar o estúdio 3D e configurar a IA local opcional.

## Entrega acadêmica — Piloto ByteMind
Abra `docs/RELATORIO_TECNICO.md` para o relatório, `docs/PRODUCT_BACKLOG.md` para as histórias, `banco/DER.md` para a modelagem e `banco/schema.sql` para o banco planejado. `docs/GUIA_APRESENTACAO.md` orienta a demonstração. A ficha dos produtos agora possui recomendações dinâmicas calculadas por conteúdo. O complemento generativo exige Ollama configurado e permanece experimental. Consulte os resultados e pendências de testes. A adaptação do segmento de informática para esportes deve ser confirmada com o professor.


## Ajuste visual dos cards de produto — 25/11/2026
- Removida a logo grande sobreposta na foto do produto.
- Adicionada etiqueta textual da marca no topo da imagem, sem cobrir a foto principal.
- Mantidas as logos completas apenas nas áreas de navegação e filtros de marcas.


## Ajuste visual — 25/11/2026
- Removida a seção pública "Conheça nosso estúdio 3D" da página inicial.
- O assistente ByteMind deixou de direcionar o usuário para essa seção.
- A visualização 3D do modal de produto foi mantida preparada apenas para produtos que tenham arquivo próprio.

## Banner — atualização visual
A ilustração genérica do tênis foi substituída pela arte retrô colorida da prévia, com identificação de imagem ilustrativa. As demais áreas do catálogo e a integração MySQL foram preservadas.


## Ajuste dos ícones das modalidades — 25/11/2026
Redesenhados os cinco SVGs da seção Qual é a sua vibe?, mantendo as categorias e as cores.
