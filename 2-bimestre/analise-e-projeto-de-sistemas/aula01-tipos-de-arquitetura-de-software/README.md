# 📘 AULA 34: TIPOS DE ARQUITETURA DE SOFTWARE: MONOLITICA, CLIENTE-SERVIDOR E MICROSERVIÇOS

## 🎯 Objetivos da aula

- Entender o que é **arquitetura de software**.
- Conhecer os modelos **Monolítica**, **Cliente-Servidor** e **Microsserviços**.
- Comparar características básicas.
- Identificar onde cada arquitetura pode ser utilizada.

# 🧠 O que é Arquitetura de Software?

Arquitetura de software é a **estrutura organizacional de um sistema**.

Ela define:

- Como as partes do sistema se conectam
- Onde cada função fica
- Como o sistema cresce
- Como será mantido no futuro

👉 É como a **planta de uma casa**, só que aplicada ao software.

# 🖊️ Quadro

```
IDEIA
 ↓
ARQUITETURA
 ↓
SISTEMA FUNCIONANDO
```

# 🧱 1. Arquitetura Monolítica

Todo o sistema fica em **um único projeto**.

Exemplo:

- Login
- Cadastro
- Estoque
- Relatórios

Tudo junto.

## 🖊️ Quadro

```
+----------------------+
|   SISTEMA ÚNICO      |
|----------------------|
| Login                |
| Cadastro             |
| Estoque              |
| Relatórios           |
+----------------------+
```

## ✅ Vantagens

- Fácil começar
- Simples para sistemas pequenos

## ❌ Desvantagens

- Cresce com dificuldade
- Manutenção complexa no futuro

# 🖥️ 2. Cliente-Servidor

Existe separação entre:

- Cliente = quem usa
- Servidor = onde roda o sistema

## 🖊️ Quadro

```
[ Cliente ]
 Navegador/App
      ↓
[ Servidor ]
 Sistema + Banco
```

## Exemplo

- Site acessado no navegador
- App conectado a servidor

# 🧩 3. Microsserviços

Sistema dividido em vários pequenos sistemas.

Cada parte cuida de uma função.

## 🖊️ Quadro

```
[ Login ]
[ Pagamento ]
[ Estoque ]
[ Entrega ]
```

Todos conversando entre si.

## Exemplo

Loja virtual grande.

# 📊 Comparação rápida

```
Monolítico → simples
Cliente-Servidor → organizado
Microsserviços → escalável
```

Fim da aula!

_

# 📝 Atividade Rápida

## Identificando arquitetura do sistema

Associe:

1. Sistema pequeno de biblioteca
2. Loja online nacional
3. Site escolar com vários usuários

Crie sua resposta abaixo:
1. Sistema pequeno de biblioteca → Arquitetura Monolítica

Justificativa
{**Como a biblioteca possui poucas funcionalidades e poucos usuários, é mais simples desenvolver e manter tudo junto em um único sistema. Isso reduz a complexidade e facilita o início do projeto.**}

requisitos funcionais(
Cadastrar livros.
Consultar livros disponíveis.
Cadastrar alunos/usuários.
Realizar empréstimos de livros.
Registrar devoluções de livros.
Atualizar informações dos livros.
Excluir cadastros de livros quando necessário.
Emitir relatórios de empréstimos.
Pesquisar livros por título, autor ou categoria.
Controlar a quantidade de exemplares disponíveis.
)

requisitos nao funcionais (
      O sistema deve possuir interface simples e fácil de usar.
O tempo de resposta das consultas deve ser inferior a 3 segundos.
Os dados devem ser armazenados em banco de dados seguro.
Apenas usuários autorizados podem acessar funções administrativas.
O sistema deve funcionar em computadores com navegador moderno.
O sistema deve realizar backup periódico dos dados.
O sistema deve estar disponível durante o horário de funcionamento da biblioteca.
As informações dos usuários devem ser protegidas contra acesso não autorizado.
O sistema deve permitir manutenção e atualização sem perda de dados.
O sistema deve suportar pelo menos 50 usuários cadastrados.
)

2. Loja Online Nacional → Arquitetura de Microsserviços

Justificativa
{**A loja possui diferentes áreas, como login, pagamento, estoque e entrega. Cada serviço pode funcionar de forma independente, facilitando a manutenção, atualização e crescimento do sistema.**}

Requisitos Funcionais(
Permitir o cadastro de clientes.
Realizar login de usuários.
Exibir catálogo de produtos.
Permitir a busca de produtos.
Adicionar produtos ao carrinho de compras.
Finalizar pedidos.
Processar pagamentos.
Controlar o estoque dos produtos.
Gerenciar entregas dos pedidos.
Permitir que o cliente acompanhe o status da compra.)

Requisitos Não Funcionais(
O sistema deve estar disponível 24 horas por dia.
O tempo de carregamento das páginas deve ser inferior a 3 segundos.
Os dados dos clientes devem ser protegidos por mecanismos de segurança.
O sistema deve suportar milhares de acessos simultâneos.
O sistema deve permitir expansão sem interromper os demais serviços.
As transações de pagamento devem ser seguras.
O sistema deve ser compatível com computadores e dispositivos móveis.
O sistema deve realizar backups periódicos dos dados.
O sistema deve manter alta disponibilidade mesmo em caso de falha de um serviço.
O sistema deve permitir atualizações sem parar toda a plataforma.)

3. Site Escolar com Vários Usuários → Arquitetura Cliente-Servidor

Justificativa
{**O sistema escolar possui vários usuários acessando informações diferentes, como notas, frequência e atividades. A arquitetura Cliente-Servidor permite centralizar os dados no servidor e disponibilizá-los aos usuários de forma organizada e segura.**}

Requisitos Funcionais(
Permitir o cadastro de alunos, professores e funcionários.
Realizar login de usuários.
Exibir notas dos alunos.
Registrar frequência dos alunos.
Disponibilizar atividades e materiais de estudo.
Permitir o lançamento de notas pelos professores.
Consultar horários das aulas.
Emitir boletins escolares.
Enviar comunicados para os usuários.
Atualizar dados cadastrais dos usuários.)

Requisitos Não Funcionais(
O sistema deve estar disponível durante o horário escolar.
O acesso deve exigir autenticação por usuário e senha.
Os dados dos alunos e professores devem ser protegidos.
O sistema deve responder às consultas em até 3 segundos.
O sistema deve funcionar nos principais navegadores.
O banco de dados deve realizar backups periódicos.
O sistema deve suportar acessos simultâneos de vários usuários.
A interface deve ser simples e fácil de utilizar.
O sistema deve garantir a integridade das informações escolares.
O sistema deve permitir manutenção sem perda de dados.)