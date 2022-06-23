import React from "react";
const EmotionItem = ({
    emotion_id,
    emotion_img, 
    emotion_descript, 
    onClick, // 전달받는 요소는 함수의 경우 무조건 재생성되기 때문에 useCallback으로 재생성해주어야함 
    isSelected}) => {
    return (
        <div className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`].join(" ")} onClick={()=>onClick(emotion_id)} >
            <img src = {emotion_img} />
            <span>{emotion_descript}</span>
        </div>
    )
}

export default React.memo(EmotionItem);