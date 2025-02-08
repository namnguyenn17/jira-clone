import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useUser = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await client.api.auth.user.$get();

      if (!response.ok) {
        return null;
      }

      const { data } = await response.json();

      return data;
    }
  });

  return query;
};
