export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="font-arimo p-8 text-center text-gray-500">
      <div className="font-arimo animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-2"></div>
      <span className="font-arimo">{text}</span>
    </div>
  );
}
