import React, { useState } from 'react'
import styled from 'styled-components'

import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

const Wrapper = styled.div`
    position: relative;
    width: 222px;
    font-size: 1.3rem;
    user-select: none;
    font-weight: 300;

    .icon {
        margin-right: 10px;
        color: black;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
    background-color: white;
    line-height: 30px;
    cursor: default;
    cursor: pointer;
`

const HeaderTitle = styled.div`
    margin: 2px 10px;
    margin-right: 30px;
    text-transform: capitalize;
`

const List = styled.ul`
    position: absolute;
    z-index: 10;
    overflow-y: scroll;
    width: 100%;
    max-height: 215px;
    border: 1px solid rgb(223, 223, 223);
    border-top: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
    background-color: white;
    text-align: left;
    -webkit-overflow-scrolling: touch;
    text-transform: capitalize;
`

const ListItem = styled.li`
    display: inline-block;
    overflow: hidden;
    width: 100%;
    padding: 8px 10px;
    font-size: 1.2rem;
    line-height: 1.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        color: red;
    }
`

const Dropdown = ({ categories, onSelectItems, headerTitle, placeholder }) => {
    const [listOpen, setListOpen] = useState(false)

    const toggleList = () => setListOpen(listOpen => !listOpen)

    return (
        <Wrapper>
            <Header onClick={() => toggleList()}>
                <HeaderTitle>
                    {headerTitle ? headerTitle : placeholder}
                </HeaderTitle>
                {listOpen ? (
                    <FaAngleUp className="icon" />
                ) : (
                    <FaAngleDown className="icon" />
                )}
            </Header>
            {listOpen && (
                <List>
                    {categories.map((category, index) => (
                        <ListItem
                            key={index}
                            onClick={() => {
                                onSelectItems(category)
                                setListOpen(false)
                            }}
                        >
                            {category}
                        </ListItem>
                    ))}
                </List>
            )}
        </Wrapper>
    )
}

export default Dropdown
