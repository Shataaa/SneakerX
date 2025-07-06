import { BsDatabaseExclamation } from "react-icons/bs";
export default function EmptyState({ text = "Belum ada data" }) {
  return (
    <div className="font-arimo p-8 text-center text-gray-500">
      <div className="font-arimo text-4xl mb-2">
        <BsDatabaseExclamation />
      </div>
      <p className="font-arimo">{text}</p>
    </div>
  );
}
