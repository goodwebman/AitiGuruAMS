import { Checkbox } from '@/shared/ui/checkbox';
import { useState } from 'react';

export const ProductsPage = () => {
  const [st, setSt] = useState(false);
  return (
    <div style={{'padding': '20px'}}>
      <Checkbox.Container>
        <Checkbox.Button label='Запомнить данные' checked={st} onChange={() => setSt(!st)} />
      </Checkbox.Container>
    </div>
  );
};
