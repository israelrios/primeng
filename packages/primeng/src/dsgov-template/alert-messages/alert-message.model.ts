import { AlertMessageType } from './alert-message-type.model';
import { AlertMessageOptions } from './alert-message-options.model';

export interface AlertMessage {
    type: AlertMessageType;
    title: string;
    description?: string;
    details?: any[] | string[];
    count: number;
    options: AlertMessageOptions;
    target?: string;
    time: number;
}
