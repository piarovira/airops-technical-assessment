import { Provider } from "react-redux";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "common/navigation/Router";
import { system } from "common/definitions/chakra/config";
import {
  queryClient,
  localStoragePersister,
} from "common/definitions/react-query/config";
import { store } from "common/definitions/redux/store";

function App() {
  return (
    <ChakraProvider value={system}>
      <Provider store={store}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{
            persister: localStoragePersister,
            maxAge: 1000 * 60 * 60 * 24,
          }}
        >
          <Router />
        </PersistQueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
