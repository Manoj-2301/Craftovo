'use client';
export default function ErrorPage({ error, reset }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 p-8">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
      <p className="text-text-muted bg-black/5 p-4 rounded-xl font-mono text-sm max-w-2xl overflow-auto">{error?.message || "Unknown error"}</p>
      <button onClick={() => reset()} className="px-6 py-2 bg-black text-white rounded-full">Try again</button>
    </div>
  );
}
