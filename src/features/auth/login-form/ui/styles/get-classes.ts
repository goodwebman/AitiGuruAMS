import classNames from 'classnames/bind'
import classes from './login-form.module.scss'

const cn = classNames.bind(classes)

type Args = {
  className?: string
}

export const getClasses = ({ className }: Args) => {
  return {
    cnWrapper: cn('wrapper'),
    cnCard: cn('card', className),
    cnLogo: cn('logo'),
    cnTitle: cn('title'),
    cnSubtitle: cn('subtitle'),
    cnForm: cn('form'),
    cnRow: cn('row'),

    cnDivider: cn('divider'),
    cnFooter: cn('footer'),
    cnLink: cn('link'),
  }
}