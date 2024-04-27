import clsx from "clsx";
import css from './FriendListItem.module.css'

export default function FriendListItem({
  friend: { avatar, name, isOnline },
}) {
  const accentClass = clsx(
    isOnline === true ? css.online : css.offline
  );
  return (
<div className={css.container}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={accentClass}>{isOnline === true ? "Online" : "Offline"}</p>
</div>
  );
}
