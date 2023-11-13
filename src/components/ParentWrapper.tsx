'use client';
import React, { useState } from 'react';

import { MyGlobalContext } from '@/utils/context';

export default function ParentProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<string | undefined>();
  return (
    <MyGlobalContext.Provider value={{ filter, setFilter }}>
      {children}
    </MyGlobalContext.Provider>
  );
}
