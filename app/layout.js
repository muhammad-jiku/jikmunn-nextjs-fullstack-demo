'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

// create a client
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
