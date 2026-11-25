# Roteiro de apresentação — quatro integrantes (sugestão)
1. Integrante 1: problema, objetivos, público, metodologia Scrum, Product Backlog e riscos.
2. Integrante 2: arquitetura de dados, DER, PK/FK, dicionário e como o MySQL será conectado futuramente.
3. Integrante 3: entrada, identidade baiana, catálogo, marcas, filtros, produto, carrinho, cupom, frete e avaliação demonstrativa.
4. Integrante 4: ByteMind, algoritmo de recomendação, chat com consultas por preço e marca, testes e estúdio 3D. Se Ollama estiver instalado, demonstrar complemento generativo e fallback.

## Preparação
- Extraia o ZIP, abra IMPERIUM_BAHIA no VS Code, execute `npm test` e `npm start`, visite http://localhost:8080.
- Para demonstração generativa, configure Ollama segundo BYTEMIND_PILOTO.md antes de iniciar o servidor. Não é necessário para o motor local, mas é necessário para demonstrar a IA generativa real.
- Exemplos: "Camisetas até R$ 100", "Compare Nike e Olympikus", "Como funciona o frete?", "Onde fica a loja?". Abra uma ficha e demonstre as recomendações.
- Abra banco/DER.md no visualizador Mermaid ou importe o schema.sql no MySQL Workbench para gerar o modelo físico; o DER conceitual é a representação de entidades e cardinalidades. SQL não foi executado em MySQL neste ambiente.
- Confirme com o docente a aceitação do segmento esportivo. Explique que o site é demonstrativo. Não declare resultados de testes, reuniões ou integrações que não tenham ocorrido.
