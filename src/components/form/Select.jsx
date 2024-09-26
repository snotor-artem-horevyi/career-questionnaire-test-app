export default function Select({ label, name, options, selected, onChange }) {
  return (
    <label className="">
      {label}
      <select
        name={name}
        selected={selected}
        className="bg-transparent border-2 border-gray-300 rounded-md pl-3 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.keys(options).map((key, index) => (
          <option value={key} key={index}>
            {options[key]}
          </option>
        ))}
      </select>
    </label>
  );
}
