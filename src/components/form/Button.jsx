import { css } from "../../utils/helpers";

export default function Button({ label, secondary, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css(
        "mt-4 ",
        "font-bold py-2 px-4 rounded",
        secondary
          ? "border border-blue-500 text-blue-500 hover:text-blue-500"
          : "w-full bg-blue-500 text-white hover:bg-blue-700"
      )}
    >
      {label}
    </button>
  );
}
