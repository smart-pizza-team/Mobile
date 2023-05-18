# Mobile
Versão mobile do app smartPizza desenvolvido pela equipe

# Projeto de Desenvolvimento Mobile

Este é um projeto de desenvolvimento mobile que utiliza Yarn como gerenciador de pacotes, Axios para fazer requisições HTTP, Expo como plataforma de desenvolvimento e bibliotecas nativas do React Native.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org).

2. Instale o Yarn globalmente executando o seguinte comando no seu terminal:

   ```shell
   npm install -g yarn
   ```

3. Clone este repositório para o seu ambiente local:

   ```shell
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

4. Acesse o diretório do projeto:

   ```shell
   cd nome-do-projeto
   ```

5. Instale as dependências do projeto com o Yarn:

   ```shell
   yarn install
   ```

## Configuração

Antes de iniciar o aplicativo, você precisa configurar algumas informações.

1. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

   ```dotenv
   API_URL=URL_DA_API
   ```

   Substitua `URL_DA_API` pela URL da API que você irá utilizar.

2. Configure o Expo instalando o aplicativo Expo em seu dispositivo móvel ou utilizando um emulador Android ou iOS.

## Executando o Aplicativo

Com todas as dependências instaladas e configurações concluídas, você pode executar o aplicativo no seu dispositivo ou emulador.

1. Inicie o servidor de desenvolvimento do Expo:

   ```shell
   yarn start
   ```

2. Use o aplicativo Expo no seu dispositivo móvel para escanear o QR code exibido no terminal ou acesse o emulador para visualizar o aplicativo.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev)
- [Expo](https://expo.io)
- [Axios](https://github.com/axios/axios)

## Contribuição

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.

2. Crie uma nova branch com suas alterações:

   ```shell
   git checkout -b minha-branch
   ```

3. Faça commit das suas alterações:

   ```shell
   git commit -m "Minha contribuição"
   ```

4. Faça push para o seu fork:

   ```shell
   git push origin minha-branch
   ```

5. Abra um Pull Request neste repositório.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
