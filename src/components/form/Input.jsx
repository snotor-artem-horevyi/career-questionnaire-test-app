export default function Input({ type, label, name, value, checked, onChange }) {
  return (
    <label className="mx-3">
      <input
        type={type}
        name={name}
        value={value}
        className="mr-3"
        checked={checked ?? false}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
