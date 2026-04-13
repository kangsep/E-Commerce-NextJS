export default function CategorySidebar() {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="w-64 border-r pr-4">
      <ul className="space-y-4 text-sm">
        {categories.map((cat, i) => (
          <li key={i} className="flex justify-between cursor-pointer hover:text-red-500">
            {cat}
            <span>{">"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}