import Icon from '../../assets/img/notification_icon.svg';
import './style.css';

export default function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={Icon} alt="Notificar" />
        </div>
    );
}