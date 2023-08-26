import { useMutation, useQueryClient } from '@tanstack/react-query';
import { service } from '../../../../shared/service/service';
import { getUserWalletQueryKey } from '../../queries/user/getUserWalletQuery';
import { IDepositRequest } from '../../../../shared/service/user/interface';

export const useWalletDepositMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((value: IDepositRequest) => service.user.walletDeposit(value), {
    onSuccess: () => queryClient.invalidateQueries(getUserWalletQueryKey())
  });
};
