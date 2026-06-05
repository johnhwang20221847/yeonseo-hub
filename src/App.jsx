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
    name: "Project 00",
    url: "#",
    image: null
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
            target="_blank"
            rel="noopener noreferrer"
            style={styles.projectLink}
            className="project-item"
          >
            <div className="project-content" style={styles.projectContent}>
              <span style={styles.projectName}>{project.name}</span>
              <div style={styles.imageContainer}>
                {project.image ? (
                  <img src={project.image} alt={project.name} style={styles.icon} />
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