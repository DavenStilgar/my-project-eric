import React from 'react';
import RootLayout from '../components/RootLayout'; // Adjust the import path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <html lang="en">
        <body>
          <Component {...pageProps} />
        </body>
      </html>
    </RootLayout>
  );
}

export default MyApp;