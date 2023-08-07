import { Wrapper, TitleText, Row, Value } from './TransactionHistory.styled';

export function TransactionHistory({transactions}) {
    return (
        <Wrapper>
            <thead>
                <tr>
                    {Object.keys(transactions[0]).map(obj => {
                 
                        if (obj === "id") {
                            return null;
                        }
                        return <TitleText key={obj}>{obj}</TitleText>
                    })}
                </tr>    
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency}, index) => (
                <Row key={id} className ={(index % 2 === 0) ? true : false }>
                    <Value>{type}</Value>
                    <Value>{amount}</Value>
                    <Value>{currency}</Value>
                </Row>
            ))}
            </tbody>
        </Wrapper>  
    );
}