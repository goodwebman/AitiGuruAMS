import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, 'Минимум 3 символа'),

  password: z.string().min(6, 'Минимум 6 символов'),

  remember: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
