import { Button } from 'native-base';

import { clearStorage } from '../libs/localStorage';

export const DevButton = () => {
  const clearAndRefresh = async () => {
    await clearStorage();
    window.location.reload();
  };
  return (
    <Button onPress={clearAndRefresh}>Dev button - Clear storage and refresh Application</Button>
  );
};
