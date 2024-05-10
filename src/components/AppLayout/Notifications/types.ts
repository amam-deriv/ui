import React from "react";

export type TNotificationObject = {
    icon: React.ReactNode;
    title: string;
    message: string;
    buttonAction: () => void;
    actionText: string;
};
export type TNotificationsProps = {
    notifications: TNotificationObject[];
    clearNotificationsCallback: () => void;
    isNotificationsVisible?: boolean;
    componentConfig: {
        clearButtonText: string;
        modalTitle: string;
        noNotificationsTitle: string;
        noNotificationsMessage: string;
    };
};
