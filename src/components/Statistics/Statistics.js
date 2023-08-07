import { Wrapper, TitleList, List, ListItems } from './Statistics.styled';

export function Statistics({data, title=null}) {
    return (
        <Wrapper>
            <TitleList>{title}</TitleList>
            <List>
                {data.map(({ id, label, percentage }) =>
                    
                        <ListItems key={id} style={{ backgroundColor: setBg() }}>
                            <span>{label}</span>
                            <span><b>{percentage}%</b></span>
                        </ListItems>
                    )}
            </List>
        </Wrapper>
    );
}

const setBg = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
};
