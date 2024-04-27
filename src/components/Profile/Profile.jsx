export default function Profile ({name, tag, location, image, stats: {followers, views, likes}}) {
      return (
        <>
            <div>
                <div>
                    <img
                        src={image}
                        alt="User avatar"
                    />
                    <p><b>{name}</b></p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </div>

                <ul>
                    <li>
                        <span>Followers</span>
                        <span><b>{followers}</b></span>
                    </li>
                    <li>
                        <span>Views</span>
                        <span><b>{views}</b></span>
                    </li>
                    <li>
                        <span>Likes</span>
                        <span><b>{likes}</b></span>
                    </li>
                </ul>
            </div>
        </>
    );
}