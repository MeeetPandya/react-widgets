import { useState } from "react";
import { WidgetCard } from "./WidgetCard";
import { Play, Pause, RotateCcw} from "lucide-react";

export const GifPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    
    //Placeholder GIF URL
    const gifUrl = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";

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