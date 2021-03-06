import { getLocale } from 'umi';
import styles from './styles.less';

interface IMarketCardProps {
  image: string;
  imageType: string;
  name: string;
  owner?: string;
  price?: string;
  contract?: string;
  tokenId?: string;
  orderId?: string;
  onSale?: boolean;
  showFooter?: boolean;
  onClick?: (data: any) => void;
}

export default (props: IMarketCardProps) => {
  const {
    tokenId,
    orderId,
    onSale,
    contract,
    image,
    imageType,
    name,
    owner,
    price,
    showFooter,
    onClick,
  } = props;

  const handleClick = () => {
    onClick &&
      onClick({
        contract,
        tokenId,
        orderId,
        onSale,
      });
  };

  return (
    <div className={styles.marketCard} onClick={handleClick}>
      <div
        className={[
          styles.imgBox,
          onSale
            ? getLocale() === 'zh-CN'
              ? styles.imageBoxOnSaleCN
              : styles.imageBoxOnSale
            : null,
        ].join(' ')}
      >
        {imageType === 'image' && (
          <img src={image} alt="" className={styles.image} />
        )}
        {imageType === 'video' && (
          <video controls className={styles.video}>
            <source src={image} type="video/mp4"></source>
          </video>
        )}
        {imageType === 'audio' && (
          <audio src={image} controls className={styles.audio}></audio>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.name}>{name}</div>

        {!!showFooter && (
          <div className={styles.buyWrap}>
            <span className={styles.owner}>{owner}</span>
            <button className={styles.buyBtn} onClick={handleClick}>
              {price} BNB
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
