import cn from 'classnames';

function ErrorMessage({ error, visible, classNames }) {
  if (!visible || !error) return null;
  return <p className={cn('mt-2 text-sm text-red-600', classNames)}>{error}</p>

}

export default ErrorMessage;
