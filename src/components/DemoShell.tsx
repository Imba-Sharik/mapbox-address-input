"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { AddressValue } from "@/features/address-input";

const AddressInput = dynamic(
  () => import("@/features/address-input").then((m) => m.AddressInput),
  { ssr: false }
);

export function DemoShell({ accessToken }: { accessToken: string }) {
  const [value, setValue] = useState<AddressValue | undefined>();

  return (
    <div className="space-y-4">
      <AddressInput
        accessToken={accessToken}
        value={value}
        onChange={setValue}
        onClear={() => setValue(undefined)}
        placeholder="Search for an address…"
        mapClassName="h-[480px] w-full rounded-xl overflow-hidden shadow-md"
      />

      {value && (
        <div className="rounded-lg bg-white border border-gray-200 p-4 text-sm space-y-2">
          <p className="font-medium text-gray-900">AddressValue</p>
          <pre className="text-xs text-gray-600 overflow-auto whitespace-pre-wrap">
            {JSON.stringify(value, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
