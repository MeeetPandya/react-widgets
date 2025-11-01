import { useEffect, useState } from "react";
import WidgetContainer from "./WidgetCard";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WidgetContainer title="Clock">
      <div className=" flex text-3xl items-center justify-center text-amber-50">{time}</div>
    </WidgetContainer>
  );
}
