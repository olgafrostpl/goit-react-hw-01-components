import { Container, Wrapper, Image, List, ListItems, Span } from './Profile.styled';

export function Profile({user: {username,tag,location,avatar, stats: {followers,views,likes}}}) {
    return (
        <Container>
            <Wrapper>
                <Image
                    src={avatar}
                    alt={username}
                />
                <p><b>{username}</b></p>
                <p>{tag}</p>
                <p>{location}</p>
            </Wrapper>
            <List>
                <ListItems>
                    <span>Followers</span>
                    <Span>{followers}</Span>
                </ListItems>
                <ListItems>
                    <span>Views</span>
                    <Span>{views}</Span>
                </ListItems>
                <ListItems>
                    <span>Likes</span>
                    <Span>{likes}</Span>
                </ListItems>
            </List>
        </Container>   
    );
}