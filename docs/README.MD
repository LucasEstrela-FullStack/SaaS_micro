# ApoiaSupinpa - Plataforma de Monetização para Criadores

## 🎯 Objetivo do Projeto

O **ApoiaSupinpa** é uma plataforma SaaS (Software as a Service) desenvolvida para permitir que criadores de conteúdo monetizem seu público através de doações diretas. O projeto visa simplificar o processo de recebimento de apoios financeiros, oferecendo uma solução elegante e descomplicada para criadores digitais.

## 🚀 Funcionalidades Principais

### Para Criadores de Conteúdo:
- **Página Personalizada**: Cada criador recebe uma URL única (`/creator/[username]`) com design personalizado
- **Dashboard de Gestão**: Painel administrativo com estatísticas e histórico de doações
- **Autenticação**: Login via GitHub para gerenciar a conta
- **Analytics**: Visualização de métricas como total de apoiadores, valores recebidos e saldo

### Para Apoiadores:
- **Doações Diretas**: Sistema de pagamento para apoiar criadores favoritos
- **Mensagens Personalizadas**: Possibilidade de enviar mensagens junto com as doações
- **Interface Responsiva**: Experiência otimizada para desktop e mobile

## 🛠️ Stack Tecnológica

### Frontend:
- **Next.js 15.3.2** - Framework React com App Router
- **React 19** - Biblioteca para interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework de estilização
- **Radix UI** - Componentes acessíveis (Dialog, Label, Slot)
- **Lucide React** - Ícones modernos

### Autenticação:
- **NextAuth.js 5** - Autenticação com provedor GitHub

### Formulários e Validação:
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Hookform Resolvers** - Integração entre React Hook Form e Zod

### UI/UX:
- **Class Variance Authority** - Sistema de variantes de componentes
- **Sonner** - Notificações toast
- **Tailwind Merge** - Utilitário para mesclar classes CSS

## 📁 Estrutura do Projeto

```
saas_micro/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── page.tsx           # Página inicial (landing page)
│   │   ├── dashboard/         # Área administrativa
│   │   │   ├── page.tsx       # Dashboard principal
│   │   │   ├── me/           # Perfil do usuário
│   │   │   └── _components/   # Componentes do dashboard
│   │   │       ├── analytics.tsx    # Estatísticas
│   │   │       ├── donates.tsx      # Tabela de doações
│   │   │       ├── header.tsx       # Cabeçalho
│   │   │       ├── menu-mobile.tsx  # Menu mobile
│   │   │       └── stats-card.tsx   # Cards de estatísticas
│   │   └── creator/
│   │       └── [username]/    # Página personalizada do criador
│   │           └── page.tsx
│   ├── components/            # Componentes reutilizáveis
│   │   ├── FeatureCard.tsx    # Card de funcionalidades
│   │   └── ui/               # Componentes base (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── sheet.tsx
│   │       └── table.tsx
│   └── lib/                  # Utilitários e configurações
│       ├── auth.ts           # Configuração NextAuth
│       └── utils.ts          # Funções utilitárias
├── public/                   # Arquivos estáticos
└── docs/                     # Documentação
```

## 🎨 Design e UX

### Identidade Visual:
- **Cores**: Paleta baseada em âmbar/ouro (#amber-500, #amber-600)
- **Gradientes**: Efeitos visuais modernos com gradientes
- **Tipografia**: Hierarquia clara com diferentes tamanhos de fonte
- **Responsividade**: Design adaptativo para todos os dispositivos

### Componentes:
- **Cards**: Sistema de cards para exibir informações
- **Tabelas**: Componentes responsivos para dados
- **Formulários**: Interface intuitiva para interações
- **Navegação**: Menu mobile e desktop otimizados

## 🔧 Funcionalidades Implementadas

### ✅ Concluído:
- Landing page com apresentação do produto
- Sistema de autenticação via GitHub
- Dashboard com estatísticas básicas
- Página personalizada do criador (estrutura)
- Componentes UI base
- Layout responsivo

### 🚧 Em Desenvolvimento:
- Sistema de pagamentos
- Integração com gateway de pagamento
- Banco de dados para armazenar doações
- Sistema de notificações
- Personalização avançada das páginas

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## 💡 Conceito de Negócio

O ApoiaSupinpa se posiciona como uma alternativa brasileira ao Patreon, focando em:
- **Simplicidade**: Interface intuitiva e fácil de usar
- **Conexão direta**: Relacionamento próximo entre criador e apoiador
- **Pagamentos locais**: Suporte a métodos de pagamento brasileiros
- **Baixa barreira de entrada**: Setup rápido e sem complicações

Este projeto representa uma solução completa para criadores de conteúdo que desejam monetizar seu trabalho de forma independente e direta com seu público.
