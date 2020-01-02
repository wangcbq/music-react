import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import '../../assets/scss/sheet-list.scss';

function SheetList({ data, type, children }) {
  if (!data) return null;
  if ((data.length + 1) % 3 === 0) data.push({});
  const convert = count => {
    const d = +count;
    if (d > 10000) return (d / 10000).toFixed(2) + '万';
    return d;
  };
  return (
    <>
      <div className='sheet-title'>
        {children}
      </div>
      <div className='sheet-list'>
        {
          data.map((item, i) => (
            <div key={i} className='sheet-item'>
              <Image rounded src={type && type === 'sheet' ? `${item.coverImgUrl}?param=200y200` : `${item.picUrl}?param=200y200`} />
              {
                !item.song && <div className='sheet-name'>{item.name}</div>
              }
              {item.playCount && (
                <div className='play-count'>
                  <Icon name='play' size='small' style={{ verticalAlign: 'middle' }} />
                  <span>{convert(item.playCount)}</span>
                </div>
              )}
              {
                item.song && <div className='song'>{item.song.name}</div>
              }
              {
                item.song && item.song.artists && <div className='singer'>{item.song.artists.map(item => item.name).join('、')}</div>
              }
              {
                item.icon && (
                  <div className='play-icon'>
                    <Icon name='play circle' size='large' color='red' />
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </>
  );
}

export default SheetList;
