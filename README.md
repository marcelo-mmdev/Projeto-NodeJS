## Projeto

[Site](https://orange-web-ten.vercel.app/)
[Video](https://www.youtube.com/watch?v=j8cm2C5-xn8&t=4771s)

Nesse projeto temos
[Next.js](https://nextjs.org/)
[Chakra.ui](https://chakra-ui.com/)
[Axios](https://axios-http.com/ptbr/)
[React Icons](https://react-icons.github.io/react-icons/)
[React Slick](https://react-slick.neostack.com/docs/get-started)
[React Photo Album](https://www.npmjs.com/package/react-photo-album)
[Simple React Lightbox](https://www.npmjs.com/package/simple-react-lightbox)
[Yet Another React Lightbox](https://www.npmjs.com/package/yet-another-react-lightbox)

<!--#########################################################-->

Anotações do inicio em NodeJS

1 - Install da libs
*yarn add -D typescript nodemon ts-node @types/express @types/node
*yarm add express pg typeorm dotenv reflect-metadata

2 - Editar o package.json
"scripts": {
"dev": "nodemon --exec ts-node ./src/index.ts",
},

3 - Criar o index.ts

-     ./src/index.ts

4 - Tenho que iniciar o TS temos duas formas
*1*No terminal - npx tsc --init
vai cria umm arquivo tsconfig.json com varias configuração
apaga tudo e passa essas outras configurações

{
"compilerOptions": {
"target": "es2018",
"lib": ["es5", "es6", "ES2018"],
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"module": "commonjs",
"moduleResolution": "node",
"resolveJsonModule": true,
"allowJs": true,
"outDir": "./dist",
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"strict": true,
"noImplicitAny": true,
"strictPropertyInitialization": false
},
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"],
"ts-node": {
"files": true
}
}

<!--#########################################################-->

Instruções para start do projeto:

instalar o NodeJS
[Node.js](https://nodejs.org/en/download/)

Baixar o projeto
[GitHub]()

npm install

# or

yarn install

npm run dev

# or

yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
