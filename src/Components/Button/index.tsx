import { ButtonLink } from './styles'

type Props = {
  children: string
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, onClick, title, to }: Props) => (
  <ButtonLink title={title}>{children}</ButtonLink>
)

export default Button
