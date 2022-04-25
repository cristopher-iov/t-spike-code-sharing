import { Dispatch, SetStateAction, useState } from 'react';

export default function useTToggle(
  initialState: boolean = false,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [active, setActive] = useState(initialState);

  const toggle = () => setActive((prev) => !prev);

  return [active, toggle, setActive];
}
