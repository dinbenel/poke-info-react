import { loginFormErrors } from '@/constants/formErrors';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(loginFormErrors.email).trim().toLowerCase(),
  password: z
    .string()
    .trim()
    .min(3, { message: loginFormErrors.min })
    .max(10, { message: loginFormErrors.max }),
});
