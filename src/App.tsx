import { router } from '../src/router/main.routes';
import { ContextProviders } from '../src/shared/context/main.context';
import { useEffect } from 'react';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

function App() {
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <ContextProviders>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </ContextProviders>
    </>
  );
}

export default App;
