

import classNames from 'classnames/bind'
import classes from './table.module.scss'

const cn = classNames.bind(classes)

type Args = {
  className?: string
  isHeader?: boolean
  sortable?: boolean
  sorted?: boolean
  danger?: boolean
}

export const getClasses = ({
  className,
  isHeader,
  sortable,
  sorted,
  danger,
}: Args) => {
  const cnTable = cn('table', className)
  const cnHead = cn('head')
  const cnRow = cn('row', className)

  const cnCell = cn(
    'cell',
    isHeader && 'header',
    sortable && 'sortable',
    sorted && 'sorted',
    danger && 'danger'
  )

  return {
    cnTable,
    cnHead,
    cnRow,
    cnCell,
  }
}