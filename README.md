# Nimbo
Aplicação fictícia de organização financeira pessoal. Next.js App Router, TypeScript, Prisma/PostgreSQL, Tailwind, Zod e sessões JWT HttpOnly com bcrypt. Versões exatas no package-lock.json.

## Demonstração sem banco

Execute `npm ci` e `npm run dev`. Abra `http://localhost:3000/visao-geral?demo=1` (use a porta indicada pelo terminal). Não exige login ou PostgreSQL. Dados inteiramente fictícios; alterações ficam no armazenamento local do navegador.

## Executar com PostgreSQL
1. `npm ci`
2. Copie `.env.example` para `.env` e configure um segredo aleatório.
3. `docker compose up -d`
4. `npm run db:generate && npm run db:migrate && npm run db:seed`
5. `npm run dev`

Demonstração: demo@nimbo.local e outro@nimbo.local; senha local NimboDemo2026! para ambas. Nunca utilizar em produção.

`npm test` verifica cálculos puros; `npm run build` verifica a compilação.

## Arquitetura e permissões
API em /api/data exige sessão e restringe consultas e alterações ao userId assinado. Recursos referenciados são verificados no servidor. Valores inteiros em centavos; datas civis ISO, fuso de referência America/Sao_Paulo. Transferências são um registro único que altera o saldo derivado das duas contas; não entram nos totais de receitas/despesas. Não há saldo mutável em cache. Usuários têm apenas papel pessoal.

## Estudo de caso
Problema: movimentos dispersos dificultam compreender as finanças pessoais. Solução: contas, categorias, limites e metas em uma interface legível. Decisões: fundos sólidos para dados, verde para receitas e azul profundo na navegação, saldo derivado para refletir alterações e exclusões. Dados de demonstração são inteiramente fictícios.

## Limitações da entrega
Importação CSV com mapeamento/prévia e geração de recorrências ainda não implementadas. Os modelos existem. Não há testes de integração de isolamento, recorrência ou importação, nem Playwright. Paginação é limitada a 2000 transações. Rate limiting de login em memória é adequado somente a instância única. Diálogo precisa de refinamento de foco. Não houve validação visual em navegador nem execução PostgreSQL no ambiente. Não publicar como produto pronto sem completar estas etapas.
