import { DemoShell } from "@/components/DemoShell";

export default function HomePage() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Mapbox Address Input</h1>
        <p className="text-gray-500 text-sm">
          Add to your project:{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-mono text-xs">
            npx mapbox-address-input
          </code>
        </p>
      </div>

      {token ? (
        <DemoShell accessToken={token} />
      ) : (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 text-sm">
          Missing{" "}
          <code className="font-mono">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
          environment variable.
        </div>
      )}
    </main>
  );
}
