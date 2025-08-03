import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useUserRole = () => {
  const { user } = useAuth(); 
  const axiosSecure = useAxiosSecure();

  const { data: userData, isLoading, error } = useQuery({
    queryKey: ['userRole', user?.email],
    enabled: !!user?.email, // prevent fetch if there is no email
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  const role = userData?.role || null;

  return { role, isLoading, error };
};

export default useUserRole;