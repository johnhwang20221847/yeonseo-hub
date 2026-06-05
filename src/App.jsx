import React from 'react';

// 프로젝트 데이터 구성
const projects = [
  {
    id: 1,
    name: "선거 현수막 진단",
    url: "https://bannerscan.yeonseohwang.xyz",
    image: "/images/banner_icon.png" // public/images 폴더에 아이콘을 넣어주세요
  },
  {
    id: 2,
    name: "고령자 연하밥상",
    url: "https://elderfoodsafety.yeonseohwang.xyz",
    image: "/images/food_icon.png"
  },
  {
    id: 3,
    name: "음악 갤러리",
    // 💡 Netlify 주소를 적으시거나, 도메인 연결 후에는 'https://gallery.yeonseohwang.xyz' 형태로 적으셔도 됩니다!
    url: "https://johns-gallery.netlify.app", 
    image: null // 음악 아이콘 이미지가 있다면 '/images/music_icon.png' 형태로 넣어보세요
  },
  // 추가 프로젝트가 있다면 여기에 추가
];

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            // 💡 음악 갤러리는 현재 창에서 부드럽게 넘어가도록 id가 3번일 때 target 속성을 제거합니다.
            target={project.id === 3 ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={styles.projectLink}
            className="project-item"
          >
            <div className="project-content" style={styles.projectContent}>
              <span style={styles.projectName}>
                {/* 음악 메뉴 구분을 위해 이모지(🎵)를 추가해 주었습니다. 원치 않으시면 지우셔도 됩니다. */}
                {project.id === 3 ? `🎵 ${project.name}` : project.name}
              </span>
              <div style={styles.imageContainer}>
                {project.image ? (
                  <img src={project.image} alt={project.name} style={styles.icon} />
                ) : project.id === 3 ? (
                  // 음악 전용 플레이스홀더 아이콘 (음악 아이콘 이미지가 없을 때 동작)
                  <div style={{ ...styles.placeholderIcon, backgroundColor: '#7C4DFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' }}>
                    ♪
                  </div>
                ) : (
                  <div style={styles.placeholderIcon} />
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Hover 효과를 위한 인라인 스타일 */}
      <style>{`
        .project-item {
          display: block;
          text-decoration: none;
          color: black;
          transition: all 0.2s ease;
          border-bottom: 1px solid #eee;
        }
        .project-item:hover, .project-item:active {
          background-color: #1a1a1a !important;
          color: white !important;
        }
        .project-item:hover span {
          color: white !important;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  cardWrapper: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  projectContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 30px',
    cursor: 'pointer',
  },
  projectName: {
    fontSize: '22px',
    fontWeight: '800',
  },
  imageContainer: {
    width: '60px',
    height: '60px',
  },
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  placeholderIcon: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  }
};

export default App;
