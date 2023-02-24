'use client';

//  external imports
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

//  internal imports
import '../styles/globals.css';
import { store } from '@/utils/redux/store';

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
