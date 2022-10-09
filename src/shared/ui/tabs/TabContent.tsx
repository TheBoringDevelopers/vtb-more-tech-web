import { ReactNode } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

type ContentType = {
  value: string;
  children: ReactNode;
}

export const TabContent = ({ value, children }: ContentType) => <RadixTabs.Content value={value}>{children}</RadixTabs.Content>
