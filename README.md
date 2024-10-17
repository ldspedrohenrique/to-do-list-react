# Gerenciador de Tarefas (To Do) - Meu Primeiro Projeto em React

Este repositório contém o código-fonte de um **gerenciador de tarefas** desenvolvido em **React**, com o intuito de praticar e consolidar conhecimentos adquiridos por meio de cursos e conteúdos disponíveis na internet.

## Descrição do Projeto

Este projeto é um simples gerenciador de tarefas (To Do), no qual você pode:

- Adicionar novas tarefas;
- Marcar tarefas como concluídas;
- Expandir informações da tarefa.
- Excluir tarefas;

Durante o desenvolvimento, explorei conceitos fundamentais como:

- **Componentização**;
- **Hooks** (como `useState` e `useEffect`);
- **Props** e **State**;
- **React Router** para navegação;
- **Query Params** para manipulação de parâmetros na URL;
- **local storage** para persistência de dados;
- **Consumo de APIs**;

Além disso, utilizei o **Tailwind CSS** para estilização rápida e responsiva.

## Tecnologias Utilizadas

- **React** (v18.3.1)
- **React DOM** (v18.3.1)
- **React Router DOM** (v6.26.1) para roteamento
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **UUID** para geração de IDs únicos
- **ESLint** para padronização de código

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado em seu ambiente de desenvolvimento:

- **Node.js** (versão 14.x ou superior)
- **npm** (ou **yarn**, se preferir)

## Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto em ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Para gerar uma versão de produção:

   ```bash
   npm run build
   ```

5. Para pré-visualizar a versão de produção:
   ```bash
   npm run preview
   ```

## Estrutura do Projeto

Abaixo está uma breve descrição da estrutura de diretórios do projeto:

```
/src
  /components    # Componentes reutilizáveis
  /pages         # Páginas do aplicativo
  /assets        # Arquivos estáticos (imagens, ícones, etc.)
  /hooks         # Hooks personalizados (se aplicável)
  /utils         # Funções utilitárias
  /styles        # Arquivos de estilo (Tailwind)
```

## Melhorias Futuras

- Adicionar **testes unitários** com **Jest** e **React Testing Library**.
