# CouterApp

Contador en React 17 y sus pruebas con Enzyme.

El componente dispone de eventos, propTypes y el hook useState como estado de contador.

5 pruebas distintas sobre el componente en **CounterApp.test.js** para que la aplicación se comporte
como se espera, usando la famosa librería de pruebas **Enzyme** que facilita las pruebas en los componentes de React.

El objetivo es trabajar con Enzyme con todas las pruebas posibles a una aplicación sencilla, como probar snapshots, simular eventos y revisar resultados.

`npm start` para ejecutar la app en modo de desarrollo (http://localhost:3000)
`npm test` para ejecutar las pruebas escritas en el proyecto

También usa enzyme-to-json como librería de desarrollo para compatibilizar los wrappers de Enzyme con los 
snapshots de Jest.