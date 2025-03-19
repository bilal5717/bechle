// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function MyApp({ Component, pageProps }) {
  // Wrap the Component with any global providers or layouts here
  return <Component {...pageProps} />;
}

export default MyApp;