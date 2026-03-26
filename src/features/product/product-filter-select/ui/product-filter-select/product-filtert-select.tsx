import { useState } from 'react';

import { Buttons } from '@/shared/ui';
import { Icons } from '@/shared/assets/svg/components';
import { getClasses } from './styles/get-classess'

type SortField = 'price' | 'rating';
type SortOrder = 'asc' | 'desc';

type Props = {
  sortBy: SortField | '';
  order: SortOrder;
  onSortChange: (field: SortField) => void;
  onReset: () => void;
};

export const ProductFilterSelect = ({ sortBy, order, onSortChange, onReset }: Props) => {
  const { cnRoot, cnDropdown, cnOption } = getClasses();
  const [open, setOpen] = useState(false);

  const handleSelect = (field: SortField) => {
    onSortChange(field);
    setOpen(false);
  };

  const getArrow = (field: SortField) => {
    if (sortBy !== field) return '';
    return order === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={cnRoot}>
      <Buttons.IconButton
   
        onClick={() => setOpen(!open)}
        icon={<Icons.Filer color="var(--icon-primary)" />}
      />

      {open && (
        <div className={cnDropdown}>
          <div className={cnOption} onClick={() => handleSelect('price')}>
            Цена {getArrow('price')}
          </div>
          <div className={cnOption} onClick={() => handleSelect('rating')}>
            Оценка {getArrow('rating')}
          </div>
          <div className={cnOption} onClick={onReset}>
            Сбросить фильтры
          </div>
        </div>
      )}
    </div>
  );
};