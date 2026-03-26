import { useState } from 'react';

export const useSelection = <T extends number | string>(items: T[]) => {
  const [selected, setSelected] = useState<Set<T>>(new Set());

  const isSelected = (id: T) => selected.has(id);

  const toggle = (id: T) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    setSelected(new Set(items));
  };

  const clear = () => {
    setSelected(new Set());
  };

  const toggleAll = () => {
    if (selected.size === items.length) {
      clear();
    } else {
      selectAll();
    }
  };

  const allSelected = items.length > 0 && selected.size === items.length;

  return {
    selected,
    isSelected,
    toggle,
    toggleAll,
    allSelected,
  };
};
