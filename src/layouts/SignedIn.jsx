import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" />
                <Dropdown pointing="top left" text="Tunahan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text ="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
