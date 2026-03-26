import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { useLogin } from '@/entities/session'
import { Checkbox, InputDefaultField } from '@/shared/ui'
import { Buttons } from '@/shared/ui/buttons'

import { Icons } from '@/shared/assets/svg/components'
import { ROUTES } from '@/shared/config/routes/routes'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { loginSchema, type LoginFormValues } from '../model/validation'
import { getClasses } from './styles/get-classes'

export const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control, handleSubmit  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass',
      remember: false,
    },
  });

  const {
    cnWrapper,
    cnCard,
    cnLogo,
    cnTitle,
    cnSubtitle,
    cnForm,
    cnRow,
    cnDivider,
    cnFooter,
    cnLink,
  } = getClasses({});

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
      toast.success('Вы успешно вошли!', {
        position: 'top-center',
      });
      navigate(ROUTES.PRODUCTS);
    } catch(e) {
      toast.error(`${e}`, {
        position: 'top-center',
      });
      console.error(e);
    }
  };

  return (
    <div className={cnWrapper}>
      <div className={cnCard}>
        <div className={cnLogo}>
          <Icons.Logotype  width={82} height={82} />
        </div>

        <h1 className={cnTitle}>Добро пожаловать!</h1>
        <p className={cnSubtitle}>Пожалуйста, авторизуйтесь</p>

        <form onSubmit={handleSubmit(onSubmit)} className={cnForm}>
          <InputDefaultField
            name="username"
            control={control}
            label="Логин"
            placeholder="Введите логин"
            contentLeft={<Icons.User width={20} height={20} />}
            isClearable
           
          />

          <InputDefaultField
            name="password"
            control={control}
            label="Пароль"
            type={showPassword ? 'text' : 'password'}
            placeholder="Введите пароль"
            contentLeft={<Icons.Lock width={20} height={20} />}
            contentRight={
              <span onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? (
                  <Icons.EyeOpen width={20} height={20} />
                ) : (
                  <Icons.EyeOff width={20} height={20} />
                )}
              </span>
            }
          />

          <div className={cnRow}>
            <Controller
              control={control}
              name="remember"
              render={({ field }) => (
                <Checkbox.Container>
                  <Checkbox.Button
                    checked={field.value}
                    onChange={() => field.onChange(!field.value)}
                    label="Запомнить данные"
                  />
                </Checkbox.Container>
              )}
            />
          </div>

          <Buttons.DefaultButton type="submit" fullWidth isLoading={isLoading}>
            Войти
          </Buttons.DefaultButton>
        </form>

        <div className={cnDivider}>
          <span>или</span>
        </div>

        <div className={cnFooter}>
          Нет аккаунта? <span className={cnLink}>Создать</span>
        </div>
      </div>
    </div>
  );
};