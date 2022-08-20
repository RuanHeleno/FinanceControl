import React from 'react';
import GridItem from '../GridItem';
import * as C from './styles';

const Grid = ({ items, setItems }) => {
    const onDelete = (ID) => {
        const newArray = items.filter((transaction) => transaction.id !== ID);
        setItems(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.th width={40}>Descrição</C.th>
                    <C.th width={30}>Valor</C.th>
                    <C.th width={20}>Tipo</C.th>
                    <C.th width={10}>Opção</C.th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {items?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </C.Tbody>
        </C.Table>
  );
};

export default Grid;