import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
      return (
        <>
            <div className={css.container}>
                <div className={css.card}>
                    <img className={css.icon}
                        src={image}
                        alt="User avatar"
                    />
                    <p className={css.nameText}>{name}</p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </div>

                <ul className={css.list}>
                    <li className={css.item}>
                        <span>Followers</span>
                        <span>{followers}</span>
                    </li>
                    <li className={css.item}>
                        <span>Views</span>
                        <span>{views}</span>
                    </li>
                    <li className={css.item}>
                        <span>Likes</span>
                        <span>{likes}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}