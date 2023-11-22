import { loginFormErrors } from '@/constants/formErrors';
import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(loginFormErrors.email).trim().toLowerCase(),
  password: z
    .string()
    .trim()
    .min(3, { message: loginFormErrors.min })
    .max(10, { message: loginFormErrors.max }),
  userName: z.string().min(1, { message: loginFormErrors.notEmpty }),
});
