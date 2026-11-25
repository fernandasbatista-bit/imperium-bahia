# MySQL — configuração e demonstração

Requisitos: Node.js 20.12+ (recomendado 22 LTS), MySQL Server 8.0.16+ e MySQL Workbench. O Workbench é cliente gráfico; instale e inicie também o serviço MySQL Server. Use apenas dados fictícios. O código está integrado, mas o teste com uma instância MySQL real não foi executado neste ambiente.

1. Extraia o ZIP. Abra a pasta IMPERIUM_BAHIA no VS Code.
2. No Workbench, conecte-se ao MySQL local com um usuário administrador. Em File > Open SQL Script, abra `banco/schema.sql` e execute todo o script (ícone de raio). Repita para `banco/seed.sql`. Execute `SELECT COUNT(*) FROM imperium_bahia.produto;` (16) e `SELECT COUNT(*) FROM imperium_bahia.variante;` (69, em banco recém-criado). O script não repõe estoque após novos pedidos.
3. Crie um usuário exclusivo da aplicação no Workbench (substitua a senha de exemplo antes de executar):

```sql
CREATE USER IF NOT EXISTS 'imperium_app'@'127.0.0.1' IDENTIFIED BY 'ESCOLHA_UMA_SENHA_FORTE_LOCAL';
GRANT SELECT, INSERT, UPDATE ON imperium_bahia.* TO 'imperium_app'@'127.0.0.1';
```

Se já existir, use ALTER USER para ajustar a senha local. Não use root na aplicação. Não compartilhe a senha.
4. No terminal do VS Code (PowerShell):

```powershell
Copy-Item .env.example .env
npm install
npm test
npm start
```

Antes de `npm start`, edite `.env` para informar a senha do usuário acima. Não publique `.env` ou `node_modules`. O navegador deve abrir http://localhost:8080 (não Live Server). Se a porta estiver ocupada, altere PORT no .env e use a nova porta.
5. Confira `http://localhost:8080/api/db/status`: `{"connected":true}`. Em caso de 503, confira serviço, porta, credenciais, scripts e instalação do pacote mysql2.
6. Cadastre conta fictícia (por exemplo, `teste@example.com`, senha exclusiva de teste com 8+ caracteres). Adicione uma camiseta, aplique BEMVINDO10 e conclua o pedido demonstrativo. Avalie de 1 a 5 estrelas. Teste nova compra para confirmar a regra de frete. O servidor calcula os valores e baixa o estoque em transação, sem pagamento real ou entrega.
7. Se quiser testar o registro de conversas, entre na conta, marque a autorização no chat e pergunte sobre camisetas. Não insira dados pessoais. A integração Ollama continua opcional.
8. Consulte no Workbench:

```sql
USE imperium_bahia;
SELECT id,nome,email,criado_em FROM cliente;
SELECT id,cliente_id,subtotal,desconto,frete,total,status FROM pedido;
SELECT * FROM item_pedido;
SELECT produto_id,tamanho,estoque FROM variante;
SELECT pedido_id,estrelas,observacoes FROM avaliacao;
SELECT id,cliente_id,pergunta,modo FROM interacao_chatbot;
SELECT interacao_id,produto_id,posicao FROM recomendacao;
```

## Escopo e limitações
- Catálogo inicial: 16 produtos e 69 variantes com 10 unidades fictícias por tamanho. A API sincroniza IDs ativos, preços e estoque; descrição, marca, imagem e curadoria visual continuam no frontend. Novos IDs exigem atualização do catálogo e dos arquivos visuais.
- Clientes, pedidos, itens, avaliações e interações autorizadas são persistidos no MySQL. Sessões são mantidas em memória por 2 horas (reiniciar servidor exige novo login); carrinho e favoritos permanecem locais. Contas/pedidos antigos do localStorage não são migrados, e suas chaves antigas são limpas por segurança.
- Senhas: scrypt com salt; cookie HttpOnly e SameSite=Strict. API local, sem HTTPS, sem recuperação de senha, sem controle de abuso completo, sem pagamento, sem logística, sem painel de administração. Não use em produção. Registro de chat é opcional e armazena apenas a resposta do motor local; conteúdo é fornecido pelo cliente para fins de demonstração, não é trilha de auditoria inviolável.
- Testes locais passaram; npm install e conexão MySQL real não puderam ser executados aqui por indisponibilidade do registro npm e do servidor de banco. Teste no seu computador antes de apresentar. O teste visual completo continua pendente.
