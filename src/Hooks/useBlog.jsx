import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useBlog = () => {
    const { data: posts, isLoading, error, refetch } = useQuery({
        queryKey: ['forumPosts'], 
        queryFn: async () => {
            const res = await axiosSecure.get("/blogs"); 
            return res.data;
        }
    });

    return { posts, isLoading, error, refetch };
};

export default useBlog;