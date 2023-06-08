import React from 'react';
import './styles.css';
import feedpost from '../../assets/data/feedposts.json';
import vnmIcon from '../../assets/icons/vnm.png';
import commentIcon from '../../assets/icons/comment.png';
import flameIcon from '../../assets/icons/fire-flame.png';

function Post(props) {
    const post = props.feed;
    const feed = post.image;
    const user = post.user;
    const username = user.username;
    const avatar = user.avatar;
    const vnm = post.vnm;
    const date = post.date;
    const description = post.description;
    const hastags = post.hashtag;
    const NofComments = post.comments;

    return (
        <div className='feedPost'>
            <img src={feed} className='post' />
            <div className='vnmContainer'>
                <p className='vnm'>{vnm}</p>
                <img src={vnmIcon} className='vnmIcon' />
            </div>
            <div className='postInfo'>
                <img src={avatar} className='avatar' />
                <div className='info'>
                    <p>@{username}</p>
                    <p className='days'>{date}</p>

                </div>
            </div>
            <div className='postDescription'>
                <p>{description}</p>
            </div>
            <div className='hashTags'>
                {
                    hastags.map((item, index) => (
                        <p className='Tag'>{item.tag}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Post