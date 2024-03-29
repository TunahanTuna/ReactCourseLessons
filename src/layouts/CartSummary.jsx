import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
// Single Page App. için Bu NavLink önemli.

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Acer Laptop</Dropdown.Item>
                                <Dropdown.Item>Asus Laptap</Dropdown.Item>
                                <Dropdown.Item>Dell Laptop</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
        </div>
    )
}
