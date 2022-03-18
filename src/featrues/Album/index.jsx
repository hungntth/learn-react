import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import Album from './components/Album';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Em đâu có biết được',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/1/1/d/a11d865ac4cc15cecbddd6b53c6ecea4.jpg'
        },

        {
            id: 2,
            name: 'Chiều hoàng hôn',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/a/c/4/bac4dd0f1fd6ba6156573de5bc29968e.jpg'
        },

        {
            id: 3,
            name: 'Ngàn ly đắng',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/f/4/67f45c88f958297af700913bf9e73301.jpg'
        },
        {
            id: 4,
            name: 'Ngàn ly đắng quá',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/f/4/67f45c88f958297af700913bf9e73301.jpg'
        },
        {
            id: 5,
            name: 'Ngàn ly quá đắng',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/f/4/67f45c88f958297af700913bf9e73301.jpg'
        },
        {
            id: 6,
            name: 'Quá ngàn ly đắng',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/f/4/67f45c88f958297af700913bf9e73301.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ nghe đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;