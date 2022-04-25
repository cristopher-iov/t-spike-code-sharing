# use-t-toggle

## 🧰 Installation

### Using npm

```bash
# Using npm
npm i use-t-toggle
```

## 📘 Use Hook

```tsx
import useTToggle from 'use-t-toggle';

function App() {
  const [active, toggle, setActive] = useTToggle();

  return (
    <div>
      <p>{`The state is ${active ? 'Active' : 'Inactive'}`}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setActive(true)}>Active</button>
      <button onClick={() => setActive(false)}>Inactive</button>
    </div>
  );
}
```

### Parameters

1. `initialValue` (_boolean_) : Initial value of the state.

### Return value

`[state, toggle, setState]`

1. `state` (_boolean_) : The booelan state.
2. `toggle` (_function_) : Function to toggle the state value.
3. `setState` (_function_) : Function to mutate the state value.
