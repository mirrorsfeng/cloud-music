import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Slider,message } from 'antd';
import { NavLink } from 'react-router-dom';


import { getSizeImage,formatDate,getPlaySong } from "@/utils/format-utils";
import { 
    PlayerBarWrapper,
    Control,
    PlayInfo,
    Operator
} 
    from "./style";
import { shallowEqual, useDispatch,useSelector } from 'react-redux';
import { getSongDetailAction,
         changeSequenceAction,
         changeCurrentIndexAndSongAction,
         changeCurrentLyricIndexAction
} from '../store/actionCreators';


const AppPlayBar = memo(() => {
//props and state
    const [currentTime,setCurrentTime] = useState(0);
    const [progress,setprogress] = useState(0);
    const [isChanging,setIsChanging] =useState(false);
    const [isPlaying,setIsPlaying] = useState(false);
//redux hooks
    const { 
        currentSong,
        sequence,
        lyricList,
        currentLyricIndex,
        playList
      } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player","sequence"]),
        lyricList: state.getIn(["player","lyricList"]),
        currentLyricIndex: state.getIn(["player","currentLyricIndex"]),
        playList: state.getIn(["player","playList"])
      }), shallowEqual);

    
    const dispatch = useDispatch();
//other hooks
      const audioRef = useRef();

        useEffect(() => {
         dispatch(getSongDetailAction(1815692964));
        },[dispatch])

        useEffect(() => {
            audioRef.current.src = getPlaySong(currentSong.id);
            audioRef.current.play().then( res => {
                setIsPlaying(true);
            }).catch( err => {
                setIsPlaying(false);
            })
        },[currentSong])

//other handle
        const picUrl = (currentSong.al &&currentSong.al.picUrl) || "";
        const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
        const duration = currentSong.dt || 0 ;
        const showDuration = formatDate(duration,"mm:ss");
        const showCurrentTime = formatDate(currentTime,"mm:ss");
      

//handle function
        const playMusic = useCallback(() => {
           isPlaying ? audioRef.current.pause(): audioRef.current.play();
           setIsPlaying(!isPlaying);
        },[isPlaying])

        const timeUpdata = (e) => {
            const currentTime = e.target.currentTime;
           if(!isChanging){
            setCurrentTime(currentTime * 1000);
            setprogress(currentTime * 1000/duration * 100);
           }

           let currentTimeIndex=0;
           for(let i=0 ;i<lyricList.length;i++){
               if(currentTime * 1000<lyricList[i].time){
                   currentTimeIndex = i;
                   break;
               }
           }

           if(currentLyricIndex !== currentTimeIndex - 1){
           dispatch(changeCurrentLyricIndexAction(currentTimeIndex -1 ));
             let content = lyricList[currentTimeIndex-1] && lyricList[currentTimeIndex-1].content;
             if(content){
             message.open({
                 content: content,
                duration: 0,
                key: "lyric",
                className: "lyric-tip"
             })
            }
           }
        }

        const handleEnded = () => {
            if( sequence === 2){//单曲循环
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }else{
                dispatch(changeCurrentIndexAndSongAction(1));
            }
        }

        const changeSequence = () => {
            let currentSequence = sequence + 1;
            if(currentSequence > 2){
                currentSequence = 0 ;
            }
            dispatch(changeSequenceAction(currentSequence));
        }

        const changeMusic = (tag) => {
            dispatch(changeCurrentIndexAndSongAction(tag));
        }

        const sliderChange = useCallback((value) => {
            setIsChanging(true);
            const currentTime = value / 100 * duration
            setCurrentTime(currentTime);
           setprogress(value);
        },[duration])

        const sliderAfterChange = useCallback((value) => {
            const currentTime = value /100 *duration /1000;
            audioRef.current.currentTime = currentTime;
            setCurrentTime(currentTime * 1000)
            setIsChanging(false);

            if(!isPlaying){
                playMusic();
            }
        },[duration,isPlaying,playMusic])


    return (
        <PlayerBarWrapper className ="sprite_player">
           <div className ="content">
            <Control isPlaying = {isPlaying}>
                <button className ="sprite_player prev" onClick ={ e => changeMusic(-1)}></button>
                <button className ="sprite_player play" onClick = {e => playMusic()}></button>
                <button className ="sprite_player next" onClick ={ e => changeMusic(1)}></button>
            </Control>
            <PlayInfo>
                <div className ="image">
                    <NavLink to ="/discover/player">
                        <img src={getSizeImage(picUrl,35)}
                        alt=""/>
                    </NavLink>
                </div>
                <div className ="info">
                <div className ="song">
                    <span className ="song-name">{currentSong.name}</span>
                    <a className ="singer-name" href ="/todo">{singerName}</a>
                </div>
                <div className ="progress">
                <Slider defaultValue={30} 
                value = {progress}
                onChange ={sliderChange}
                onAfterChange ={sliderAfterChange} />
                <div className ="time">
                <span className ="now-time">{showCurrentTime}</span>
                <span className ="divider">/</span>
                <span className ="total-time">{showDuration}</span>
                </div>
                </div>
                </div>
            </PlayInfo>
            <Operator sequence = {sequence}>
                <div className ="left">
                    <button className = "sprite_player btn favor"></button>
                    <button className = "sprite_player btn share"></button>
                </div>
                <div className ="right sprite_player">
                    <button className ="sprite_player btn volume"></button>
                    <button className ="sprite_player btn loop" onClick ={ e => changeSequence()}></button>
                    <button className ="sprite_player btn playlist">
                        <span>{playList.length}</span>
                    </button>
                </div>
            </Operator>
           </div>
           <audio ref ={audioRef} onTimeUpdate ={ e=>timeUpdata(e)} onEnded ={ e => handleEnded(e)}/>
        </PlayerBarWrapper>
    );
});

export default AppPlayBar;