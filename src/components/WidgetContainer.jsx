export default function WidgetContainer({ title, children }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-3 bg-[#1a1a1a] shadow-lg">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
