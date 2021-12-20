import React from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import AddCommentForm from "../AddCommentForm";

type CommentObj = {
    text: string,
    id: number,
    createdAt: string,
    user: {
        fullname: string,
        avatarUrl: string,
    }
}

interface PostCommentsProps {
    items: CommentObj[],
}

const PostComments: React.FC<PostCommentsProps> = ({items}) => {
    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className='container'>
                <Typography variant="h6" className="mb-20">
                    42 комментария
                </Typography>

                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные"/>
                    <Tab label="По порядку"/>
                </Tabs>
                <Divider/>
                <AddCommentForm/>
                <div className="mb-20"/>
                {items.map(obj => <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt}/>)}
            </div>
        </Paper>
    );
};

export default PostComments;
