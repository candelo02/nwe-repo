const http = require('http');
const port = 3000;

// Función para generar texto aleatorio
const generarTextoAleatorio = () => {
  const textos = [
    'Bienvenido a nuestra página!',
    'Hoy es un gran día para aprender Node.js.',
    'Node.js es extremadamente flexible!',
    '¡Sigue explorando el mundo de la programación!',
    'El desarrollo web es divertido!',
  ];
  const index = Math.floor(Math.random() * textos.length);
  return textos[index];
};

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  const { url } = req;

  // Página principal, mostrar todas las salidas
  if (url === '/') {
    const textoAleatorio = generarTextoAleatorio();
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <title>Servidor Node.js</title>
        </head>
        <body>
          <h1>Hola, Mundo! Este servidor está funcionando correctamente.</h1>
          <h2>Texto aleatorio generado: ${textoAleatorio}</h2>
          <h2>Redirecciones:</h2>
          <ul>
            <li><a href="/google">Ir a Google</a></li>
            <li><a href="/facebook">Ir a Facebook</a></li>
            <li><a href="/itp">Ir al ITP (Instituto Tecnológico del Putumayo)</a></li>
          </ul>
        </body>
      </html>
    `);

  // Redireccionamiento a Google
  } else if (url === '/google') {
    res.statusCode = 302;
    res.setHeader('Location', 'https://www.google.com');
    res.end();

  // Redireccionamiento a Facebook
  } else if (url === '/facebook') {
    res.statusCode = 302;
    res.setHeader('Location', 'https://www.facebook.com');
    res.end();

  // Redireccionamiento a Instituto Tecnológico del Putumayo
  } else if (url === '/itp') {
    res.statusCode = 302;
    res.setHeader('Location', 'https://itp.edu.co/ITP2022/');
    res.end();

  // Página para manejar URLs desconocidas
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Página no encontrada.\n');
  }
});

// Escuchar en el puerto 3000
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
