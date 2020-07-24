function useToggle(initValue) {
    const [value, setValue] = useState(initValue);
    const onToggle = () => setValue(initValue);
    useDebugValue(value ? 'on' : 'off');
    return [value, onToggle]
}