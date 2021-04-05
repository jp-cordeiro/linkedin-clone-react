import { useCallback, useState } from 'react';

export default function useForm() {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
  );

  return {
    value,
    onChange,
  };
}
