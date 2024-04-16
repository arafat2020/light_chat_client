import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from '../../server/src/trpc/trpc.router'

const isdev = true
const url = isdev?"http://localhost:5000/trpc":""

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url
    }),
  ],
});


