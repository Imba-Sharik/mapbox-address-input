# mapbox-address-input

React component for address search via Mapbox SearchBox with map preview.

> [README на русском](./README.ru.md)

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://mapbox-address-input.vercel.app/)

![preview](./src/public/screen.png)

## Install

Copies `features/address-input/` directly into your project — like shadcn:

```bash
npx mapbox-address-input
```

Or manually — copy the `src/features/address-input/` folder into your project.

### Dependencies

```bash
npm install @mapbox/search-js-react @mapbox/search-js-core mapbox-gl
npm install -D @types/mapbox-gl
```

### CSS

Add to `globals.css`:

```css
@import "mapbox-gl/dist/mapbox-gl.css";
```

### Environment variable

```env
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token_here
```

---

## Usage

### AddressInput

Search field with built-in map preview.

```tsx
"use client";

import { useState } from "react";
import { AddressInput, type AddressValue } from "@/features/address-input";

export function MyForm() {
  const [address, setAddress] = useState<AddressValue | undefined>();

  return (
    <AddressInput
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
      value={address}
      onChange={setAddress}
      onClear={() => setAddress(undefined)}
      placeholder="Enter an address"
      mapClassName="h-48 w-full rounded-xl overflow-hidden"
    />
  );
}
```

### AddressMap

Standalone map without the input — controlled externally.

```tsx
import { AddressMap } from "@/features/address-input";

<AddressMap
  accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
  lat={address?.lat}
  lng={address?.lng}
  showMarker={address?.feature_type === "address"}
  featureType={address?.feature_type}
  className="h-64 w-full rounded-xl overflow-hidden"
/>
```

---

## API

### AddressInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accessToken` | `string` | — | Mapbox public token |
| `value` | `AddressValue` | `undefined` | Current value |
| `onChange` | `(v: AddressValue) => void` | — | Called when address is selected |
| `onClear` | `() => void` | — | Called when field is cleared |
| `placeholder` | `string` | — | Input placeholder |
| `types` | `string` | `"address,place,locality,district"` | Mapbox result types |
| `language` | `string` | from `navigator.language` | Results language |
| `mapStyle` | `string` | `streets-v12` | Map style |
| `className` | `string` | — | Outer container class |
| `mapClassName` | `string` | `"h-48 w-full rounded-lg overflow-hidden"` | Map container class |

### AddressMap

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accessToken` | `string` | — | Mapbox public token |
| `lat` | `number` | — | Latitude |
| `lng` | `number` | — | Longitude |
| `showMarker` | `boolean` | `false` | Show marker |
| `featureType` | `string` | — | Feature type (affects zoom level) |
| `language` | `string` | — | Map label language |
| `mapStyle` | `string` | `streets-v12` | Map style |
| `defaultCenter` | `[number, number]` | `[37.618, 55.752]` | Default map center |
| `defaultZoom` | `number` | `10` | Default zoom |
| `className` | `string` | — | Container class |

### AddressValue

```ts
interface AddressValue {
  provider: "mapbox";
  feature_type: string;   // "address" | "place" | "locality" | "district" | "region" | "country"
  place_id: string;       // address ID
  city_place_id: string;  // city ID
  lat: number;
  lng: number;
  name: string;           // "Lenin Ave, 1" or "Yakutsk"
  city_name: string;      // "Yakutsk"
  country_code: string;   // "RU"
}
```
