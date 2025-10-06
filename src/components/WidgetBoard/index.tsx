import {useWidget, WidgetsEnum} from "contexts/useWidget";
import React from "react";

export const WidgetBoard = () => {
    const Widgets = useWidget({
        widgets: [
            {
                type: WidgetsEnum.Gpio,
                configs: {
                    x: 100,
                    y: 100
                }
            }
        ]
    });
    return <div>{Widgets}</div>;
};

export default WidgetBoard;
