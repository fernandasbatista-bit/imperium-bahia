# Piloto ByteMind — IMPÉRIUM BAHIA

## Proposta
Assistente de compras integrado à vitrine vigente: usa os produtos realmente exibidos e as regras do protótipo, sem criar preços, estoque ou prazos fictícios além dos valores demonstrativos já cadastrados. A identidade visual baiana, a entrada exclusiva, as coleções, o carrinho e a avaliação pós-pedido foram preservados.

## Execução
- Modo sem IA generativa: abra `index.html` com Live Server no VS Code. O motor local usa JavaScript puro, não exige chave de API e não depende de um modelo remoto.
- Servidor opcional: instale Node.js 20 ou superior, abra um terminal nesta pasta e execute `npm start`. Acesse http://localhost:8080. Não é necessário instalar dependências npm.
- Testes: `npm test`.
- Estúdio 3D: o arquivo GLB original acompanha o projeto; o componente model-viewer já referenciado no HTML necessita de internet e WebGL. A camiseta é conceitual, não é um produto de marca nem réplica de SKU.

## IA generativa local opcional (experimental)
Instale Ollama pela documentação oficial https://docs.ollama.com/ e escolha um modelo local compatível com seu computador. Com o serviço Ollama aberto e o modelo já baixado, no PowerShell:

```powershell
$env:BYTEMIND_MODEL="NOME_DO_MODELO_INSTALADO"
npm start
```

Abra http://localhost:8080 e marque a opção de interpretação com IA no chat. Ela só é usada para tentar reformular perguntas não reconhecidas pelo motor local; as respostas e cards continuam sendo determinados pelo catálogo e regras. A opção fica desativada por padrão. Não envie dados pessoais no chat. O servidor usa a interface local de Ollama, não requer API key e não fornece autenticação comercial. Se o serviço falhar, o assistente mantém a resposta local. A conexão com um modelo instalado não foi testada neste ambiente.

## Exemplos para a apresentação
- Camisetas até R$ 100
- Compare Nike e Olympikus
- Qual é mais barato?
- Quais cupons existem?
- Como funciona o frete?
- Quanto está meu carrinho?
- Ver coleção de verão
- Onde fica a loja física?
- Como funciona a avaliação?
- Quero ver o estúdio 3D

## Referências públicas consultadas
- https://github.com/AbuBaker91-hub/shopsage — recomendações fundamentadas em dados do catálogo.
- https://github.com/google/model-viewer — visualização 3D via componente web.
- https://github.com/ollama/ollama — interpretação opcional via modelo local.
Implementação própria; não foram copiados códigos de terceiros desses projetos. O NotebookLM escolar exige login e não foi acessado; o alinhamento aos métodos do material escolar está pendente do envio dos documentos ou exportação das fontes.

## Limitações e validação
O motor local é baseado em regras e busca lexical, não é um LLM nem um RAG vetorial. Pode não reconhecer certas perguntas ou combinações complexas. A interpretação opcional pode errar; ela não controla preços nem executa compras. O checkout não cobra, o frete é simulado, avaliações e pedidos são locais, e não há controle de estoque real. Não use dados pessoais ou senhas reais: a autenticação legada é apenas demonstrativa. O modelo 3D não é uma fotografia nem um SKU. As fotos de referência e permissões de uso comercial ainda precisam de confirmação. A navegação automatizada no navegador foi bloqueada por política do ambiente; faça uma conferência com Live Server antes da apresentação.

## Atualização acadêmica
O modo opcional agora também gera um complemento explicativo para perguntas que retornam produtos. Os cards locais aparecem primeiro e permanecem a fonte dos valores. O texto adicional é identificado como gerado por IA e pode conter erros; confira os dados. O novo endpoint `/api/bytemind/explain` consulta o Ollama local. O teste com um modelo realmente instalado ainda é necessário. A pasta `docs/` contém os entregáveis de engenharia de software, e `banco/` contém os modelos de dados e o SQL proposto. O material escolar foi fornecido em texto pelo estudante; páginas bloqueadas não foram usadas. A frase anterior sobre ausência de acesso ao NotebookLM continua verdadeira para o notebook original, mas seus textos exportados foram usados nesta atualização.
