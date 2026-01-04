import { FC } from 'react'

interface AvatarProps {
  photoUrl: string;
  name: string;
  description?: string;
  variant?: 'small' | 'medium' | 'large' | 'x-large';
}

const variantToClassName = (variant: AvatarProps['variant']) => {
  switch (variant) {
    case 'small':
      return 'avatar__photo--sm';
    case "large":
      return 'avatar__photo--lg';
    case 'x-large':
      return 'avatar__photo--xl';
    case 'medium':
    default:
      return '';

  }
}

export const Avatar: FC<AvatarProps> = ({  name, photoUrl, description, variant }) => (
  <div className="avatar">
    <img
      className={`avatar__photo ${variantToClassName(variant)}`}
      src={photoUrl}
      alt={`${name} - ${description ?? ""}`}
    />
    <div className="avatar__intro">
      <div className="avatar__name">{name}</div>
      { description ? <small className="avatar__subtitle">{ description }</small> : null}
    </div>
  </div>
)