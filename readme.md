1. init npm project
   - install react
     -- react (llibreria JS de components)
     -- react dom (react s'aplica a moltes plataformes. aquí es conecta amb el DOM)
   - install --save-dev webpack
     -- webapck (empaqueta tot en estàtics)
     -- webpack-dev-server ()
     -- webpack cli (permet cli commands per config files i afegir build scripts)
   - install --save-dev babel
     -- @babel/core (transpiler core)
     -- babel-loader
     -- @babel/preset-env
     -- @babel/preset-react
   - install --save-dev html
     -- html-webpack-plugin
     -- html-loader
2. babel & webpack configs
   - .babelrc
   - webpack dev-env
   - webpack prod-em
   - Eslint + config
3. initial file structure
   - src/
     --js/
     ---index.js
   - index.html
4. package.json scripts
5. git ignore
   - basic, cobreix la majoria de casos, no necessitem que sigui exclusiu nostre. nomes efecta dev-env.
   - font: https://github.com/facebook/create-react-app/blob/master/.gitignore
6. files structure
   - src/
     -- index.html
     -- index.js
7. components & styles
   - install styled components (proporciona css cross browser i no contamina scope)
   - add 2 components
   - add global styles
8. router
   - add pages
   - install react-router-dom
9. state
   - add props
   - install redux
   - install immutable
   - install thunks
   - add API
   - configure stores
   - set actions
   - set reducers
   - configure combine reducers
10. test
    - install Jest
    - add test for App
      -- components
      -- reducers
      -- actions
      -- api
