import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';


const ChannelBoard = ({channels}) => {


    return (
        <div className={cn(style.channels, "tui-window")}>
                <fieldset className="tui-fieldset">
                    <legend>Channels</legend>
                    {
                channels && channels.map((channel) => <span key={channel.id}>{channel.name}</span>)
                }
                </fieldset>
        </div>
    )
}
export default ChannelBoard;