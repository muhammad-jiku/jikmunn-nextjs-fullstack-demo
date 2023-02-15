'use client';

import { store } from '@/utils/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import '../styles/globals.css';

// create a client
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Provider store={store}>
          <body>{children}</body>
        </Provider>
      </QueryClientProvider>
    </html>
  );
}
