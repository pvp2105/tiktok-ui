import styles from './header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
//giúp viết tên class gọn gàng hơn và giúp classname viết đc '-'

function Header() {
    return (
        // return <header className={styles['wrapper']}></header>;
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
