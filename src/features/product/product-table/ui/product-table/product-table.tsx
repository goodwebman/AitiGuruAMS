import type { ProductDto } from '@/entities/product/model';
import { ProductImage } from '@/entities/product/ui/product-image/product-image';
import { formatPrice } from '@/shared/lib/formaters';
import { Buttons, Checkbox } from '@/shared/ui';
import { Table } from '@/shared/ui/table';
import { getClasses } from './styles/get-classes';
import { Icons } from '@/shared/assets/svg/components'

type ProductTableProps = {
  products: ProductDto[];
  isSelected: (id: number) => boolean;
  toggle: (id: number) => void;
  toggleAll: () => void;
  allSelected: boolean;

  sortBy?: string;
  order?: 'asc' | 'desc';
  onSort: (field: 'price' | 'rating') => void;
};

export const ProductTable = ({
  products,
  isSelected,
  toggle,
  toggleAll,
  allSelected,
  sortBy,
  order,
  onSort,
}: ProductTableProps) => {
  const {
    cnRoot,
    cnTableWrapper,
    cnHeaderCell,
    cnRowContentWrapper,
    cnProduct,
    cnProductInfo,
    cnTitle,
    cnCategory,
    cnVendor,
    cnArticle,
    cnRatingWrapper,
    cnRating,
    cnRatingDefault,
    cnPrice,
    cnPriceMain,
    cnPriceDecimals,
    cnAscWrapper,
    cnFakeButton,
    cnFakeActions
  } = getClasses({});

  return (
    <div className={cnRoot}>
      <div className={cnTableWrapper}>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.Cell isHeader>
                <div className={cnHeaderCell}>
                  <Checkbox.Container>
                    <Checkbox.Button
                      checked={allSelected}
                      onChange={toggleAll}
                    />
                  </Checkbox.Container>
                  <span>Наименование</span>
                </div>
              </Table.Cell>
              <Table.Cell isHeader>Вендор</Table.Cell>
              <Table.Cell isHeader>Артикул</Table.Cell>
              <Table.Cell
                isHeader
                sortable
                sorted={sortBy === 'rating'}
                onClick={() => onSort('rating')}
              >
                <div className={cnAscWrapper}>
                  <p>Оценка</p>
                  <p>
                    {sortBy === 'rating' ? (order === 'asc' ? '↑' : '↓') : ''}
                  </p>
                </div>
              </Table.Cell>

              <Table.Cell
                isHeader
                sortable
                sorted={sortBy === 'price'}
                onClick={() => onSort('price')}
              >
                <div className={cnAscWrapper}>
                  <p>Цена, ₽</p>
                  <p>
                    {sortBy === 'price' ? (order === 'asc' ? '↑' : '↓') : ''}
                  </p>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {products.map(p => {
              const { rub, kop } = formatPrice(p.price);
              return (
                <Table.Row key={p.id}>
                  <Table.Cell>
                    <div className={cnRowContentWrapper(isSelected(p.id))}>
                      <Checkbox.Container>
                        <Checkbox.Button
                          checked={isSelected(p.id)}
                          onChange={() => toggle(p.id)}
                        />
                      </Checkbox.Container>

                      <div className={cnProduct}>
                        <ProductImage src={p.images[0]} alt={p.title} />
                        <div className={cnProductInfo}>
                          <span className={cnTitle}>{p.title}</span>
                          <span className={cnCategory}>{p.category}</span>
                        </div>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <p className={cnVendor}>{p.brand}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className={cnArticle}>{p.sku}</p>
                  </Table.Cell>

                  <Table.Cell>
                    <div className={cnRatingWrapper}>
                      <span className={cnRating({ danger: p.rating < 3.5 })}>
                        {p.rating}
                      </span>
                      <span className={cnRatingDefault}>/5</span>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <div className={cnPrice}>
                      <span className={cnPriceMain}>{rub}</span>
                      <span className={cnPriceDecimals}>,{kop}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                  
                    <div className={cnFakeActions}>
                      
                      <Buttons.IconButton
                        className={cnFakeButton}
                        icon={<Icons.Plus width={20} height={20} />}
                      />
                      <Icons.DotsThreeCircle width={26} height={26} />{' '}
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};
