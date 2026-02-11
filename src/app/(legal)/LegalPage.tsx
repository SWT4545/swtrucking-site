import React from "react";

type Props = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-400">
          Last updated: {updatedAt}
        </p>
      </header>

      <article className="space-y-6 text-gray-300 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-white">
        {children}
      </article>

      <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-400">
        <p>
          Smith &amp; Williams Trucking &bull; Phone: 951-437-5474 &bull; Email: dispatch@smithwilliamstrucking.com
        </p>
      </footer>
    </main>
  );
}
