import '../App.css';
import menu from '../icons/user.png';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
function Drop() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=" "
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <img src={menu} alt='menu img'></img>
        </a>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}>
                    <ul className="lista-drop">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">

            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Cadastrar</Dropdown.Item>
                <Dropdown.Item eventKey="2">Entrar</Dropdown.Item>
                <Dropdown.Item eventKey="3">Perfil</Dropdown.Item>
                <Dropdown.Item eventKey="4">Configurações</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="1">Sair</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export { Drop };