import { useContext } from 'react';
import { deflate } from 'zlib';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
}
