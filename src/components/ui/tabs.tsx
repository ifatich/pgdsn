import { cn } from "../../lib/utils";
import { forwardRef, useState, Children, type ReactElement, isValidElement, cloneElement } from "react";

interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    activeTabIndex: number; // Indeks tab yang aktif
    setActiveTabIndex: (index: number) => void; // Fungsi untuk mengubah tab aktif
  }
  
  const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(
    ({ className, children, activeTabIndex, setActiveTabIndex, ...props }, ref) => {
      return (
        <div className={cn("tab-group", className)} {...props} ref={ref}>
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              // Memberikan tipe TabItemProps untuk child
              return cloneElement(child as ReactElement<TabItemProps>, {
                isActive: activeTabIndex === index, // Aktif jika indeksnya sama dengan activeTabIndex
                setActive: () => setActiveTabIndex(index), // Set tab aktif ke indeks saat ini
              });
            }
            return child; // Jika bukan elemen yang valid, kembalikan saja
          })}
        </div>
      );
    }
  );

  interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean; // Status aktif
    setActive?: () => void; // Fungsi untuk mengubah tab aktif
  }
  
  const TabItem = forwardRef<HTMLDivElement, TabItemProps>(
    ({ className, children, isActive, setActive, ...props }, ref) => {
      return (
        <div
          className={cn("tab-item", isActive ? "active" : "", className)}
          onClick={setActive}
          {...props}
          ref={ref}
        >
          {children}
        </div>
      );
    }
  );

export { TabItem, TabGroup };
