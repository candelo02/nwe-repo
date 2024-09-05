const http = require('http');
const port = 3000;

// Función para generar texto aleatorio
const generarTextoAleatorio = () => {
  const textos = [
    'Bienvenido a nuestra página!',
  ];
  const index = Math.floor(Math.random() * textos.length);
  return textos[index];
};

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  const { url } = req;

  // Página principal
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, Mundo! Este servidor está funcionando correctamente.\n');

  // Página para generar texto aleatorio
  } else if (url === '/aleatorio') {
    const textoAleatorio = generarTextoAleatorio();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Texto aleatorio: ${textoAleatorio}\n`);

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
