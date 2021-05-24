import React, { Component } from 'react'
import styles from './Drawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
        return (
            links.map( (link, index) => {
                return (
                    <li 
                        key = {index}
                    >
                        <NavLink
                            to = {link.to}
                            exact = {link.exact}
                            activeClassName = {styles.active}
                            onClick = {this.clickHandler}
                            className = {styles.NavLink}
                        >
                        {link.label}
                        </NavLink>
                    </li>
                )
            })
        )
    }

    render() {
        const cls = [styles.Drawer]

        if(!this.props.isOpen) {
            cls.push(styles.close)
        }

        const links = [
            {to: '/', label: 'Список', exact: true}
        ]

        if(this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Создать квиз', exact: false})
            links.push({to: '/logout', label: 'Выйти', exact: false})
        }else {
            links.push({to: '/auth', label: 'Авторизация', exact: false})
        }

        return (
            <>
                <nav className = {cls.join(' ')}>
                    {this.renderLinks(links)}
                </nav>
                {this.props.isOpen? <BackDrop onClick = {this.props.onClose}/> : null }
            </>            
        )
    }
}

export default Drawer