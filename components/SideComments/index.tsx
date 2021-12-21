import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import data from '../../data';

export const comments = [
    {
        createdAt: new Date().toString(),
        id: 1,
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://images.unsplash.com/photo-1639929781092-fe59fae895c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        createdAt: new Date().toString(),
        id: 2,
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://images.unsplash.com/photo-1639953610946-5871190d0162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
    {
        createdAt: new Date().toString(),
        id: 3,
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://images.unsplash.com/photo-1640003854809-b2a0e97bb289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
    },
];

interface CommentItemProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img
                    src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"/>
                <a href="#">
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a href="#">
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    );
};

export const SideComments = () => {
    return (
        <div className={styles.root}>
            <h3>
                Комментарии <ArrowRightIcon/>
            </h3>
            {data.comments.popular.map((obj) => (
                <CommentItem key={obj.id} {...obj} />
            ))}
        </div>
    );
};
