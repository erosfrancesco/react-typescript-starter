import React from "react";

export enum WidgetsEnum {
    Shell = "Shell",
    Gpio = "Gpio"
}

interface IWidgetProps {
    x: string | number;
    y: string | number;
}

type IWidgetMap = {
    [key in WidgetsEnum]: React.ReactNode;
};

export const WidgetsMap: IWidgetMap = {
    [WidgetsEnum.Shell]: <div>Shell</div>,
    [WidgetsEnum.Gpio]: <div>Gpio</div>
};

interface WidgetConfigItem {
    label: string;
    type: "text";
    defaultValue: string;
}

type IConfigMap = {
    [key in WidgetsEnum]: WidgetConfigItem[];
};

export const configMap: IConfigMap = {
    [WidgetsEnum.Shell]: [
        {
            label: "Folder",
            type: "text",
            defaultValue: "/folder"
        }
    ],
    [WidgetsEnum.Gpio]: []
};

type IUseWidget = {
    widgets: {
        type: WidgetsEnum;
        configs: IWidgetProps;
    }[];
};
export const useWidget = ({widgets}: IUseWidget): React.ReactNode => {
    const Widgets = React.memo(function Widgets() {
        return widgets.map(({type, configs}, i) => {
            const {x, y} = configs;
            return (
                <div key={i} style={{position: "absolute", left: x, top: y}}>
                    {WidgetsMap[type]}
                </div>
            );
        });
    });

    return <Widgets />;
};
