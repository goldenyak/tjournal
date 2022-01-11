import React from 'react';
import Link from 'next/link';
import {
    Paper,
    Button,
    IconButton,
    Avatar,
} from '@material-ui/core';

import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import {AuthDialog} from "../AuthDialog/AuthDialog";

export const Header: React.FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo"/>
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder="Поиск"/>
                </div>
                <Link href="/write">
                    <Button variant="contained" className={styles.penButton}>
                        Новая запись
                    </Button>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton onClick={handleClickOpen}>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="Remy Sharp"
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <ArrowBottom/>
                    </a>
                </Link>
            </div>
            {open && <AuthDialog onClose={handleClose}/>}
        </Paper>
    );
};
