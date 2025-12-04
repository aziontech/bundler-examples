import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandReact,
  IconCloud,
  IconCode,
  IconRocket,
  IconSettings,
  IconDatabase,
  IconApi,
  IconBolt,
  IconShield,
  IconWorld,
  IconBook,
  IconExternalLink,
  IconCircleCheck,
  IconAlertTriangle,
  IconTerminal2,
  IconDownload,
  IconPlayerPlay,
  IconBuildingStore,
  IconRefresh,
  IconSpeedboat,
  IconHeart,
} from "@tabler/icons-react";

export default function HowToPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">
              Next.js Commerce 13
            </h1>
            <h2 className="text-3xl font-semibold text-orange-500">
              Azion Platform
            </h2>
            <p className="text-xl text-gray-600">
              Guia Completo de Uso com CLI
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <IconBuildingStore className="w-8 h-8 text-blue-500 mx-auto" />
                <p className="font-semibold">
                  E-commerce moderno com Next.js 13
                </p>
              </div>
              <div className="space-y-2">
                <IconCloud className="w-8 h-8 text-orange-500 mx-auto" />
                <p className="font-semibold">Azion Platform</p>
              </div>
              <div className="space-y-2">
                <IconRocket className="w-8 h-8 text-green-500 mx-auto" />
                <p className="font-semibold">OpenNext.js</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Project Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconBook className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Sobre o Projeto
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Um projeto de e-commerce moderno construído com Next.js 13 e
            otimizado para a Plataforma da Azion.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Características Principais:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <IconBrandReact className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Interface Moderna
                </h4>
                <p className="text-gray-600">
                  UI responsiva com React e Tailwind CSS
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconCode className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Componentes Reutilizáveis
                </h4>
                <p className="text-gray-600">
                  Sistema de design baseado em Radix UI
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconBuildingStore className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Catálogo de Produtos
                </h4>
                <p className="text-gray-600">
                  Sistema completo de exibição de produtos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IconSettings className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Temas</h4>
                <p className="text-gray-600">
                  Suporte a modo claro/escuro com next-themes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2">
              <IconSpeedboat className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Performance Otimizada
                </h4>
                <p className="text-gray-600">
                  Implementação ISR (Incremental Static Regeneration)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconCode className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Tecnologias Utilizadas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <IconBrandNextjs className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Next.js 13
              </h3>
              <p className="text-gray-600">Framework React com App Router</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
              <IconBrandTypescript className="w-8 h-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600">
                Tipagem estática para maior confiabilidade
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-l-4 border-cyan-500">
              <IconBrandTailwind className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Framework CSS utility-first para estilização
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <IconSettings className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Radix UI
              </h3>
              <p className="text-gray-600">
                Componentes acessíveis e customizáveis
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <IconHeart className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                @tabler/icons-react
              </h3>
              <p className="text-gray-600">Ícones modernos e consistentes</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <IconCloud className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                OpenNext.js Azion
              </h3>
              <p className="text-gray-600">
                Adaptador para executar Next.js na Plataforma da Azion
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconCircleCheck className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">Pré-requisitos</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Node.js
                </h3>
                <p className="text-gray-600">Versão 18 ou superior</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Azion CLI
                </h3>
                <p className="text-gray-600 mb-3">
                  Instalação global via Homebrew (macOS/Linux):
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-orange-500">
                  brew install azion
                </div>
                <p className="text-gray-600 mt-3">
                  Para outros métodos de instalação, consulte o{" "}
                  <a
                    href="https://www.azion.com/en/documentation/products/azion-cli/overview/#installing-azion-cli"
                    className="text-blue-500 hover:text-blue-700 underline inline-flex items-center gap-1"
                    target="_blank"
                  >
                    guia completo <IconExternalLink className="w-4 h-4" />
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Conta Azion
                </h3>
                <p className="text-gray-600">Com acesso à Platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* MockAPI Setup Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconDatabase className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Setup MockAPI (Obrigatório)
            </h2>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
            <div className="flex items-center gap-2">
              <IconAlertTriangle className="w-5 h-5 text-red-600" />
              <p className="font-semibold text-red-800">
                Importante: Configure o MockAPI antes de usar a CLI da Azion!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Criar Conta MockAPI
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Acesse{" "}
                    <a
                      href="https://mockapi.io"
                      className="text-blue-500 hover:text-blue-700 underline"
                      target="_blank"
                    >
                      mockapi.io
                    </a>
                  </li>
                  <li>• Crie uma conta gratuita</li>
                  <li>• Crie um novo projeto</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Configurar Endpoint de Produtos
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • No seu projeto MockAPI, crie um novo recurso chamado{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      products
                    </code>
                  </li>
                  <li>
                    • Defina o caminho do endpoint como{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      /products
                    </code>
                  </li>
                  <li>
                    • Importe os dados do produto do arquivo{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      ./data.json
                    </code>
                  </li>
                  <li>• Copie a URL do endpoint gerado</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Configurar Variáveis de Ambiente
                </h3>
                <p className="text-gray-600 mb-3">
                  Copie o arquivo de exemplo:
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-orange-500 mb-3">
                  cp .env.example .env
                </div>
                <p className="text-gray-600 mb-3">
                  Atualize o arquivo{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">.env</code>{" "}
                  com seu endpoint MockAPI:
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-orange-500">
                  NEXT_PUBLIC_ENDPOINT_API=https://[your-project-id].mockapi.io/api/v1
                  <br />
                  REVALIDATE_SECRET=your-secret-token
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6 rounded">
            <p className="text-green-800">
              <strong>Nota:</strong> A aplicação busca produtos de{" "}
              <code className="bg-green-100 px-2 py-1 rounded">
                $&#123;NEXT_PUBLIC_ENDPOINT_API&#125;/products
              </code>{" "}
              e produtos individuais de{" "}
              <code className="bg-green-100 px-2 py-1 rounded">
                $&#123;NEXT_PUBLIC_ENDPOINT_API&#125;/products/&#123;id&#125;
              </code>
            </p>
          </div>
        </section>

        {/* Local Development Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconPlayerPlay className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Desenvolvimento Local
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Antes de usar a CLI da Azion, você pode desenvolver e testar
            localmente com Next.js:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Instalar Dependências
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                  npm install
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Modo Desenvolvimento
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-blue-500 mb-2">
                  npm run dev
                </div>
                <p className="text-gray-600">
                  Acesse:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    http://localhost:3000
                  </code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Build Local (Next.js)
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                  npm run build
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Executar Build Local
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                  npm start
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6 rounded">
            <div className="flex items-center gap-2">
              <IconCircleCheck className="w-5 h-5 text-green-600" />
              <p className="font-semibold text-green-800">
                Importante: Certifique-se de que o MockAPI está configurado
                antes de executar estes comandos!
              </p>
            </div>
          </div>
        </section>

        {/* CLI Commands Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconTerminal2 className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Comandos da CLI Azion
            </h2>
          </div>

          <div className="space-y-8">
            {/* Configurar Token */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Configurar Token da CLI
              </h3>
              <p className="text-gray-600 mb-4">
                Antes de usar a CLI, configure seu token de acesso pessoal:
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded">
                <div className="flex items-center gap-2">
                  <IconAlertTriangle className="w-5 h-5 text-orange-600" />
                  <p className="font-semibold text-orange-800">
                    Importante: Você precisa gerar um Personal Token primeiro!
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Passo 1: Gerar Personal Token
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Acesse o painel da Azion para gerar seu token:
                  </p>
                  <a
                    href="https://www.azion.com/en/documentation/products/accounts/personal-tokens/"
                    className="inline-flex items-center gap-2 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-colors"
                    target="_blank"
                  >
                    <IconExternalLink className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-700 font-medium">
                      Documentação Personal Tokens
                    </span>
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Passo 2: Configurar Token na CLI
                  </h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-orange-500">
                    azion -t &lt;your-personal-token&gt;
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
                <p className="text-blue-800">
                  <strong>Dica:</strong> Substitua{" "}
                  <code className="bg-blue-100 px-2 py-1 rounded">
                    &lt;your-personal-token&gt;
                  </code>{" "}
                  pelo token que você gerou no painel da Azion.
                </p>
              </div>
            </div>

            {/* Setup Inicial */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Setup Inicial
              </h3>
              <p className="text-gray-600 mb-4">
                Crie a configuração inicial e vincule ao projeto Azion:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-green-500 mb-4">
                azion link
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800">
                  <strong>Este comando:</strong>
                </p>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li>• Cria a configuração inicial</li>
                  <li>• Vincula ao projeto Azion</li>
                  <li>
                    • Configura o arquivo{" "}
                    <code className="bg-blue-100 px-2 py-1 rounded">
                      azion.config.cjs
                    </code>
                  </li>
                </ul>
              </div>
            </div>

            {/* Build */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Build do Projeto
              </h3>
              <p className="text-gray-600 mb-4">
                Build otimizado para a Plataforma da Azion:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-purple-500 mb-4">
                azion build --preset opennextjs
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-purple-800">
                  <strong>Este comando:</strong>
                </p>
                <ul className="text-purple-700 mt-2 space-y-1">
                  <li>• Executa build otimizado</li>
                  <li>• Configura OpenNext.js</li>
                  <li>• Prepara Storage para assets estáticos</li>
                  <li>• Configura Azion Functions para renderização</li>
                  <li>• Define regras de roteamento e entrega de conteúdo</li>
                </ul>
              </div>
            </div>

            {/* Preview */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Preview Local
              </h3>
              <p className="text-gray-600 mb-4">
                Execute preview local (pula o build do Next.js):
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-yellow-500 mb-4">
                azion dev --skip-framework-build
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-yellow-800">
                  <strong>Características:</strong>
                </p>
                <ul className="text-yellow-700 mt-2 space-y-1">
                  <li>
                    •{" "}
                    <code className="bg-yellow-100 px-2 py-1 rounded">
                      --skip-framework-build
                    </code>
                    : Pula o build do Next.js
                  </li>
                  <li>
                    • Útil quando já foi feito build ou para testar
                    configurações rapidamente
                  </li>
                  <li>• Permite testar localmente antes do deploy</li>
                </ul>
              </div>
            </div>

            {/* Deploy */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Deploy para Produção
              </h3>
              <p className="text-gray-600 mb-4">
                Deploy para a Platform da Azion:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-red-500 mb-4">
                azion deploy --local
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800">
                  <strong>Este comando:</strong>
                </p>
                <ul className="text-red-700 mt-2 space-y-1">
                  <li>• Faz deploy para a rede da Azion</li>
                  <li>• Distribui globalmente</li>
                  <li>• Ativa Azion Functions</li>
                  <li>• Configura Azion Storage</li>
                  <li>• Aplica regras de cache</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Flow Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconRefresh className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Fluxo Completo de Comandos
            </h2>
          </div>

          <h3 className="text-2xl font-semibold text-orange-500 mb-6">
            Sequência Recomendada:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  azion -t &lt;token&gt;
                </code>
                <p className="text-sm text-gray-600">Configurar token</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  azion link
                </code>
                <p className="text-sm text-gray-600">Configuração inicial</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  azion build --preset opennextjs
                </code>
                <p className="text-sm text-gray-600">Build otimizado</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  azion dev --skip-framework-build
                </code>
                <p className="text-sm text-gray-600">
                  Preview local (opcional)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow lg:col-span-2">
              <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                  azion deploy --local
                </code>
                <p className="text-sm text-gray-600">Deploy para produção</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revalidation API Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconRefresh className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              API de Revalidação de Cache
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            Endpoint integrado para revalidação manual de cache:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              /api/revalidate
            </code>
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Configuração:
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                REVALIDATE_SECRET=your-secret-token
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Exemplos de Uso:
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Revalidar por Tag (Recomendado):
                  </h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-green-500 overflow-x-auto">
                    curl -X POST http://localhost:3000/api/revalidate \<br />
                    &nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \
                    <br />
                    &nbsp;&nbsp;-H &quot;x-secret: your-secret-token&quot; \
                    <br />
                    &nbsp; -d &apos;&#123;&quot;type&quot;: &quot;tag&quot;,
                    &quot;value&quot;: &quot;products&quot;&#125;&apos;
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Revalidar por Path:
                  </h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border-l-4 border-yellow-500 overflow-x-auto">
                    curl -X POST http://localhost:3000/api/revalidate \<br />
                    &nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \
                    <br />
                    &nbsp;&nbsp;-H &quot;x-secret: your-secret-token&quot; \
                    <br />
                    &nbsp; -d &apos;&#123;&quot;type&quot;: &quot;path&quot;,
                    &quot;value&quot;: &quot;/sale&quot;&#125;&apos;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Azion Platform Resources */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconWorld className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Recursos da Plataforma Azion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <IconBolt className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Azion Functions
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Execução de código JavaScript</li>
                <li>• Escalabilidade automática</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <IconDatabase className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Azion Storage
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Armazenamento distribuído globalmente</li>
                <li>• API compatível com S3</li>
                <li>• Integração nativa com Azion Functions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <IconShield className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Azion Cache
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Cache inteligente com TTL configurável</li>
                <li>• Purge seletivo por tags</li>
                <li>• Compressão automática</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <IconRefresh className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                ISR (Incremental Static Regeneration)
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Arquitetura híbrida (Cache API + Storage)</li>
                <li>• Geração e revalidação sob demanda</li>
                <li>• Otimizações para Edge computing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <IconBook className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              Recursos Adicionais
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Documentação e Links Úteis:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.azion.com/en/documentation/"
                  className="flex items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                  target="_blank"
                >
                  <IconExternalLink className="w-5 h-5 text-blue-500" />
                  <span className="text-blue-700 font-medium">
                    Documentação da Azion
                  </span>
                </a>

                <a
                  href="https://github.com/aziontech/opennextjs-azion"
                  className="flex items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                  target="_blank"
                >
                  <IconExternalLink className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">
                    OpenNext.js Azion GitHub
                  </span>
                </a>

                <a
                  href="https://nextjs.org/docs"
                  className="flex items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
                  target="_blank"
                >
                  <IconExternalLink className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 font-medium">
                    Documentação do Next.js
                  </span>
                </a>

                <a
                  href="https://www.azion.com/en/documentation/products/azion-cli/"
                  className="flex items-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                  target="_blank"
                >
                  <IconExternalLink className="w-5 h-5 text-purple-500" />
                  <span className="text-purple-700 font-medium">
                    Referência da CLI Azion
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <h4 className="font-semibold text-green-800 mb-3">
                Próximos Passos:
              </h4>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-center gap-2">
                  <IconCircleCheck className="w-4 h-4" />
                  Configure seu MockAPI
                </li>
                <li className="flex items-center gap-2">
                  <IconCircleCheck className="w-4 h-4" />
                  Execute os comandos da CLI na sequência
                </li>
                <li className="flex items-center gap-2">
                  <IconCircleCheck className="w-4 h-4" />
                  Teste localmente com{" "}
                  <code className="bg-green-100 px-2 py-1 rounded">
                    azion dev
                  </code>
                </li>
                <li className="flex items-center gap-2">
                  <IconCircleCheck className="w-4 h-4" />
                  Faça deploy com{" "}
                  <code className="bg-green-100 px-2 py-1 rounded">
                    azion deploy
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="text-center py-16">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-gray-900">Obrigado!</h1>
            <h2 className="text-3xl font-semibold text-orange-500">
              Next.js Commerce 13 - Azion
            </h2>
            <p className="text-xl text-gray-600">
              Pronto para começar com a CLI da Azion!
            </p>
            <div className="flex justify-center">
              <IconRocket className="w-16 h-16 text-orange-500" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
