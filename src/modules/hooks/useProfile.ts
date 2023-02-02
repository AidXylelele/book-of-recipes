import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { userService } from '../services/user.service';

export const useProfile = () => {
  const { isLoading, data: value } = useQuery(
    QUERY_KEYS.PROFILE,
    () => userService.getUserByToken(),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { isLoading, value };
};
