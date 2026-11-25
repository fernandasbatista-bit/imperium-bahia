# Dicionário de dados
Modelo implementado para MySQL 8.0.16+. PK = chave primária; FK = estrangeira; UQ = único. INT UNSIGNED: 4 bytes; TINYINT: 1 byte; VARCHAR(n): limite em caracteres; DECIMAL(10,2): precisão de 10 dígitos, 2 decimais. TEXT: texto variável. Restrições compostas constam no SQL.

## cliente
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| nome | VARCHAR(120) | NOT NULL; Nome de apresentação |
| email | VARCHAR(254) | NOT NULL UNIQUE; Identificação de conta |
| senha_hash | VARCHAR(255) | NOT NULL; Hash seguro, nunca senha em texto puro |
| criado_em | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP; Data e hora de criação |

## categoria
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| nome | VARCHAR(80) | NOT NULL UNIQUE; Nome de apresentação |

## marca
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| nome | VARCHAR(80) | NOT NULL UNIQUE; Nome de apresentação |

## produto
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| categoria_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com categoria |
| marca_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com marca |
| nome | VARCHAR(180) | NOT NULL; Nome de apresentação |
| descricao | TEXT | NOT NULL; Descrição da peça |
| preco | DECIMAL(10,2) | NOT NULL CHECK(preco >= 0); Valor de catálogo |
| imagem | VARCHAR(500) | NULL permitido; Caminho da foto cadastrada |
| ativo | BOOLEAN | NOT NULL DEFAULT TRUE; Visibilidade no catálogo |
| — | — | FOREIGN KEY(categoria_id) REFERENCES categoria(id) |
| — | — | FOREIGN KEY(marca_id) REFERENCES marca(id) |

## variante
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| produto_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com produto |
| sku | VARCHAR(80) | NOT NULL UNIQUE; Código único da variante |
| tamanho | VARCHAR(16) | NOT NULL; Grade do item |
| cor | VARCHAR(60) | NOT NULL; Variação de cor |
| estoque | INT UNSIGNED | NOT NULL DEFAULT 0; Quantidade demonstrativa em estoque |
| — | — | UNIQUE(produto_id,tamanho,cor) |
| — | — | FOREIGN KEY(produto_id) REFERENCES produto(id) |

## pedido
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| cliente_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com cliente |
| subtotal | DECIMAL(10,2) | NOT NULL CHECK(subtotal >= 0); Soma dos itens |
| desconto | DECIMAL(10,2) | NOT NULL DEFAULT 0 CHECK(desconto >= 0); Abatimento |
| frete | DECIMAL(10,2) | NOT NULL DEFAULT 0 CHECK(frete >= 0); Custo de envio |
| total | DECIMAL(10,2) | NOT NULL CHECK(total >= 0); Valor final |
| cupom | VARCHAR(32) | NULL permitido; Código aplicado |
| status | VARCHAR(24) | NOT NULL DEFAULT 'demonstrativo'; Estado do pedido |
| criado_em | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP; Data e hora de criação |
| — | — | CHECK(desconto <= subtotal AND total = subtotal - desconto + frete) |
| — | — | FOREIGN KEY(cliente_id) REFERENCES cliente(id) |

## item_pedido
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| pedido_id | INT UNSIGNED | NOT NULL; FK; PK composta; Relacionamento com pedido |
| variante_id | INT UNSIGNED | NOT NULL; FK; PK composta; Relacionamento com variante |
| quantidade | INT UNSIGNED | NOT NULL CHECK(quantidade > 0); Número de unidades |
| preco_unitario | DECIMAL(10,2) | NOT NULL CHECK(preco_unitario >= 0); Preço histórico por unidade |
| — | — | PRIMARY KEY(pedido_id,variante_id) |
| — | — | FOREIGN KEY(pedido_id) REFERENCES pedido(id) |
| — | — | FOREIGN KEY(variante_id) REFERENCES variante(id) |

## interacao_chatbot
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| cliente_id | INT UNSIGNED | NULL; FK; Relacionamento com cliente |
| sessao | VARCHAR(64) | NOT NULL; Identificador pseudônimo |
| pergunta | VARCHAR(500) | NOT NULL; Mensagem, com minimização de dados |
| resposta | TEXT | NOT NULL; Resposta gerada |
| modo | VARCHAR(24) | NOT NULL; Motor usado |
| criado_em | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP; Data e hora de criação |
| — | — | FOREIGN KEY(cliente_id) REFERENCES cliente(id) ON DELETE SET NULL |

## recomendacao
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| interacao_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com interacao |
| produto_id | INT UNSIGNED | NOT NULL; FK; Relacionamento com produto |
| posicao | INT UNSIGNED | NOT NULL CHECK(posicao > 0); Ordem da sugestão |
| pontuacao | DECIMAL(8,4) | NULL; Escore de recomendação (quando disponível) |
| — | — | UNIQUE(interacao_id,produto_id) |
| — | — | UNIQUE(interacao_id,posicao) |
| — | — | FOREIGN KEY(interacao_id) REFERENCES interacao_chatbot(id) |
| — | — | FOREIGN KEY(produto_id) REFERENCES produto(id) |

## avaliacao
| Atributo | Tipo | Restrições e finalidade |
|---|---|---|
| id | INT UNSIGNED | AUTO_INCREMENT PRIMARY KEY; Identificador |
| pedido_id | INT UNSIGNED | NOT NULL UNIQUE; FK; Relacionamento com pedido |
| estrelas | TINYINT UNSIGNED | NOT NULL CHECK(estrelas BETWEEN 1 AND 5); Nota de 1 a 5 |
| observacoes | TEXT | NULL; Comentário opcional |
| criado_em | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP; Data e hora de criação |
| — | — | FOREIGN KEY(pedido_id) REFERENCES pedido(id) |
