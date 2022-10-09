import * as RadixTabs from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

type TabsProps = {
  trigger: ReactNode;
  children: ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (str: string) => void;
}
export const Tabs = ({ trigger, children, defaultValue, value, onValueChange }: TabsProps) => {
  return (
    <RadixTabs.Root value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
      <RadixTabs.List className="flex gap-8 mb-9">
        {trigger}
      </RadixTabs.List>
      {children}
    </RadixTabs.Root>
  )
}

export const BlueTabs = ({ trigger, children, defaultValue }: TabsProps) => {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>
      <RadixTabs.List className="w-full flex bg-[#F8F8F8] rounded-lg p-1.5">
        {trigger}
      </RadixTabs.List>
      {children}
    </RadixTabs.Root>
  )
}
