import { ButtonLink } from './styles'

export type Props = {
  children: string
  title: string
  to?: string
  onClick?: () => void
  buttonStyle?: 'primary' | 'secundary'
}

const Button = ({ children, onClick, title, to, buttonStyle }: Props) => (
  <ButtonLink buttonStyle={buttonStyle} title={title}>
    {children}
  </ButtonLink>
)

export default Button
