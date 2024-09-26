export default function Button({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}
