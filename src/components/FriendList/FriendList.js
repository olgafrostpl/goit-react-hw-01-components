import { List, ListItem, Circle, Text } from './FriendList.styled';

export function FriendList({friends}) {
    return (
        <List>
            {friends.map(({avatar,id, name, isOnline}) =>
            <ListItem key={id}>
                <Circle>{isOnline}</Circle>
                    <img src={avatar} alt={name} width="48" />
                <Text>{name}</Text>
            </ListItem>)}
        </List>
    );
}