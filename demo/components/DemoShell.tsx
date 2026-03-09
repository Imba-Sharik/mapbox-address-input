"use client";

import { useState } from "react";
import { AddressInput } from "@lib";
import type { AddressValue } from "@lib";

export function DemoShell({ accessToken }: { accessToken: string }) {
  const [value, setValue] = useState<AddressValue | undefined>();

  return (
    <div className="space-y-6">
      <AddressInput
        accessToken={accessToken}
        value={value}
        onChange={setValue}
        onClear={() => setValue(undefined)}
        placeholder="Search for an address…"
        className="space-y-3"
        mapClassName="h-72 w-full rounded-xl overflow-hidden shadow-md"
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
