import classNames from 'classnames/bind';
import styles from './InputSearchComponent.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import logoImage from '../../assets/image/logo/image.png';

const cx = classNames.bind(styles);

function InputSearchComponent({ widthInput, placeholderInput }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search_btn')}>
                <SearchOutlined className={cx('search_icon')} />
            </div>

            <input type="text" style={{ width: `${widthInput}px` }} placeholder={placeholderInput} />

            {/* Đang để display: none */}
            <div className={cx('search_result')}>
                <ul>
                    <li>
                        <img src={logoImage} alt="" />
                        <span>Nguyễn Thế Quang</span>
                    </li>
                    <li>
                        <img src={logoImage} alt="" />
                        <span>Nguyễn Thế Quang</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default InputSearchComponent;
