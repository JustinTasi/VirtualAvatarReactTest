import Layout from '@/components/layout/Layout';
import styles from '@styles/pages/index.module.scss';
import Image from 'next/image';

export default function Home() {
  const userName = 'Justin';

  return (
    <Layout>
      <div className={styles.background}>
        <article className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>
              <Image src="/images/Logo.png" alt="MediMate Logo" width={200} height={60} className={styles.logo}/>
              <span className={styles.brandName}>
                MediMate智能聊天夥伴
              </span>
            </div>
          </div>
          <div id="voiceOnput">
            {userName}您好，歡迎使用智能聊天小夥伴 !
          </div>
          <button className={styles.voiceButton}>
            <Image src="/images/microphone.png" alt="Microphone" width={100} height={60} className={styles.voiceButtonImage}/>
          </button>
          <div className={styles.actions}>
            <div className={styles.voiceInput}>請開始說話</div>
            <button className={styles.stopButton}>結束錄音</button>
          </div>
        </article>
      </div>
    </Layout>
  );
}