import { useState } from "react";
import { WidgetCard } from "./WidgetCard";
import { Play, Pause, RotateCcw} from "lucide-react";

export const GifPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    
    //Placeholder GIF URL
    const gifUrl = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdvZWxtODV3Ymd3NGRzYTk2ZHFsZ2JrN3phNjRjeGd3Y25nanF0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHZyixOnHwDDy/giphy.gif";

    return (
        <WidgetCard title="Gif Player">
            <div className="space-y-4  ">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-space-mid glow-purple">
                    <img 
                        src={gifUrl}
                        alt="Animated Gif"
                        className="w-full h-full object-cover"
                        style={{
                            animationPlayState: isPlaying ? 'running' : 'paused'
                        }}
                    />
                </div>
            </div>
        </WidgetCard>
    )
}