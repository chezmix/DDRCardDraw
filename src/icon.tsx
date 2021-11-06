import classNames from "classnames";
import styles from "./icon.css";

interface Props {
  svg: JSX.Element;
  title: string;
  onClick?: () => void;
  className?: string;
}

export function Icon({ svg, title, onClick, className }: Props) {
  return (
    <figure
      title={title}
      className={classNames(styles.icon, className, {
        [styles.clickable]: !!onClick,
      })}
      onClick={onClick}
    >
      {svg}
    </figure>
  );
}
