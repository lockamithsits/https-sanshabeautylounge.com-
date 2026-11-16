import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.path ? (
              <Link href={item.path} className="flex min-h-11 items-center px-2 underline hover:text-white">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-white">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
