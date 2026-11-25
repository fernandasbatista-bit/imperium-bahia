# Relatório técnico de engenharia de software
## IMPÉRIUM BAHIA — adaptação do Piloto ByteMind
**Versão:** entrega acadêmica proposta · 24/11/2026

## 1. Introdução e justificativa
A atividade propõe a digitalização de uma loja de informática com inteligência artificial. Nossa equipe adaptou o problema ao varejo esportivo, criando a IMPÉRIUM BAHIA com identidade cultural baiana e o assistente ByteMind. A adaptação de segmento precisa de aceite do docente. Buscamos reunir marcas, fotos de referência, preços demonstrativos e recursos de atendimento em uma interface simples. A integração de IA procura reduzir a dificuldade de encontrar produtos e entender as condições da compra. O projeto é um protótipo, não uma loja em operação.

## 2. Objetivos e público
Objetivo geral: construir e documentar uma loja virtual inteligente, aplicando engenharia de requisitos, arquitetura de dados e qualidade de software. Objetivos específicos: organizar um catálogo, implementar busca e filtros, carrinho, promoções, frete e feedback; integrar recomendações por conteúdo e atendimento por linguagem natural; preparar modelagem relacional para a evolução do sistema; verificar resultados com testes e validar a experiência com usuários. Público: clientes de roupas, calçados e acessórios esportivos que buscam informações claras, variedade e praticidade. Entrega rápida é uma meta futura, não uma garantia operacional.

## 3. Metodologia e gestão
Adotamos Scrum como proposta de organização, pois o escopo evoluiu por feedback e entregas incrementais. Conforme o Guia Scrum 2020, os papéis são Product Owner (prioriza valor e backlog), Scrum Master (promove o framework e remove impedimentos) e Developers (desenvolvem o incremento). Para equipe de quatro pessoas, sugere-se distribuir responsabilidades entre produto, interface, dados e IA/testes, com colaboração transversal; os nomes devem ser preenchidos pela equipe. Uma Sprint de uma semana é uma proposta acadêmica, não um registro de reuniões realizadas. Em cada ciclo: Planning (objetivo e trabalho), Daily (inspeção diária), Review (demonstração e feedback), Retrospective (melhoria do processo). O backlog é ordenado e atualizado; a Definition of Done exige código revisado, testes relevantes, documentação atualizada e aceite de critérios. Usaremos quadro de tarefas com limite de dois itens em andamento como prática complementar de Kanban.

### Planejamento de Sprints sugerido
| Sprint | Meta | Incremento / evidência |
|---|---|---|
| 1 | Escopo e interface | Requisitos, entrada, catálogo, DER inicial |
| 2 | Jornada de compra | Filtros, detalhes, carrinho, cupons e frete |
| 3 | Atendimento inteligente | Motor de consulta, recomendações e testes |
| 4 | Entrega de qualidade | Documentação, SQL, avaliação, revisão visual e demonstração da IA |

Não foram inventadas datas, atas ou assinaturas de reuniões. A equipe deve registrar as atividades efetivamente realizadas. Modelo clássico foi estudado, mas seu fluxo sequencial é menos adequado às mudanças frequentes deste protótipo. As fontes sobre aprendizagem ativa apoiam preparação individual e colaboração prática; não são evidência de desempenho técnico da loja.

## 4. Requisitos funcionais
Legenda: Local = presente no código do protótipo, não implica teste de interface completo; Experimental = integração preparada, depende de ambiente; Planejado = não implementado comercialmente.
| ID | Requisito | Critério de aceite | Situação |
|---|---|---|---|
| RF01 | Exibir catálogo ativo | Exibir somente itens ativos com foto e marca | Local |
| RF02 | Buscar produtos | Buscar pelo nome ou marca | Local |
| RF03 | Filtrar categoria | Mostrar itens da categoria escolhida | Local |
| RF04 | Filtrar marca | Mostrar itens da marca ou vitrine Decathlon | Local |
| RF05 | Detalhar produto | Exibir nome, preço, foto e descrição | Local |
| RF06 | Selecionar variante | Exigir tamanho quando aplicável | Local |
| RF07 | Adicionar ao carrinho | Incluir item e tamanho escolhidos | Local |
| RF08 | Remover item | Remover item selecionado | Local |
| RF09 | Alterar quantidade | Recalcular subtotal | Local |
| RF10 | Calcular subtotal | Somar quantidade × preço | Local |
| RF11 | Aplicar cupom | Aplicar apenas cupom elegível | Local |
| RF12 | Frete inicial | Primeiro pedido identificado com frete grátis | Local |
| RF13 | Frete recorrente | Grátis a partir de R$ 250 após desconto | Local |
| RF14 | Meta de frete | Exibir valor restante | Local |
| RF15 | Favoritos | Salvar preferências localmente | Local |
| RF16 | Ordenação | Ordenar catálogo por preço ou nome | Local |
| RF17 | Conta | Simular identificação e login | Local |
| RF18 | Pedido | Registrar pedido demonstrativo | Local |
| RF19 | Avaliação | Exibir formulário após pedido e salvar nota e observações | Local |
| RF20 | Coleções | Filtrar seleção sazonal por marca | Local |
| RF21 | Chatbot | Consultar catálogo em linguagem natural e retornar cards | Local |
| RF22 | Recomendação | Sugerir até três alternativas relacionadas na ficha | Local |
| RF23 | IA generativa | Interpretar perguntas e gerar complemento baseado nos dados | Experimental |
| RF24 | Persistência central | Guardar clientes, itens, pedidos e interações no MySQL | Implementado em código; teste com MySQL pendente |
| RF25 | Pagamento e estoque | Integrar provedor e validar estoque em transação | Planejado |
| RF26 | Ajuda no carrinho | Permitir abrir o assistente durante a compra | Local |
| RF27 | Histórico de pedidos | Consultar quantidade de pedidos locais por conta | Local |
| RF28 | Visualização 3D | Exibir modelo conceitual sem alegar equivalência com SKU | Local |

## 5. Requisitos não funcionais
Metas de qualidade propostas, não resultados medidos.
| ID | Atributo | Critério / meta |
|---|---|---|
| RNF01 | Adequação funcional | Todos os cenários críticos de aceite aprovados antes da apresentação |
| RNF02 | Acurácia | Valores exibidos iguais aos dados do catálogo e regras de cálculo |
| RNF03 | Confiabilidade | Falha do modelo local não impede uso do catálogo |
| RNF04 | Recuperabilidade | Carrinho local pode ser recuperado após recarregar |
| RNF05 | Usabilidade | Usuário de teste encontra um produto e abre a ficha sem instrução em até 1 minuto |
| RNF06 | Responsividade | Testar em 360, 768 e 1366 px, sem rolagem horizontal indevida |
| RNF07 | Acessibilidade | Navegação por teclado, foco visível, rótulos e texto alternativo |
| RNF08 | Contraste | Meta de contraste de 4,5:1 para texto comum |
| RNF09 | Eficiência | Meta de carregamento em até 3 s, com rede e equipamento registrados |
| RNF10 | Tempo de resposta | Meta de resposta local em até 1 s; IA opcional com timeout |
| RNF11 | Manutenibilidade | Separar HTML, CSS, motor de consulta e servidor |
| RNF12 | Testabilidade | Executar npm test após alterações |
| RNF13 | Portabilidade | Executar em Node.js 20+ e navegadores atuais |
| RNF14 | Compatibilidade | Testar Chrome e Edge e, se possível, Firefox |
| RNF15 | Proteção de senhas | Na versão comercial, hash seguro e nunca senha em texto puro |
| RNF16 | Privacidade | Não usar dados reais na demonstração; coletar mínimo necessário |
| RNF17 | Segurança de transações | HTTPS e gateway no futuro ambiente comercial |
| RNF18 | Controle de mudanças | Registrar versão, alterações e evidências em Git |
| RNF19 | Integridade dos dados | PK, FK, restrições de domínio e transações na versão persistente |
| RNF20 | Imagens | Exibir somente fotos cadastradas nos produtos ativos; informar referências |
| RNF21 | Documentação | Instruções de instalação e limites atualizados |
| RNF22 | Escalabilidade | Separar dados de catálogo, atendimento e persistência no backend futuro |
| RNF23 | Disponibilidade | Meta futura de 99,5% mensal, não medida no piloto |
| RNF24 | Fallback | Exibir resultado local se a IA estiver desativada ou indisponível |
| RNF25 | Qualidade da IA | Não tratar texto gerado como fonte de verdade; checar fatos com catálogo |

## 6. Qualidade de software
As notas de aula apresentam a ISO/IEC 9126 como modelo histórico de qualidade do produto, com funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade e portabilidade. Aplicamos seus conceitos como referência didática, sem alegar certificação. Verificação: confirmar se a implementação segue os requisitos (testes de busca, recomendações, sintaxe). Validação: conferir se a loja resolve as necessidades do usuário (teste de navegação e aceite com colegas/docente). A qualidade de processo inclui controle de mudanças, revisão conjunta e documentação. Não atribuímos nível de maturidade CMM ao projeto.

## 7. Riscos e mitigação
Escala qualitativa proposta: P (probabilidade) e I (impacto) = baixa, média ou alta.
| Risco | P | I | Mitigação |
|---|---|---|---|
| Desvio do segmento solicitado | Média | Alta | Confirmar a adaptação com o docente |
| IA não instalada ou indisponível | Alta | Alta | Motor local, timeout e demonstração prévia |
| Alucinação de preço ou estoque | Média | Alta | Cards determinísticos; texto gerado separado; não prometer estoque |
| Foto incompatível com produto | Alta | Alta | Conferir SKU e licença; marcar referência |
| Erros de cupom ou frete | Média | Alta | Casos de fronteira e cálculo em centavos na futura API |
| Dados pessoais expostos | Média | Alta | Dados fictícios, sem credenciais reais; autenticação e proteção no backend |
| Perda de dados locais | Média | Média | Persistência central planejada; exportar evidências fictícias |
| Falta de evidências da equipe | Média | Alta | Registrar Planning, Review e Retrospective reais |
| Modelo 3D não carrega | Média | Média | Foto e mensagem de fallback; testar WebGL |
| Falhas de layout em celular | Média | Média | Testes em diferentes resoluções e navegação por teclado |
| Prazo de entrega apertado | Alta | Média | Priorizar os três pilares antes de novos efeitos visuais |

## 8. Arquitetura e IA
Front-end HTML/CSS/JS → motor local ByteMind → catálogo ativo e regras da loja. O servidor Node.js opcional envia somente consultas de produto e fatos limitados ao modelo Ollama instalado na máquina. O modo local usa regras, normalização de texto, busca lexical e ranking por conteúdo (mesma categoria, sobreposição de palavras, marca e proximidade de preço). A IA generativa é opcional, não controla preços e não realiza pedidos. Os dados objetivos permanecem nos cards. O complemento gerado pode errar e deve ser conferido. Não se trata de treinamento próprio de modelo, nem de RAG vetorial. MySQL integrado via API Node.js, com DER, esquema, carga inicial e dicionário na pasta banco/. A vitrine local ainda funciona sem o banco; pedidos e autenticação exigem conexão.

## 9. Referências do material escolar
- Schwaber, K.; Sutherland, J. Guia do Scrum, novembro de 2020. Fonte normativa priorizada sobre explicações mais antigas.
- Costa, R. A. Fundamentos do Scrum. ESR/RNP, 2016. Apoio à gestão, estimativas e quadro de tarefas.
- Notas de aula de Qualidade de Software, com referências a Pressman, Rocha, Maldonado, Weber, Cortes, Chiossi, SEI e Kan; atividades de apoio, verificação, validação e modelos de qualidade.
- Código Fonte TV, transcrição sobre Scrum: apoio introdutório; diferenças de terminologia resolvidas pela referência de 2020.
- Atlassian, Kanban versus Scrum; Gran Cursos, Scrum x Kanban: apoio à comparação de fluxos.
- Silva, I. R. R. et al. Análise da metodologia de sala de aula invertida aplicada na disciplina de desenvolvimento de jogos, SBGames 2024: evidência educacional contextual, não teste do e-commerce.
- Nóbrega, R. X. Metodologias ativas: métodos de ensino aplicáveis a gerações tecnológicas. Mackenzie, 2024: apoio à aprendizagem por projetos.
- Enunciado do Projeto Integrador Piloto ByteMind e material sobre metodologias clássicas e ágeis, fornecidos pelo estudante.

As páginas FM2S e Siteware vieram apenas com mensagens de verificação de segurança; não foram usadas como fontes substantivas. As fontes fornecidas não especificam uma API ou modelo de IA obrigatório, nem resultados de testes do nosso assistente. A escolha de arquitetura é uma proposta técnica da equipe.

## 10. Entrega e limites
O protótipo preserva 16 produtos ativos com fotos de referência e o tema baiano. A avaliação, autenticação, pedidos e frete são demonstrativos. O catálogo original de 55 itens não equivale a estoque comercial. Não existe integração comercial de pagamento ou entrega. O estoque e o banco MySQL foram integrados para simulação, pendentes de teste com instância real. A validação visual e o teste com Ollama real devem ser feitos antes da apresentação. Consulte PLANO_DE_TESTES.md e GUIA_APRESENTACAO.md.
