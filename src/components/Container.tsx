import { PropsWithChildren } from './shared'

interface Props extends PropsWithChildren {
  className?: string
}

const Container = ({ children, className = '', ...props }: Props) => {
  return (
    <div className={`max-w-10 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
