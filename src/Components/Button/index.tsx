import { ButtonLink } from './styles'

export type Props = {
  children: string
  title: string
  to?: string
  onClick?: () => void
  custom?: 'primary' | 'secundary'
}

const Button = ({ children, onClick, title, to, custom }: Props) => (
  <ButtonLink custom={custom} title={title}>
    {children}
  </ButtonLink>
)

export default Button
