import React from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import AddCommentForm from "../AddCommentForm";
import data from '../../data';


const PostComments: React.FC = () => {

    const [activeTab, setActiveTab] = React.useState(0);
    const comments = data.comments[activeTab ? 'popular' : 'new'];

    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className='container'>
                <Typography variant="h6" className="mb-20">
                    42 комментария
                </Typography>

                <Tabs onChange={(e, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные"/>
                    <Tab label="По порядку"/>
                </Tabs>
                <Divider/>
                <AddCommentForm/>
                <div className="mb-20"/>
                {comments.map(obj => <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt}/>)}
            </div>
        </Paper>
    );
};

export default PostComments;
