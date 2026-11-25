# Plano de testes e evidências

## Verificação executada
- `npm test`: 13 verificações do motor de chat, 16 produtos ativos com fotos locais e 16 listas de recomendação verificadas, além de quatro cenários adicionais. Ver saída em RESULTADOS_TESTES.txt.
- `node --check`: scripts da interface, do assistente e do servidor.
- Testes automatizados não substituem validação de interface ou execução de modelo real.

## Roteiro de aceite (a executar pela equipe)
| ID | Cenário | Resultado esperado | Estado |
|---|---|---|---|
| T01 | Abrir site | Entrada exclusiva, catálogo oculto | Pendente navegador |
| T02 | Clicar em Roupas / Tênis / Marcas | Filtro correto; voltar à entrada funciona | Pendente navegador |
| T03 | Pesquisar camiseta | Resultados correspondentes | Pendente navegador |
| T04 | Abrir ficha Nike | Foto, nome, preço, tamanhos e recomendações | Pendente navegador |
| T05 | Adicionar sem tamanho exigido | Mensagem de validação | Pendente navegador |
| T06 | Inserir primeiro pedido com e-mail fictício | Frete zero | Pendente navegador |
| T07 | SPORT5 com R$ 99,99 e R$ 100,00 | Rejeitar abaixo; aplicar a partir de 100 | Pendente navegador |
| T08 | Cliente recorrente, total líquido de R$ 249,99 e R$ 250,00 | Cobrar R$ 24,90 e depois zero | Pendente navegador |
| T09 | Confirmar pedido | Avaliação automática de 1 a 5, comentário opcional | Pendente navegador |
| T10 | Consultar camisetas até R$ 100 | Nenhum card acima do limite | Motor testado; interface pendente |
| T11 | Consultar produto inexistente | Não inventar item | Motor testado |
| T12 | Desligar Ollama | Resultado local permanece acessível | Pendente integração |
| T13 | Ativar Ollama e fazer pergunta | Complemento gerado sem substituir fatos | Pendente integração real |
| T14 | Abrir estúdio 3D | Modelo conceitual ou aviso de erro | Pendente navegador |
| T15 | Testar 360 / 768 / 1366 px | Layout legível e sem sobreposição | Pendente navegador |
| T16 | Testar teclado | Foco e operação dos controles | Pendente navegador |
| T17 | Executar schema em MySQL 8.0.16+ | Tabelas, chaves e restrições criadas | Pendente MySQL |
| T18 | Validar com usuário | Localizar e selecionar produto sem orientação; registrar opinião | Pendente equipe |

Preencha data, responsável, resultado observado, captura de tela e defeitos encontrados após executar cada cenário. Não registre aprovação sem evidência. Use dados fictícios.
