import { css } from "../../utils/helpers";
export default function Input({ type, label, name, value, checked, onChange }) {
  return (
    <div className="">
      {/* <label className="inline-block w-full border rounded p-2 px-3 cursor-pointer hover:-ml-2 hover:shadow-lg"> */}
      <label
        className={css(
          "relative flex items-center gap-2 w-full",
          "border rounded p-2 px-3 cursor-pointer",
          "hover:-ml-2 hover:shadow-lg transform duration-300",
          checked && "bg-lime-500 text-white border-lime-400",
        )}
      >
        <input
          type={type}
          name={name}
          value={value}
          className="mr-2 peer shrink-0 appearance-none w-4 h-4 border border-blue-400 rounded-sm mt-1 checked:border-0"
          checked={checked ?? false}
          onChange={onChange}
        />

        <svg
          className="absolute w-6 h-6 left-2 top-1/2 -translate-y-1/2 text-white hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="">{label}</span>
      </label>
    </div>
  );
}
