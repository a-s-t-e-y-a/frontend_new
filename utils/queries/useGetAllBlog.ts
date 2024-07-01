import api from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllBlogs = () => {
  const allBlogs = useQuery({
    queryKey: ["api/blogs"],
    queryFn: async () => {
      const res = await api.get("/blog/get");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetAllBlogs;
