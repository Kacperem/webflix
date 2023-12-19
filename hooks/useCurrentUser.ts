import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

    return {
        currentUser: data,
        isLoading,
        error,
        mutate,
    };
};

export default useCurrentUser;