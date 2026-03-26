import { z } from 'zod';

export const addProductSchema = z.object({
  title: z.string().min(1, 'Введите название'),
  price: z
    .string()
    .min(1, 'Введите цену')
    .refine(val => !isNaN(Number(val)), 'Цена должна быть числом'),

  brand: z.string().min(1, 'Введите бренд'),

  category: z.string().min(1, 'Введите категорию'),

  sku: z.string().min(1, 'Введите артикул'),
});

export type AddProductFormValues = z.infer<typeof addProductSchema>;