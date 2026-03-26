import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Icons } from '@/shared/assets/svg/components';
import { Buttons, InputDefaultField } from '@/shared/ui';
import { Modal } from '@/shared/ui/modal';

import toast from 'react-hot-toast';
import { useAddProduct } from '../model/use-add-product';

import { addProductSchema } from '../model';
import type { AddProductFormValues } from '../model/product.schema';
import { getClasses } from './styles/get-classes';

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
  const { addProduct } = useAddProduct();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      price: '',
      brand: '',
      category: '',
      sku: '',
    },
  });

  const { cnRoot, cnActions } = getClasses();

  const onSubmit = async (data: AddProductFormValues) => {
    try {
      await addProduct({
        id: Date.now(),
        rating: 5,
        ...data,
        price: Number(data.price),
        images: ['https://via.placeholder.com/150'],
      });

      toast.success('Добавлено успешно!', {
        position: 'top-center',
      });

      reset();
      onClose();
    } catch {
      toast.error('Ошибка при создании товара');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className={cnRoot}>
        <InputDefaultField
          name="title"
          control={control}
          label="Название"
          placeholder="Введите название"
        />

        <InputDefaultField
          name="price"
          control={control}
          label="Цена"
          type="number"
          placeholder="Введите цену"
        />

        <InputDefaultField
          name="category"
          control={control}
          label="Категория"
          placeholder="Введите категорию"
        />

        <InputDefaultField
          name="brand"
          control={control}
          label="Бренд"
          placeholder="Введите бренд"
        />

        <InputDefaultField
          name="sku"
          control={control}
          label="Артикул"
          placeholder="Введите артикул"
        />

        <div className={cnActions}>
          <Buttons.DefaultButton
            type="submit"
            disabled={!isValid || isSubmitting} // 👈 как надо
            isLoading={isSubmitting}
            leftIcon={<Icons.PlusCircle width={20} height={20} />}
          >
            Сохранить
          </Buttons.DefaultButton>

          <Buttons.DefaultButton type="button" onClick={onClose}>
            Закрыть
          </Buttons.DefaultButton>
        </div>
      </form>
    </Modal>
  );
};
