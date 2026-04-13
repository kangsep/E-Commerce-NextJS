type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-6">
      {subtitle && (
        <p className="text-red-500 text-sm font-semibold">{subtitle}</p>
      )}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}